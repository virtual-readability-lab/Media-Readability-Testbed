from collections import defaultdict, OrderedDict
import csv
import os
from pprint import pprint
import pandas as pd

post_engagement_questions = [
    "I have fun looking at newspaper articles.",
    "It is hard to pay attention to what I'm reading.",
    "I think it is important to understand what I read.",
    "I only read if I have to",
    "I think reading is important.",
    "I enjoy reading",
]

post_engagement_answers = {
    "Not at all like me": 1,
    "Not much like me": 2,
    "Can't decide": 3,
    "Kind of like me": 4,
    "A lot like me": 5,
}

font_preference_scores = {
    "I strongly prefer A": 1,
    "I prefer A": 2,
    "I strongly prefer B": 3,
    "I prefer B": 4,
    "I strongly prefer C": 5,
    "I prefer C": 6,
    "I don't prefer any of the font options": 7,
}

feedback_scores = {
    "Strongly Disagree": 1,
    "Disagree": 2,
    "Neutral": 3,
    "Agree": 4,
    "Strongly Agree": 5,
    "None": 1,
    "Moderate Amount": 2,
    "Severe Amount": 3,
}
trial_no_col = 8
article_id_col = 7
set_id = 6
article_skip_type = 12
comprension_choice = 17
comprension_accuracy = 16
font_name = 10
link_condition = 11

types = {"quescount": "ques", "proxcount": "proxy", "feedbackcount": "feedback"}
fields = {
    "ques": ["text", "label"],
    "proxy": ["text"],
    "feedback": ["text", "label"],
}
questions = {}

for _, output_row in pd.read_excel(
    "stimuli/stimulus_set.xlsx",
).iterrows():
    mapping = {}
    trialtypes = output_row["trialproperties"].split(";")
    for _property in trialtypes:
        value = int(_property[-1])
        _type = _property[:-1]

        if _type not in types:
            continue
        prefix = types[_type]

        for i in range(1, value + 1):

            output = {}
            for field in fields[prefix]:
                output[field] = output_row[f"{prefix}{i}{field}"]

            mapping[output_row[f"{prefix}{i}ID"]] = output
    questions[output_row["setID"]] = mapping

files = [
    f
    for f in os.listdir("./data")
    if f.endswith(".csv") and f.startswith("article_study_memory")
]

question_headers = [
    [
        f"question{i}_text",
        f"question{i}_label",
        f"question{i}_answer",
        f"question{i}_correct",
    ]
    for i in range(1, 6)  # 5 article questions
]
feedback_headers = [
    [
        f"feedback{i}_text",
        f"feedback{i}_label",
        f"feedback{i}_answer",
        f"feedback{i}_score",
    ]
    for i in range(1, 8)  # 8 Feedback questions
]
pre_survey_headers = [
    [f"pre_survey{i}_text", f"pre_survey_answer{i}"]
    for i in range(1, 4)  # 3 prox questions
]

post_engagement_headers = [
    [
        f"postEngagementQuestion_{x}",
        f"postEngagementChoices_{x}",
        f"postEngagementAnswer_{x}",
        f"postEngagementScore_{x}",
    ]
    for x in range(1, len(post_engagement_questions) + 1)
]

headers = [
    "participant",
    "counterbalance",
    "article",
    "link",
    "clickedLinks",
    "popUpExitMethod",
    "font",
    "word_count",
    "passage_reaction_time",
    "pop_reaction_time",
    "words_per_minute",
    "pop_up_words_per_minute",
    "total",
    "comprehensionCorrect",
    "comprehensionTotal",
    "comprehensionPrecent",
    *[item for _list in question_headers for item in _list],
    *[item for _list in feedback_headers for item in _list],
    *[item for _list in pre_survey_headers for item in _list],
    "snellen_right",
    "snellen_left",
    "snellen_both",
    "pelli-robson_test",
    "memory_practice_choices",
    "memory_practice_answers",
    "memory_practice_num_choices",
    "memory_practice_total_correct",
    "memory_practice_percentage",
    "memory_6word_choices",
    "memory_6word_answers",
    "memory_6word_num_choices",
    "memory_6word_total_correct",
    "memory_6word_percentage",
    "memory_12word_choices",
    "memory_12word_answers",
    "memory_12word_num_choices",
    "memory_12word_total_correct",
    "memory_12word_percentage",
    "memory_18word_choices",
    "memory_18word_answers",
    "memory_18word_num_choices",
    "memory_18word_total_correct",
    "memory_18word_percentage",
    "memory_all_num_choices",
    "memory_all_total_correct",
    "memory_all_percentage",
    "name",
    "vision",
    "visionCorrectionType",
    "hospitalStay",
    "readingArticles",
    "disabilities",
    "device",
    "surroundings",
    "computerClasses",
    "computerUse",
    "glasses",
    "digitalReadingChallenges",
    "age",
    "occupation",
    "degree",
    "fontPreference",
    "fontPreferenceScore",
    "hyperlinkAwareness",
    "hyperlkinkKnowledge",
    "hyperlinkBenefit",
    "postAttention",
    "postRandomly",
    *[item for _list in post_engagement_headers for item in _list],
    "postEngagementChoices",
    "hyperlinkPreference",
    "troubleWithTest",
]
with open("data/concatenated.csv", "w", newline="", encoding="utf-8") as outfile:
    writer = csv.writer(outfile, quoting=csv.QUOTE_NONNUMERIC)
    writer.writerow(headers)

    for file_name in files:
        with open(f"data/{file_name}", "r") as data_file:
            reader = csv.reader(data_file)
            demo = []
            screening = []
            post_survey = []
            memory = OrderedDict()
            articles = defaultdict(dict)
            post_engagement = []

            participant = ""
            hyperlink_preference = ""
            counterbalance = ""
            troubleWithTest = ""
            try:
                for row in reader:
                    participant = row[34]
                    if row[5] is not None and row[5] != "":
                        counterbalance = row[5]

                    if row[trial_no_col] == "demographic_scale":
                        demo.append(row[comprension_choice].replace("\n", ""))
                    elif row[trial_no_col] == "screening":
                        screening.append(row[comprension_choice].replace("\n", ""))

                    elif row[trial_no_col] == "memory_test":
                        if not row[set_id] in memory:
                            memory[row[set_id]] = {
                                "choices": [],
                                "answers": [],
                                "correct": [],
                            }
                        memory[row[set_id]]["choices"].append(row[article_id_col])
                        memory[row[set_id]]["answers"].append(row[comprension_choice])
                        memory[row[set_id]]["correct"].append(row[comprension_accuracy])

                    elif row[trial_no_col] == "article_trials":
                        article_id = row[set_id]
                        articles[article_id]["font"] = row[font_name]
                        articles[article_id]["linkCondition"] = row[link_condition]
                        if "links" not in articles[article_id]:
                            articles[article_id]["links"] = []

                        if "popup" in row[article_id_col]:
                            if "pop_up_time" not in articles[article_id]:
                                articles[article_id]["pop_up_time"] = []
                                articles[article_id]["pop_up_wpm"] = []
                                articles[article_id]["popup_exit_method"] = []

                            articles[article_id]["pop_up_time"].append(row[14])
                            articles[article_id]["pop_up_wpm"].append(row[15])
                            articles[article_id]["popup_exit_method"].append(row[12])

                        if row[article_id_col].startswith("AR"):
                            if row[article_skip_type] == "toPopup":
                                articles[article_id]["links"].append(
                                    row[comprension_choice]
                                )
                            elif row[article_skip_type] == "articleCompleted":
                                # Handle articel stats speed, word count, etc
                                articles[article_id]["word_count"] = row[13]
                                articles[article_id]["passage_rt"] = row[14]
                                articles[article_id]["words_per_minute"] = row[15]

                        if row[article_id_col].startswith("Q"):
                            question_id = row[article_id_col]

                            if "questions" not in articles[article_id]:
                                articles[article_id]["questions"] = {}

                            articles[article_id]["questions"][question_id] = {
                                **questions[article_id][question_id],
                                "answer": row[comprension_choice],
                                "correct": row[comprension_accuracy],
                            }

                        if row[article_id_col].startswith("F"):
                            feedback_id = row[article_id_col]
                            if "feedback" not in articles[article_id]:
                                articles[article_id]["feedback"] = {}

                            articles[article_id]["feedback"][feedback_id] = {
                                **questions[article_id][feedback_id],
                                "answer": row[comprension_choice],
                            }

                        if row[article_id_col].startswith("PR"):
                            pre_survey_id = row[article_id_col][:6]

                            if "pre_survey" not in articles[article_id]:
                                articles[article_id]["pre_survey"] = {}

                            pre_survey = questions[article_id][pre_survey_id]

                            if pre_survey["text"].startswith("des;"):
                                pre_survey["text"] = pre_survey["text"][4:]

                            articles[article_id]["pre_survey"][pre_survey_id] = {
                                "text": pre_survey["text"],
                                "answer": row[comprension_choice].replace("\n", ""),
                            }

                    elif row[set_id] == "post_survey":
                        post_survey.append(row[comprension_choice])
                    elif row[set_id] == "post_engagement":
                        post_engagement.append(
                            [row[article_id_col], row[comprension_choice]]
                        )
                    elif row[set_id] == "hyperlink_preference":
                        hyperlink_preference = row[comprension_choice]
                    elif row[set_id] == "troubleWithTest":
                        troubleWithTest = row[comprension_choice]
                    else:
                        pass
                        # print(f"Skipping line {reader.line_num}")
            except Exception as e:
                # Happens due to format change of test. Can be skipped
                if "Q007d" in str(e):
                    print(
                        f"Skipping {file_name} due file not matching current number of test questions"
                    )
                else:
                    print(f"Unexpcted Error occurred for file {file_name}")
                continue
            for article_id, article in articles.items():
                output_row = [
                    participant,
                    counterbalance,
                    article_id,
                    article["linkCondition"],
                    ";".join(article["links"]),
                    ";".join(article.get("popup_exit_method", [])),
                    article["font"],
                    article["word_count"],
                    article["passage_rt"],
                    ";".join(article.get("pop_up_time", [])),
                    article["words_per_minute"],
                    ";".join(article.get("pop_up_wpm", [])),
                    sum(map(lambda x: float(x), article.get("pop_up_time", [0])))
                    + float(article["passage_rt"]),
                    sum([int(x["correct"]) for x in article["questions"].values()]),
                    len(article["questions"]),
                    (
                        sum([int(x["correct"]) for x in article["questions"].values()])
                        / len(article["questions"])
                    )
                    * 100,
                ]

                num_questions = len(article["questions"])
                num_question_headers = len(question_headers)
                if num_questions < num_question_headers:
                    for i in range(num_question_headers - num_questions):
                        article["questions"][i] = {}

                for question in article["questions"].values():
                    output_row.extend(
                        [
                            question.get("text", "").strip(),
                            question.get("label", "").strip(),
                            question.get("answer", "").strip(),
                            question.get("correct", "").strip(),
                        ]
                    )

                num_feedback = len(article["feedback"])
                num_feedback_headers = len(feedback_headers)
                if num_feedback < num_feedback_headers:
                    for i in range(num_feedback_headers - num_feedback):
                        article["feedback"][i] = {}

                for feedback in article["feedback"].values():
                    output_row.extend(
                        [
                            feedback.get("text", "").strip(),
                            feedback.get("label", "").strip(),
                            feedback.get("answer", "").strip(),
                            feedback_scores[feedback.get("answer", "").strip()],
                        ]
                    )

                num_pre_survey = len(article["pre_survey"])
                num_survey_headers = len(pre_survey_headers)
                if num_pre_survey < num_survey_headers:
                    for i in range(num_survey_headers - num_pre_survey):
                        article["pre_survey"][i] = {}

                for pre_survey in article["pre_survey"].values():
                    output_row.extend(
                        [
                            pre_survey.get("text", "").strip(),
                            pre_survey.get("answer", "").strip(),
                        ]
                    )

                if len(screening) == 3:
                    screening = [*screening[:2], screening[1], screening[-1]]
                    print("record found without all eye screenings")
                output_row.extend(screening)

                all_mem_chioces = 0
                all_mem_total = 0
                for memory_item in memory.values():
                    total_correct = sum(map(lambda x: int(x), memory_item["correct"]))

                    all_mem_chioces += len(memory_item["choices"])
                    all_mem_total += total_correct

                    output_row.extend(
                        [
                            ";".join(memory_item["choices"]),
                            ";".join(memory_item["answers"]),
                            len(memory_item["choices"]),
                            total_correct,
                            (total_correct / len(memory_item["choices"])) * 100,
                        ]
                    )

                output_row.extend(
                    [
                        all_mem_chioces,
                        all_mem_total,
                        (all_mem_total / all_mem_chioces) * 100,
                    ]
                )

                output_row.extend(demo)
                font_pref = post_survey[0]
                output_row.extend([font_pref, font_preference_scores[font_pref]])
                output_row.extend(post_survey[1:])

                for question in post_engagement:
                    output_row.append(question[0])
                    output_row.append(";".join(post_engagement_answers.keys()))
                    output_row.append(question[1])
                    output_row.append(post_engagement_answers[question[1]])

                output_row.append(
                    ";".join(map(lambda x: x[1], post_engagement))
                    if len(post_engagement) > 0
                    else ""
                )

                output_row.append(hyperlink_preference)
                output_row.append(troubleWithTest.replace("\n", " "))

                writer.writerow(output_row)

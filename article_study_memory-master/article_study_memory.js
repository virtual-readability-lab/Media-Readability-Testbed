/***************************** 
 * Article_Study_Memory Test *
 *****************************/

import { core, data, sound, util, visual, hardware } from './lib/psychojs-2022.2.3.js';
const { PsychoJS } = core;
const { TrialHandler, MultiStairHandler } = data;
const { Scheduler } = util;
//some handy aliases as in the psychopy scripts;
const { abs, sin, cos, PI: pi, sqrt } = Math;
const { round } = util;


// store info about the experiment session:
let expName = 'article_study_memory';  // from the Builder filename that created this script
let expInfo = {
    'Your Test ID': '',
    'Full Name': '',
};

// Start code blocks for 'Before Experiment'
// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color([0.4275, 0.4275, 0.4275]),
  units: 'pix',
  waitBlanking: true
});
// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); }, flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
flowScheduler.add(initializeRoutineBegin());
flowScheduler.add(initializeRoutineEachFrame());
flowScheduler.add(initializeRoutineEnd());
flowScheduler.add(preCheckScreenRoutineBegin());
flowScheduler.add(preCheckScreenRoutineEachFrame());
flowScheduler.add(preCheckScreenRoutineEnd());
const set_file_checkLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(set_file_checkLoopBegin(set_file_checkLoopScheduler));
flowScheduler.add(set_file_checkLoopScheduler);
flowScheduler.add(set_file_checkLoopEnd);
const screenScaleTrialsLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(screenScaleTrialsLoopBegin(screenScaleTrialsLoopScheduler));
flowScheduler.add(screenScaleTrialsLoopScheduler);
flowScheduler.add(screenScaleTrialsLoopEnd);
flowScheduler.add(generalInstructions2RoutineBegin());
flowScheduler.add(generalInstructions2RoutineEachFrame());
flowScheduler.add(generalInstructions2RoutineEnd());
flowScheduler.add(informedConsent1RoutineBegin());
flowScheduler.add(informedConsent1RoutineEachFrame());
flowScheduler.add(informedConsent1RoutineEnd());
flowScheduler.add(seatingInstructionsRoutineBegin());
flowScheduler.add(seatingInstructionsRoutineEachFrame());
flowScheduler.add(seatingInstructionsRoutineEnd());
const stimulus_listDLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(stimulus_listDLoopBegin(stimulus_listDLoopScheduler));
flowScheduler.add(stimulus_listDLoopScheduler);
flowScheduler.add(stimulus_listDLoopEnd);
flowScheduler.add(screening_instructionsRoutineBegin());
flowScheduler.add(screening_instructionsRoutineEachFrame());
flowScheduler.add(screening_instructionsRoutineEnd());
const snellen_trialsLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(snellen_trialsLoopBegin(snellen_trialsLoopScheduler));
flowScheduler.add(snellen_trialsLoopScheduler);
flowScheduler.add(snellen_trialsLoopEnd);
flowScheduler.add(memory_general_instructionsRoutineBegin());
flowScheduler.add(memory_general_instructionsRoutineEachFrame());
flowScheduler.add(memory_general_instructionsRoutineEnd());
const memory_trialsLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(memory_trialsLoopBegin(memory_trialsLoopScheduler));
flowScheduler.add(memory_trialsLoopScheduler);
flowScheduler.add(memory_trialsLoopEnd);
flowScheduler.add(general_instructionsRoutineBegin());
flowScheduler.add(general_instructionsRoutineEachFrame());
flowScheduler.add(general_instructionsRoutineEnd());
flowScheduler.add(teaching_linksRoutineBegin());
flowScheduler.add(teaching_linksRoutineEachFrame());
flowScheduler.add(teaching_linksRoutineEnd());
flowScheduler.add(practiceInstructionsRoutineBegin());
flowScheduler.add(practiceInstructionsRoutineEachFrame());
flowScheduler.add(practiceInstructionsRoutineEnd());
const blocksLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(blocksLoopBegin(blocksLoopScheduler));
flowScheduler.add(blocksLoopScheduler);
flowScheduler.add(blocksLoopEnd);
flowScheduler.add(preferenceInstructionsRoutineRoutineBegin());
flowScheduler.add(preferenceInstructionsRoutineRoutineEachFrame());
flowScheduler.add(preferenceInstructionsRoutineRoutineEnd());
flowScheduler.add(font_preferenceRoutineBegin());
flowScheduler.add(font_preferenceRoutineEachFrame());
flowScheduler.add(font_preferenceRoutineEnd());
flowScheduler.add(hyperlink_preferenceRoutineBegin());
flowScheduler.add(hyperlink_preferenceRoutineEachFrame());
flowScheduler.add(hyperlink_preferenceRoutineEnd());
const post_engagement_loopLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(post_engagement_loopLoopBegin(post_engagement_loopLoopScheduler));
flowScheduler.add(post_engagement_loopLoopScheduler);
flowScheduler.add(post_engagement_loopLoopEnd);
const post_survey_loopLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(post_survey_loopLoopBegin(post_survey_loopLoopScheduler));
flowScheduler.add(post_survey_loopLoopScheduler);
flowScheduler.add(post_survey_loopLoopEnd);
flowScheduler.add(trouble_with_testRoutineBegin());
flowScheduler.add(trouble_with_testRoutineEachFrame());
flowScheduler.add(trouble_with_testRoutineEnd());
flowScheduler.add(writeDataToFileRoutineBegin());
flowScheduler.add(writeDataToFileRoutineEachFrame());
flowScheduler.add(writeDataToFileRoutineEnd());
flowScheduler.add(finalInstructionsRoutineBegin());
flowScheduler.add(finalInstructionsRoutineEachFrame());
flowScheduler.add(finalInstructionsRoutineEnd());
flowScheduler.add(quitPsychoJS, '', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, '', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
    {'name': 'stimuli/article_images/article2_Georgia_Link.jpg', 'path': 'stimuli/article_images/article2_Georgia_Link.jpg'},
    {'name': 'stimuli/popup_images/article6_popup2_Roboto.jpg', 'path': 'stimuli/popup_images/article6_popup2_Roboto.jpg'},
    {'name': 'back_button.jpg', 'path': 'back_button.jpg'},
    {'name': 'stimuli/article_images/article3_Times_NoLink.jpg', 'path': 'stimuli/article_images/article3_Times_NoLink.jpg'},
    {'name': 'stimuli/memory/no.jpg', 'path': 'stimuli/memory/no.jpg'},
    {'name': 'stimuli/link_sheets/article4_Times_links.xlsx', 'path': 'stimuli/link_sheets/article4_Times_links.xlsx'},
    {'name': 'stimuli/popup_images/article1_popup6_Georgia.jpg', 'path': 'stimuli/popup_images/article1_popup6_Georgia.jpg'},
    {'name': 'stimuli/popup_images/article5_popup5_Georgia.jpg', 'path': 'stimuli/popup_images/article5_popup5_Georgia.jpg'},
    {'name': 'stimuli/link_sheets/article3_Roboto_links.xlsx', 'path': 'stimuli/link_sheets/article3_Roboto_links.xlsx'},
    {'name': 'stimuli/link_sheets/article6_Georgia_links.xlsx', 'path': 'stimuli/link_sheets/article6_Georgia_links.xlsx'},
    {'name': 'stimuli/article_images/article2_Roboto_Link.jpg', 'path': 'stimuli/article_images/article2_Roboto_Link.jpg'},
    {'name': 'stimuli/popup_images/article1_popup5_Times.jpg', 'path': 'stimuli/popup_images/article1_popup5_Times.jpg'},
    {'name': 'stimuli/popup_images/article2_popup6_Georgia.jpg', 'path': 'stimuli/popup_images/article2_popup6_Georgia.jpg'},
    {'name': 'stimuli/article_images/article2_Georgia_NoLink.jpg', 'path': 'stimuli/article_images/article2_Georgia_NoLink.jpg'},
    {'name': 'stimuli/popup_images/article1_popup2_Roboto.jpg', 'path': 'stimuli/popup_images/article1_popup2_Roboto.jpg'},
    {'name': 'stimuli/link_sheets/article4_Roboto_links.xlsx', 'path': 'stimuli/link_sheets/article4_Roboto_links.xlsx'},
    {'name': 'stimuli/popup_images/article2_popup6_Roboto.jpg', 'path': 'stimuli/popup_images/article2_popup6_Roboto.jpg'},
    {'name': 'stimuli/popup_images/article4_popup3_Times.jpg', 'path': 'stimuli/popup_images/article4_popup3_Times.jpg'},
    {'name': 'stimuli/link_sheets/article1_Georgia_links.xlsx', 'path': 'stimuli/link_sheets/article1_Georgia_links.xlsx'},
    {'name': 'stimuli/article_images/article1_Georgia_NoLink.jpg', 'path': 'stimuli/article_images/article1_Georgia_NoLink.jpg'},
    {'name': 'stimuli/popup_images/article2_popup3_Georgia.jpg', 'path': 'stimuli/popup_images/article2_popup3_Georgia.jpg'},
    {'name': 'stimuli/link_sheets/article7_Open Sans_links.xlsx', 'path': 'stimuli/link_sheets/article7_Open Sans_links.xlsx'},
    {'name': 'stimuli/popup_images/article3_popup1_Times.jpg', 'path': 'stimuli/popup_images/article3_popup1_Times.jpg'},
    {'name': 'stimuli/article_images/article1_Roboto_NoLink.jpg', 'path': 'stimuli/article_images/article1_Roboto_NoLink.jpg'},
    {'name': 'stimuli/article_images/article2_Times_Link.jpg', 'path': 'stimuli/article_images/article2_Times_Link.jpg'},
    {'name': 'stimuli/popup_images/article1_popup2_Times.jpg', 'path': 'stimuli/popup_images/article1_popup2_Times.jpg'},
    {'name': 'stimuli/popup_images/article4_popup3_Roboto.jpg', 'path': 'stimuli/popup_images/article4_popup3_Roboto.jpg'},
    {'name': 'stimuli/popup_images/article1_popup4_Times.jpg', 'path': 'stimuli/popup_images/article1_popup4_Times.jpg'},
    {'name': 'stimuli/popup_images/article2_popup4_Georgia.jpg', 'path': 'stimuli/popup_images/article2_popup4_Georgia.jpg'},
    {'name': 'stimuli/popup_images/article3_popup5_Roboto.jpg', 'path': 'stimuli/popup_images/article3_popup5_Roboto.jpg'},
    {'name': 'stimuli/popup_images/article4_popup4_Times.jpg', 'path': 'stimuli/popup_images/article4_popup4_Times.jpg'},
    {'name': 'stimuli/popup_images/article3_popup1_Georgia.jpg', 'path': 'stimuli/popup_images/article3_popup1_Georgia.jpg'},
    {'name': 'stimuli/popup_images/article2_popup6_Times.jpg', 'path': 'stimuli/popup_images/article2_popup6_Times.jpg'},
    {'name': 'stimuli/article_images/article4_Times_NoLink.jpg', 'path': 'stimuli/article_images/article4_Times_NoLink.jpg'},
    {'name': 'stimuli/popup_images/article1_popup6_Times.jpg', 'path': 'stimuli/popup_images/article1_popup6_Times.jpg'},
    {'name': 'stimuli/popup_images/article2_popup2_Georgia.jpg', 'path': 'stimuli/popup_images/article2_popup2_Georgia.jpg'},
    {'name': 'stimuli/popup_images/article5_popup2_Times.jpg', 'path': 'stimuli/popup_images/article5_popup2_Times.jpg'},
    {'name': 'stimuli/article_images/article6_Roboto_Link.jpg', 'path': 'stimuli/article_images/article6_Roboto_Link.jpg'},
    {'name': 'stimuli/article_images/article2_Roboto_NoLink.jpg', 'path': 'stimuli/article_images/article2_Roboto_NoLink.jpg'},
    {'name': 'stimuli/teaching_link.jpg', 'path': 'stimuli/teaching_link.jpg'},
    {'name': 'stimuli/preference_images/alltogether.jpg', 'path': 'stimuli/preference_images/alltogether.jpg'},
    {'name': 'stimuli/link_sheets/article2_Times_links.xlsx', 'path': 'stimuli/link_sheets/article2_Times_links.xlsx'},
    {'name': 'stimuli/popup_images/article4_popup1_Roboto.jpg', 'path': 'stimuli/popup_images/article4_popup1_Roboto.jpg'},
    {'name': 'stimuli/popup_images/article7_popup2_Open Sans.jpg', 'path': 'stimuli/popup_images/article7_popup2_Open Sans.jpg'},
    {'name': 'stimuli/popup_images/article5_popup1_Georgia.jpg', 'path': 'stimuli/popup_images/article5_popup1_Georgia.jpg'},
    {'name': 'stimuli/popup_images/article5_popup3_Times.jpg', 'path': 'stimuli/popup_images/article5_popup3_Times.jpg'},
    {'name': 'stimuli/link_sheets/article4_Georgia_links.xlsx', 'path': 'stimuli/link_sheets/article4_Georgia_links.xlsx'},
    {'name': 'stimuli/memory/yes.jpg', 'path': 'stimuli/memory/yes.jpg'},
    {'name': 'stimuli/popup_images/article1_popup6_Roboto.jpg', 'path': 'stimuli/popup_images/article1_popup6_Roboto.jpg'},
    {'name': 'stimuli/demographics.xlsx', 'path': 'stimuli/demographics.xlsx'},
    {'name': 'stimuli/popup_images/article1_popup4_Roboto.jpg', 'path': 'stimuli/popup_images/article1_popup4_Roboto.jpg'},
    {'name': 'stimuli/screening_images/pelli_robson_numbered.jpg', 'path': 'stimuli/screening_images/pelli_robson_numbered.jpg'},
    {'name': 'stimuli/popup_images/article1_popup2_Georgia.jpg', 'path': 'stimuli/popup_images/article1_popup2_Georgia.jpg'},
    {'name': 'stimuli/article_images/article3_Georgia_NoLink.jpg', 'path': 'stimuli/article_images/article3_Georgia_NoLink.jpg'},
    {'name': 'stimuli/popup_images/article1_popup3_Georgia.jpg', 'path': 'stimuli/popup_images/article1_popup3_Georgia.jpg'},
    {'name': 'stimuli/popup_images/article2_popup3_Times.jpg', 'path': 'stimuli/popup_images/article2_popup3_Times.jpg'},
    {'name': 'stimuli/article_images/article5_Roboto_NoLink.jpg', 'path': 'stimuli/article_images/article5_Roboto_NoLink.jpg'},
    {'name': 'stimuli/popup_images/article3_popup5_Times.jpg', 'path': 'stimuli/popup_images/article3_popup5_Times.jpg'},
    {'name': 'stimuli/popup_images/article6_popup4_Roboto.jpg', 'path': 'stimuli/popup_images/article6_popup4_Roboto.jpg'},
    {'name': 'stimuli/popup_images/article5_popup2_Roboto.jpg', 'path': 'stimuli/popup_images/article5_popup2_Roboto.jpg'},
    {'name': 'blocks/blocks_1.xlsx', 'path': 'blocks/blocks_1.xlsx'},
    {'name': 'stimuli/popup_images/article5_popup4_Georgia.jpg', 'path': 'stimuli/popup_images/article5_popup4_Georgia.jpg'},
    {'name': 'stimuli/article_images/article6_Times_NoLink.jpg', 'path': 'stimuli/article_images/article6_Times_NoLink.jpg'},
    {'name': 'stimuli/popup_images/article3_popup1_Roboto.jpg', 'path': 'stimuli/popup_images/article3_popup1_Roboto.jpg'},
    {'name': 'stimuli/popup_images/article2_popup5_Times.jpg', 'path': 'stimuli/popup_images/article2_popup5_Times.jpg'},
    {'name': 'stimuli/popup_images/article3_popup3_Roboto.jpg', 'path': 'stimuli/popup_images/article3_popup3_Roboto.jpg'},
    {'name': 'stimuli/popup_images/article5_popup4_Times.jpg', 'path': 'stimuli/popup_images/article5_popup4_Times.jpg'},
    {'name': 'stimuli/article_images/article6_Georgia_Link.jpg', 'path': 'stimuli/article_images/article6_Georgia_Link.jpg'},
    {'name': 'stimuli/article_images/article1_Roboto_Link.jpg', 'path': 'stimuli/article_images/article1_Roboto_Link.jpg'},
    {'name': 'stimuli/article_images/article4_Roboto_Link.jpg', 'path': 'stimuli/article_images/article4_Roboto_Link.jpg'},
    {'name': 'stimuli/article_images/article5_Times_NoLink.jpg', 'path': 'stimuli/article_images/article5_Times_NoLink.jpg'},
    {'name': 'stimuli/popup_images/article1_popup1_Roboto.jpg', 'path': 'stimuli/popup_images/article1_popup1_Roboto.jpg'},
    {'name': 'stimuli/popup_images/article4_popup1_Georgia.jpg', 'path': 'stimuli/popup_images/article4_popup1_Georgia.jpg'},
    {'name': 'stimuli/popup_images/article4_popup3_Georgia.jpg', 'path': 'stimuli/popup_images/article4_popup3_Georgia.jpg'},
    {'name': 'stimuli/article_images/article4_Georgia_Link.jpg', 'path': 'stimuli/article_images/article4_Georgia_Link.jpg'},
    {'name': 'stimuli/link_sheets/article5_Times_links.xlsx', 'path': 'stimuli/link_sheets/article5_Times_links.xlsx'},
    {'name': 'stimuli/popup_images/article3_popup4_Roboto.jpg', 'path': 'stimuli/popup_images/article3_popup4_Roboto.jpg'},
    {'name': 'stimuli/article_images/article5_Roboto_Link.jpg', 'path': 'stimuli/article_images/article5_Roboto_Link.jpg'},
    {'name': 'stimuli/article_images/article3_Roboto_Link.jpg', 'path': 'stimuli/article_images/article3_Roboto_Link.jpg'},
    {'name': 'stimuli/link_sheets/article3_Georgia_links.xlsx', 'path': 'stimuli/link_sheets/article3_Georgia_links.xlsx'},
    {'name': 'stimuli/article_images/article5_Times_Link.jpg', 'path': 'stimuli/article_images/article5_Times_Link.jpg'},
    {'name': 'stimuli/popup_images/article4_popup2_Georgia.jpg', 'path': 'stimuli/popup_images/article4_popup2_Georgia.jpg'},
    {'name': 'stimuli/popup_images/article5_popup3_Georgia.jpg', 'path': 'stimuli/popup_images/article5_popup3_Georgia.jpg'},
    {'name': 'stimuli/popup_images/article7_popup1_Open Sans.jpg', 'path': 'stimuli/popup_images/article7_popup1_Open Sans.jpg'},
    {'name': 'stimuli/popup_images/article3_popup3_Georgia.jpg', 'path': 'stimuli/popup_images/article3_popup3_Georgia.jpg'},
    {'name': 'stimuli/article_images/article1_Times_NoLink.jpg', 'path': 'stimuli/article_images/article1_Times_NoLink.jpg'},
    {'name': 'stimuli/popup_images/article6_popup1_Times.jpg', 'path': 'stimuli/popup_images/article6_popup1_Times.jpg'},
    {'name': 'stimuli/popup_images/article1_popup7_Georgia.jpg', 'path': 'stimuli/popup_images/article1_popup7_Georgia.jpg'},
    {'name': 'stimuli/popup_images/article1_popup3_Roboto.jpg', 'path': 'stimuli/popup_images/article1_popup3_Roboto.jpg'},
    {'name': 'stimuli/popup_images/article7_popup3_Open Sans.jpg', 'path': 'stimuli/popup_images/article7_popup3_Open Sans.jpg'},
    {'name': 'stimuli/link_sheets/article1_Times_links.xlsx', 'path': 'stimuli/link_sheets/article1_Times_links.xlsx'},
    {'name': 'stimuli/popup_images/article3_popup4_Times.jpg', 'path': 'stimuli/popup_images/article3_popup4_Times.jpg'},
    {'name': 'stimuli/popup_images/article5_popup5_Roboto.jpg', 'path': 'stimuli/popup_images/article5_popup5_Roboto.jpg'},
    {'name': 'stimuli/popup_images/article3_popup2_Roboto.jpg', 'path': 'stimuli/popup_images/article3_popup2_Roboto.jpg'},
    {'name': 'stimuli/article_images/article5_Georgia_Link.jpg', 'path': 'stimuli/article_images/article5_Georgia_Link.jpg'},
    {'name': 'stimuli/link_sheets/article5_Roboto_links.xlsx', 'path': 'stimuli/link_sheets/article5_Roboto_links.xlsx'},
    {'name': 'stimuli/screening_images/snellen_numbered.png', 'path': 'stimuli/screening_images/snellen_numbered.png'},
    {'name': 'stimuli/popup_images/article2_popup1_Times.jpg', 'path': 'stimuli/popup_images/article2_popup1_Times.jpg'},
    {'name': 'stimuli/article_images/article7_Open Sans_NoLink.jpg', 'path': 'stimuli/article_images/article7_Open Sans_NoLink.jpg'},
    {'name': 'stimuli/popup_images/article5_popup4_Roboto.jpg', 'path': 'stimuli/popup_images/article5_popup4_Roboto.jpg'},
    {'name': 'stimuli/popup_images/article6_popup1_Georgia.jpg', 'path': 'stimuli/popup_images/article6_popup1_Georgia.jpg'},
    {'name': 'stimuli/link_sheets/article1_Roboto_links.xlsx', 'path': 'stimuli/link_sheets/article1_Roboto_links.xlsx'},
    {'name': 'stimuli/popup_images/article2_popup5_Roboto.jpg', 'path': 'stimuli/popup_images/article2_popup5_Roboto.jpg'},
    {'name': 'stimuli/link_sheets/article5_Georgia_links.xlsx', 'path': 'stimuli/link_sheets/article5_Georgia_links.xlsx'},
    {'name': 'stimuli/popup_images/article3_popup2_Georgia.jpg', 'path': 'stimuli/popup_images/article3_popup2_Georgia.jpg'},
    {'name': 'stimuli/popup_images/article5_popup1_Roboto.jpg', 'path': 'stimuli/popup_images/article5_popup1_Roboto.jpg'},
    {'name': 'stimuli/popup_images/article6_popup2_Georgia.jpg', 'path': 'stimuli/popup_images/article6_popup2_Georgia.jpg'},
    {'name': 'stimuli/article_images/article3_Roboto_NoLink.jpg', 'path': 'stimuli/article_images/article3_Roboto_NoLink.jpg'},
    {'name': 'stimuli/popup_images/article6_popup4_Times.jpg', 'path': 'stimuli/popup_images/article6_popup4_Times.jpg'},
    {'name': 'stimuli/popup_images/article6_popup5_Times.jpg', 'path': 'stimuli/popup_images/article6_popup5_Times.jpg'},
    {'name': 'stimuli/popup_images/article2_popup5_Georgia.jpg', 'path': 'stimuli/popup_images/article2_popup5_Georgia.jpg'},
    {'name': 'stimuli/popup_images/article4_popup1_Times.jpg', 'path': 'stimuli/popup_images/article4_popup1_Times.jpg'},
    {'name': 'stimuli/article_images/article7_Open Sans_Link.jpg', 'path': 'stimuli/article_images/article7_Open Sans_Link.jpg'},
    {'name': 'stimuli/article_images/article2_Times_NoLink.jpg', 'path': 'stimuli/article_images/article2_Times_NoLink.jpg'},
    {'name': 'stimuli/popup_images/article5_popup1_Times.jpg', 'path': 'stimuli/popup_images/article5_popup1_Times.jpg'},
    {'name': 'stimuli/popup_images/article6_popup3_Roboto.jpg', 'path': 'stimuli/popup_images/article6_popup3_Roboto.jpg'},
    {'name': 'stimuli/article_images/article6_Georgia_NoLink.jpg', 'path': 'stimuli/article_images/article6_Georgia_NoLink.jpg'},
    {'name': 'stimuli/popup_images/article3_popup5_Georgia.jpg', 'path': 'stimuli/popup_images/article3_popup5_Georgia.jpg'},
    {'name': 'stimuli/article_images/article1_Times_Link.jpg', 'path': 'stimuli/article_images/article1_Times_Link.jpg'},
    {'name': 'stimuli/popup_images/article1_popup7_Roboto.jpg', 'path': 'stimuli/popup_images/article1_popup7_Roboto.jpg'},
    {'name': 'stimuli/popup_images/article2_popup4_Times.jpg', 'path': 'stimuli/popup_images/article2_popup4_Times.jpg'},
    {'name': 'stimuli/popup_images/article2_popup2_Times.jpg', 'path': 'stimuli/popup_images/article2_popup2_Times.jpg'},
    {'name': 'stimuli/popup_images/article4_popup5_Roboto.jpg', 'path': 'stimuli/popup_images/article4_popup5_Roboto.jpg'},
    {'name': 'stimuli/memory/memory_stimulus_sheet.xlsx', 'path': 'stimuli/memory/memory_stimulus_sheet.xlsx'},
    {'name': 'stimuli/stimulus_set.xlsx', 'path': 'stimuli/stimulus_set.xlsx'},
    {'name': 'stimuli/link_sheets/article6_Roboto_links.xlsx', 'path': 'stimuli/link_sheets/article6_Roboto_links.xlsx'},
    {'name': 'bank-1300155_640.png', 'path': 'bank-1300155_640.png'},
    {'name': 'stimuli/article_images/article3_Times_Link.jpg', 'path': 'stimuli/article_images/article3_Times_Link.jpg'},
    {'name': 'stimuli/popup_images/article1_popup7_Times.jpg', 'path': 'stimuli/popup_images/article1_popup7_Times.jpg'},
    {'name': 'stimuli/popup_images/article2_popup2_Roboto.jpg', 'path': 'stimuli/popup_images/article2_popup2_Roboto.jpg'},
    {'name': 'stimuli/popup_images/article6_popup2_Times.jpg', 'path': 'stimuli/popup_images/article6_popup2_Times.jpg'},
    {'name': 'stimuli/popup_images/article3_popup3_Times.jpg', 'path': 'stimuli/popup_images/article3_popup3_Times.jpg'},
    {'name': 'stimuli/popup_images/article4_popup4_Georgia.jpg', 'path': 'stimuli/popup_images/article4_popup4_Georgia.jpg'},
    {'name': 'next_button.png', 'path': 'next_button.png'},
    {'name': 'stimuli/popup_images/article2_popup4_Roboto.jpg', 'path': 'stimuli/popup_images/article2_popup4_Roboto.jpg'},
    {'name': 'stimuli/popup_images/article3_popup4_Georgia.jpg', 'path': 'stimuli/popup_images/article3_popup4_Georgia.jpg'},
    {'name': 'stimuli/popup_images/article4_popup5_Times.jpg', 'path': 'stimuli/popup_images/article4_popup5_Times.jpg'},
    {'name': 'stimuli/article_images/article6_Times_Link.jpg', 'path': 'stimuli/article_images/article6_Times_Link.jpg'},
    {'name': 'stimuli/link_sheets/article2_Georgia_links.xlsx', 'path': 'stimuli/link_sheets/article2_Georgia_links.xlsx'},
    {'name': 'stimuli/life_consent.png', 'path': 'stimuli/life_consent.png'},
    {'name': 'stimuli/popup_images/article1_popup3_Times.jpg', 'path': 'stimuli/popup_images/article1_popup3_Times.jpg'},
    {'name': 'stimuli/popup_images/article5_popup2_Georgia.jpg', 'path': 'stimuli/popup_images/article5_popup2_Georgia.jpg'},
    {'name': 'stimuli/popup_images/article4_popup4_Roboto.jpg', 'path': 'stimuli/popup_images/article4_popup4_Roboto.jpg'},
    {'name': 'stimuli/popup_images/article6_popup3_Georgia.jpg', 'path': 'stimuli/popup_images/article6_popup3_Georgia.jpg'},
    {'name': 'stimuli/article_images/article3_Georgia_Link.jpg', 'path': 'stimuli/article_images/article3_Georgia_Link.jpg'},
    {'name': 'stimuli/popup_images/article6_popup3_Times.jpg', 'path': 'stimuli/popup_images/article6_popup3_Times.jpg'},
    {'name': 'stimuli/popup_images/article1_popup1_Times.jpg', 'path': 'stimuli/popup_images/article1_popup1_Times.jpg'},
    {'name': 'back_text.jpg', 'path': 'back_text.jpg'},
    {'name': 'stimuli/article_images/article6_Roboto_NoLink.jpg', 'path': 'stimuli/article_images/article6_Roboto_NoLink.jpg'},
    {'name': 'stimuli/article_images/article1_Georgia_Link.jpg', 'path': 'stimuli/article_images/article1_Georgia_Link.jpg'},
    {'name': 'stimuli/popup_images/article3_popup2_Times.jpg', 'path': 'stimuli/popup_images/article3_popup2_Times.jpg'},
    {'name': 'stimuli/popup_images/article4_popup2_Roboto.jpg', 'path': 'stimuli/popup_images/article4_popup2_Roboto.jpg'},
    {'name': 'stimuli/popup_images/article6_popup5_Georgia.jpg', 'path': 'stimuli/popup_images/article6_popup5_Georgia.jpg'},
    {'name': 'stimuli/popup_images/article4_popup5_Georgia.jpg', 'path': 'stimuli/popup_images/article4_popup5_Georgia.jpg'},
    {'name': 'close_button.jpg', 'path': 'close_button.jpg'},
    {'name': 'stimuli/link_sheets/article6_Times_links.xlsx', 'path': 'stimuli/link_sheets/article6_Times_links.xlsx'},
    {'name': 'stimuli/popup_images/article4_popup2_Times.jpg', 'path': 'stimuli/popup_images/article4_popup2_Times.jpg'},
    {'name': 'stimuli/article_images/article4_Roboto_NoLink.jpg', 'path': 'stimuli/article_images/article4_Roboto_NoLink.jpg'},
    {'name': 'stimuli/popup_images/article1_popup5_Georgia.jpg', 'path': 'stimuli/popup_images/article1_popup5_Georgia.jpg'},
    {'name': 'stimuli/popup_images/article2_popup3_Roboto.jpg', 'path': 'stimuli/popup_images/article2_popup3_Roboto.jpg'},
    {'name': 'stimuli/popup_images/article1_popup4_Georgia.jpg', 'path': 'stimuli/popup_images/article1_popup4_Georgia.jpg'},
    {'name': 'stimuli/popup_images/article1_popup5_Roboto.jpg', 'path': 'stimuli/popup_images/article1_popup5_Roboto.jpg'},
    {'name': 'stimuli/article_images/article5_Georgia_NoLink.jpg', 'path': 'stimuli/article_images/article5_Georgia_NoLink.jpg'},
    {'name': 'stimuli/popup_images/article5_popup3_Roboto.jpg', 'path': 'stimuli/popup_images/article5_popup3_Roboto.jpg'},
    {'name': 'stimuli/popup_images/article6_popup1_Roboto.jpg', 'path': 'stimuli/popup_images/article6_popup1_Roboto.jpg'},
    {'name': 'stimuli/popup_images/article6_popup4_Georgia.jpg', 'path': 'stimuli/popup_images/article6_popup4_Georgia.jpg'},
    {'name': 'stimuli/popup_images/article6_popup5_Roboto.jpg', 'path': 'stimuli/popup_images/article6_popup5_Roboto.jpg'},
    {'name': 'stimuli/popup_images/article2_popup1_Roboto.jpg', 'path': 'stimuli/popup_images/article2_popup1_Roboto.jpg'},
    {'name': 'stimuli/popup_images/article1_popup1_Georgia.jpg', 'path': 'stimuli/popup_images/article1_popup1_Georgia.jpg'},
    {'name': 'stimuli/link_sheets/article2_Roboto_links.xlsx', 'path': 'stimuli/link_sheets/article2_Roboto_links.xlsx'},
    {'name': 'stimuli/popup_images/article5_popup5_Times.jpg', 'path': 'stimuli/popup_images/article5_popup5_Times.jpg'},
    {'name': 'stimuli/prolific_consent.png', 'path': 'stimuli/prolific_consent.png'},
    {'name': 'stimuli/popup_images/article2_popup1_Georgia.jpg', 'path': 'stimuli/popup_images/article2_popup1_Georgia.jpg'},
    {'name': 'stimuli/article_images/article4_Times_Link.jpg', 'path': 'stimuli/article_images/article4_Times_Link.jpg'},
    {'name': 'stimuli/article_images/article4_Georgia_NoLink.jpg', 'path': 'stimuli/article_images/article4_Georgia_NoLink.jpg'},
    {'name': 'stimuli/link_sheets/article3_Times_links.xlsx', 'path': 'stimuli/link_sheets/article3_Times_links.xlsx'}
  ]
});

psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.EXP);


var currentLoop;
var frameDur;
async function updateInfo() {
  currentLoop = psychoJS.experiment;  // right now there are no loops
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2022.2.3';
  expInfo['OS'] = window.navigator.platform;

  psychoJS.experiment.dataFileName = (("." + "/") + `data/${expInfo["participant"]}_${expName}_${expInfo["date"]}`);

  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  
  return Scheduler.Event.NEXT;
}


var initializeClock;
var convertToNumber;
var joinStringsWithUnderscore;
var rectangleClickCheck;
var rectangleClickCheckImage;
var changeWordPosition;
var letterToIndex;
var getCounterbalanceGroup;
var getItemCount;
var getAllIndexes;
var formatDateTime;
var randomArrayShuffle;
var randomIntFromInterval;
var range;
var balancedLatinSquare;
var unitsPerEm_ctrl;
var xHeight_ctrl;
var width_ctrl;
var height_ctrl;
var size_ctrl;
var yourX;
var xHeight_ctrl_weight;
var width_ctrl_weight;
var height_ctrl_weight;
var xHeightSourceDelta;
var widthSourceDelta;
var heightSourceDelta;
var chars;
var chars_check;
var chars_decimal;
var chars_unicode;
var gen_normalization;
var newY;
var consentsize;
var consentDesiredWidth;
var consentSizeMultiplier;
var imagesize;
var popupsize;
var preferencesize;
var vsize;
var hsize;
var halfimg_x;
var halfscreen_y;
var preference_y;
var preference_question_y;
var preference_slider_y;
var popup_buttons;
var memory_button;
var experimentType;
var xaxis;
var yaxis;
var baseSizePixels;
var questionSizeMultiplier;
var passageSizeMultiplier;
var instructionSizeMultiplier;
var passageTextSize;
var questionTextSize;
var labelTextSize;
var instructionTextSize;
var textColor;
var textFont;
var keyboardPauseDuration;
var mouseDelay;
var mouseDelayOther;
var y_scale;
var x_scale;
var screen_height;
var screen_width;
var passageYaxis;
var wrapWidthText;
var wrapWidthPassages;
var xAxisCenterPassages;
var xAxisCenter;
var topScreenInstruction;
var bottomScreenInstruction;
var questionsXaxis;
var questionsTopYaxis;
var questionsBottomYaxis;
var sliderPosition;
var sliderSize;
var sliderPositionPreference;
var colBlack;
var colWhite;
var col_white;
var col_grey;
var col_red;
var col_black;
var sliderLineLabelColor;
var sliderMarkerColor;
var textboxSize;
var textboxPosition;
var ccImageY;
var buttonWidth;
var buttonHeight;
var buttonX;
var buttonY;
var ss_right_buttonX;
var ss_right_buttonY;
var ss_left_buttonX;
var ss_up_buttonX;
var ss_up_buttonY;
var listx;
var myClock;
var passageSetOrder;
var questionReactionTime;
var radiobutton_size;
var randomization_scheme;
var cbRegistry;
var cb_groups;
var registeryName;
var thisGroup;
var cb_group;
var cb_index;
var cbDatabase;
var preCheckScreenClock;
var waitForCalibration_2;
var merge_fontsClock;
var fontIteration;
var checkResourcesClock;
var passageImage_2;
var waitForCalibration;
var creditCardInstructionsClock;
var creditCardInstructionText;
var nextButton_card;
var mouseCardInstructions;
var screenScaleClock;
var win;
var scaleBank;
var snellenHeight;
var snellenWidth;
var oldt;
var x_size;
var y_size;
var x_size_pix;
var y_size_pix;
var dbase;
var unittext;
var textTop;
var textBottom;
var ccimage;
var up_button;
var down_button;
var left_button;
var right_button;
var screenScaleMouse;
var scaleBlankClock;
var blankScreenForRefresh;
var generalInstructions2Clock;
var generalInstructionsText_2;
var nextButton_GeneralInst;
var mouseGeneralInstructions;
var informedConsent1Clock;
var consent_image;
var key_resp;
var mouseInstructions;
var consent_keyboard;
var seatingInstructionsClock;
var seating_key_resp;
var seatingInstructionsText;
var setTrialParametersDemographicClock;
var demogBlockIndx;
var demographicInstructionsRoutineClock;
var text_4;
var nextButtonDemographicInstructions_2;
var mouseDemographicInstructions_2;
var textBoxQuestionsClock;
var fill_textbox;
var question_textbox;
var pressSpaceTextTextbox;
var demoRadio_1;
var demoRadio_2;
var demoRadio_3;
var demoRadio_4;
var demoRadio_5;
var demoRadio_6;
var demoSlider;
var positions;
var demoRadios;
var demoSliderLabels;
var screening_instructionsClock;
var screeningInstructions;
var nextButton_screeningInstructions;
var mouse_screeningInstructions;
var pre_snellenClock;
var currentEye;
var snellen_instructionsClock;
var snellenInstructions;
var nextButton_snellenInstructions;
var snellen_mouse_instructions;
var snellen_testClock;
var snellen_textbox;
var snellen_chart_image;
var snellen_chart_instructions;
var snellen_question;
var pressSpaceSnellen;
var nextButton_snellen;
var snellen_mouse;
var waitPopupClock;
var waitPopupBlank;
var memory_general_instructionsClock;
var memoryGeneralInstructions;
var nextButton_memoryGenInstructions;
var mouse_memoryGenInstructions;
var memory_initializeClock;
var memory_specific_instructionsClock;
var memorySpecificInstructions;
var nextButton_memorySpecInstructions;
var mouse_memorySpecInstructions;
var memory_display_listClock;
var listInstruction;
var display_list1;
var display_list2;
var key_resp_2;
var memory_responseClock;
var responseInstruction;
var memory_word;
var yes_button;
var no_button;
var memory_mouse;
var memory_intervalClock;
var memory_interval_text;
var general_instructionsClock;
var generalInstructionsText;
var nextButton_Instructions_4;
var mouseInstructions_4;
var teaching_linksClock;
var teaching_link_mouse;
var teaching_example_image;
var teachingLinksButton;
var practiceInstructionsClock;
var generalInstructionsText_3;
var nextButton_Instructions;
var mouseInstructions_5;
var setBlockParametersClock;
var setTrialParametersClock;
var getWordsClock;
var underlined_words;
var init_temp_list;
var instruction_proxyClock;
var text_5;
var nextButton_questionInstructions_2;
var mouseQuestionInstructions_2;
var trial_textboxClock;
var fill_textbox_2;
var question_textbox_2;
var pressSpaceTextTextbox_2;
var instructions_passageClock;
var readPassageInstructions;
var nextButton_readingInstructions;
var mouseReadingInstructions;
var displayArticleClock;
var article_image;
var articleNextButton;
var article_mouse;
var scrolling_keyboard;
var displayPopupClock;
var popup_image;
var close_button;
var back_button;
var back_text;
var popup_mouse;
var instructions_questionsClock;
var text_2;
var nextButton_questionInstructions;
var mouseQuestionInstructions;
var displayQuestionsClock;
var questionText;
var questionPressInstruction;
var radiobutton_1;
var radiobutton_2;
var radiobutton_3;
var radiobutton_4;
var radiobutton_5;
var radiobutton_6;
var radiobutton_7;
var radiobutton_8;
var radiobutton_9;
var questionSlider;
var comprehensionButton;
var comprehensionMouse;
var displayFeedbackSurveyClock;
var feedbackSurveyText;
var pressFeedbackSpaceText;
var fradiobutton_1;
var fradiobutton_2;
var fradiobutton_3;
var fradiobutton_4;
var fradiobutton_5;
var fradiobutton_6;
var fradiobutton_7;
var fradiobutton_8;
var fradiobutton_9;
var feedbackSurveySlider;
var feedbackButton;
var feedbackMouse;
var findFastestClock;
var preferenceInstructionsRoutineClock;
var text_3;
var nextButtonDemographicInstructions;
var mouseDemographicInstructions;
var font_preferenceClock;
var preference_image;
var preferenceText;
var pradiobutton_1;
var pradiobutton_2;
var pradiobutton_3;
var pradiobutton_4;
var pradiobutton_5;
var pradiobutton_6;
var pradiobutton_7;
var pradiobutton_8;
var pradiobutton_9;
var preferenceSlider;
var preferenceButton;
var mousePreference;
var hyperlink_preferenceClock;
var hyperlink_preference_answers;
var questionTextHyperlinkPreference;
var pressSpaceHyperlinkPreference;
var hpbutton_1;
var hpbutton_2;
var hpbutton_3;
var hpbutton_4;
var hpbutton_5;
var questionsSliderHyperlinkPreference;
var nextButton_hyperlinkPreference;
var mouseHyperlinkPreference;
var post_engagementClock;
var post_engagement_questions;
var post_engagement_answers;
var questionTextPostEngagement;
var pressSpacePostEngagement;
var peradiobutton_1;
var peradiobutton_2;
var peradiobutton_3;
var peradiobutton_4;
var peradiobutton_5;
var questionsSliderPostEngagement;
var nextButton_postEngagement;
var mousePostEngagement;
var displayDemographicQuestionsClock;
var questionTextDemographic;
var pressSpaceTextDemographic;
var dradiobutton_1;
var dradiobutton_2;
var dradiobutton_3;
var dradiobutton_4;
var dradiobutton_5;
var dradiobutton_6;
var dradiobutton_7;
var dradiobutton_8;
var dradiobutton_9;
var questionSliderDemographic;
var nextButton_demographic;
var mouseDemographic;
var trouble_with_testClock;
var troubleFillBox;
var troubleWithTest;
var pressSpaceTrouble;
var writeDataToFileClock;
var finalInstructionsClock;
var finish_instructions;
var key_resp_3;
var globalClock;
var routineTimer;
async function experimentInit() {
  // Initialize components for Routine "initialize"
  initializeClock = new util.Clock();
  // FUNCTIONS //
  
  // you'll notice that each of the functions have '2' in their name.
  // Reason is that we need to duplicate these into a new name to be
  // able to use them in other components. Otherwise Psychopy does not
  // recognize your functions. 
  // FUNCTIONS //
  
  // you'll notice that each of the functions have '2' in their name.
  // Reason is that we need to duplicate these into a new name to be
  // able to use them in other components. Otherwise Psychopy does not
  // recognize your functions. 
  
  // having multiple values in excel turns the coordinate values into strings
  // this function transforms strings into numbers 
  
  
  function convertToNumber2(yourObject,imagesize,vsize,y_scale){
      var currentKeys = Object.keys(yourObject)
      console.log('all keys of list loop', currentKeys)
      // loop over all keys (except the first one which is "text")
      for (var k = 0; k < currentKeys.length; k++){
          var key             = currentKeys[k]
          var keyValue        = yourObject[key]
          // console.log('current value: ',keyValue)
          // console.log('current value type: ',typeof(keyValue))
          var isString = typeof(keyValue) === "string"
          console.log('current value: ',keyValue)
          console.log('is value string?:', isString)
          if (isString){            
              var isBracketText = keyValue.includes('[')
              if (isBracketText){
                  keyValue = keyValue.replace('[','')
                  keyValue = keyValue.replace(']','')            
                  keyValue = keyValue.split(',')
                  console.log('key value separated',keyValue)
              }
          }
  
          var keyValueLength  = keyValue.length
          // console.log('key, keyvalue, keylength', key,keyValue,keyValueLength)
          if (key === "text"){
              console.log('skipped text')
              continue
              }
          console.log('current key:', key)
          // if only one value  in the key
          if (keyValueLength === 1 || keyValueLength === undefined){
  
              keyValue = Number(keyValue)*y_scale
              console.log('1L - key value converted:', keyValue)
              // process the values for screen alignment
              if (key === "x"){
                  keyValue = keyValue - (imagesize[0]/2)
                  } else if (key === "y" || key.includes("_Y")){
                      keyValue = vsize/2 - keyValue 
                      }
              console.log('1L - key value processed:', keyValue)
              // transform into float
              // register backY if this is font dependent text height key 
              if (key.includes("_Y")){
                  console.log('backy time')
                  yourObject["backY"] = keyValue
  
                  } else {
                      console.log('NO back Y')
                      yourObject[key] = keyValue
                      
                  }
              
              
              // if multiple values in the key
              } else if (keyValueLength > 1){
                  var tempList = []
                  console.log('list values:', keyValue)
                  for (var ind = 0; ind < keyValueLength; ind++){
                      // turn all values into float`
                      var currentValue = Number(keyValue[ind])*y_scale
                      console.log('2L - key value converted:', currentValue)
              
              
                      // process the values for screen alignment
                      if (key === "x"){
                          currentValue = currentValue - (imagesize[0]/2)
                          } else if (key === "y"){
                              currentValue = vsize/2 - currentValue         
                              }
                      console.log('2L - key value processed:', currentValue)
                      tempList.push(currentValue)
                      
                      }
                  // register numeric list into key
                  console.log('final list:', tempList)
                  yourObject[key] = tempList
                  
                  }        
          }
  
          return yourObject  
      
      }
  
  
  convertToNumber = convertToNumber2
  
  function joinStringsWithUnderscore2(list1, list2) {
      var joinedStrings = [];
      for (var i = 0; i < list1.length; i++) {
          for (var j = 0; j < list2.length; j++) {
              joinedStrings.push(list1[i] + '_' + list2[j]);
          }
      }
      return joinedStrings;
  }
  joinStringsWithUnderscore = joinStringsWithUnderscore2
  // check if mouse position is within underline word's bounds
  function rectangleClickCheck2(clickPosition, underlined_words){  
      
      
      // get all underlined words
      var currentKeys = Object.keys(underlined_words)
  
      // get mouse positions
      var xpos = clickPosition[0]
      var ypos = clickPosition[1]
  
      for (var i = 0; i < currentKeys.length; i++){
          var underlineObject = underlined_words[currentKeys[i]];
          
  //        console.log('***********************')
  //        console.log(currentKeys[i])
  //        console.log('click x and y: ',xpos,ypos)        
  //        console.log('rectx bounds : ', [underlineObject.x, underlineObject.x + underlineObject.width])
  //        console.log('recty bounds : ', [underlineObject.y, underlineObject.y + underlineObject.height])
  
          console.log('current object', underlineObject)
          var howManyCoordinates = underlineObject["x"].length
          console.log('how many coordinates', howManyCoordinates)
          // if this is a multiline hyperlink
          if (howManyCoordinates > 1){
              var xcoordinates = underlineObject["x"]
              var ycoordinates = underlineObject["y"]
              var widthsizes   = underlineObject["width"]
              console.log('x coordinates', xcoordinates)
              console.log('y coordinates', ycoordinates)
              console.log('width sizes', widthsizes)
              var coordinateBooelan = []
              // loop over coordinates of both lines to check if mouse was clicked on either one of them
              for (var k = 0; k < howManyCoordinates; k++){
                  var current_x = xcoordinates[k]
                  var current_y = ycoordinates[k]
                  var current_width = widthsizes[k]
                  // check if mouse is within vertical bounds
                  var clickedVerticalArea = ((current_y < ypos) && (current_y + underlineObject.height > ypos))
                  // check if mouse is within horizontal bounds
                  var clickedHorizontalArea = ((current_x < xpos) && (current_x + current_width > xpos))
                  coordinateBooelan.push(clickedVerticalArea && clickedHorizontalArea)
              }
              console.log('coordinate booelan', coordinateBooelan)
              // logical check for click region on multiple lines
              var validClick = coordinateBooelan[0] || coordinateBooelan[1]
              
          } else{
              // if there is only one link of hyperlinks 
  
  
              // check if mouse is within vertical bounds
              var clickedVerticalArea = ((underlineObject.y < ypos) && (underlineObject.y + underlineObject.height > ypos))
              // check if mouse is within horizontal bounds
              var clickedHorizontalArea = ((underlineObject.x < xpos) && (underlineObject.x + underlineObject.width > xpos))
  
              var validClick = clickedVerticalArea && clickedHorizontalArea
  
  
          }
  
          // if mouse is within one of word's bounds
          if (validClick){
              // return key for that underlined word
              return [true,currentKeys[i]]
          } 
          
      }        
      return [false,'undefined']
  
  }
  
  rectangleClickCheck = rectangleClickCheck2
  
  // check if mouse position is within popup back and close button's area
  // adjustment of coordinates was necessary for images because the way 
  // psychopy places images (centers x and y, instead of top-right etc. placement)
  function rectangleClickCheckImage2(clickPosition, underlined_words){
  
      // get all underlined words
      var currentKeys = Object.keys(underlined_words)
  
      // get mouse positions
      var xpos = clickPosition[0]
      var ypos = clickPosition[1]
  
      for (var i = 0; i < currentKeys.length; i++){
          var underlineObject = underlined_words[currentKeys[i]];
          
          var adjusted_x =  underlineObject.x - underlineObject.width / 2
          var adjusted_y =  underlineObject.y - underlineObject.height / 2
  
          console.log('***********************')
          console.log(currentKeys[i])
  //        console.log('click x and y: ',xpos,ypos)        
  //        console.log('rectx bounds : ', [adjusted_x, adjusted_x + underlineObject.width])
  //        console.log('recty bounds : ', [adjusted_y, adjusted_y + underlineObject.height])
  //        
  //    
          // check if mouse is within vertical bounds
          var clickedVerticalArea = ((adjusted_y < ypos) && (adjusted_y + underlineObject.height > ypos))
          // check if mouse is within horizontal bounds
          var clickedHorizontalArea = ((adjusted_x < xpos) && (adjusted_x + underlineObject.width > xpos))
  
          // if mouse is within one of word's bounds
          if (clickedVerticalArea && clickedHorizontalArea){
              // return key for that underlined word
              return [true,currentKeys[i]]
          } 
          
      }        
      return [false,'undefined']
  
  }
  
  rectangleClickCheckImage = rectangleClickCheckImage2
  
  
  
  // change position of words for every scroll 
  
  // check if mouse position is within underline word's bounds
  function changeWordPosition2(deltaY, underlined_words){
  
      // change underlined word positions 
      var currentKeys = Object.keys(underlined_words)
      for (var i = 0; i < currentKeys.length; i++){
          // change rectangle Y 
          var lengthCoordinates = underlined_words[currentKeys[i]]["y"].length
          if (lengthCoordinates>1){
              for (var k = 0; k<lengthCoordinates;k++){
                  underlined_words[currentKeys[i]]["y"][k] = underlined_words[currentKeys[i]]["y"][k] + deltaY;
              }
              
          }else{
              underlined_words[currentKeys[i]].y = underlined_words[currentKeys[i]].y + deltaY;
          }
          
          }
      
      return underlined_words
  
  
  }
  changeWordPosition = changeWordPosition2
  
  function letterToIndex2(letter,lettervector){    
      var cb_index = lettervector.indexOf(letter)
      return cb_index
      }
  letterToIndex = letterToIndex2
  
  
  function getCounterbalanceGroup2(cb_groups,database,shelfKey) {
      var exitAll = false
      var recordShelf = true
      var totalGroupSize = database['total']
  
      if (totalGroupSize>0)
          {
                  // subtract one from the currently selected counterbalance group
              
                  while (true) 
                  {
  
                      if (exitAll)
                          {
                              break;
                          }         
                          console.log('selecting cb group')
                          // initialize random index
                          var randomcbindex = Math.floor(Math.random() * cb_groups.length);
                          // get the letter at #randomindex
                          var cb_group = cb_groups[randomcbindex]                        
                          // get current groupsize from shelf
                          var cb_group_size = database[cb_group]
                          
                          console.log('cb group: ', cb_group)
                          console.log('cb group size: ',cb_group_size)
                          
                          if (cb_group_size > 0)
                              {
                                  database[cb_group] = database[cb_group]-1
                                  database['total'] = database['total']-1
                                  exitAll = true
                              }
                  }
          
              } else {
                  recordShelf = false
                  psychoJS.quit({message: "We've reached the full number of participants!"})
              }
  
  
      // write the counterbalance record to shelf after registery
      if (recordShelf){
          psychoJS.shelf.setDictionaryFieldValue({key: shelfKey, fieldName: 'cbgroups', fieldValue : database})
      }
      
      return cb_group
      
  }
  getCounterbalanceGroup = getCounterbalanceGroup2
  
  
  function getItemCount2(textVar) {
      
      var count1 = Number(textVar[textVar.length-1])
      var count2 = Number(textVar[textVar.length-2])
      if (isNaN(count2)===false) {
          // if there is more than 9 items get last two characters for counting how many items there are
          var itemCount = textVar[textVar.length-2]+ textVar[textVar.length-1]
          itemCount = Number(itemCount)
          
      } else {
  
          var itemCount = Number(textVar[textVar.length-1])
          
      }
      console.log('item count of: ',textVar, itemCount)
      return itemCount
  }
  getItemCount=getItemCount2
  
  
  // get all indexes of an element 
  function getAllIndexes2(arr, val) {
      var indexes = [], i = -1;
      while ((i = arr.indexOf(val, i+1)) != -1){
          indexes.push(i);
      }
      return indexes;
  }
  
  getAllIndexes = getAllIndexes2
  
  // format date and time (transform to > mm.yy.tt)
  function formatDateTime2(date){
      var indices = getAllIndexes(date,'-')
      var underScoreIndex = date.indexOf('_')
      var firstDashIndex = indices[0] // this is the index for the first dash, if it is larger than 2, it means that first part of the date is years. If that is the case, we change it by moving the years at the end of date. 
          if (firstDashIndex > 2){
              var yearString = date.slice(0,firstDashIndex)
              var monthDayString = date.slice(firstDashIndex+1,underScoreIndex)
              var timeString = date.slice(underScoreIndex,date.length)
              var newFormatDate = monthDayString + '-' + yearString + timeString
              return newFormatDate
          } else {
              return date
              }
      }
  
  formatDateTime = formatDateTime2
  // shuffle array: randomly shuffles the order of elements in an array.
  function randomArrayShuffle2(o){
      for(var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
      return o;
  }
  
  randomArrayShuffle = randomArrayShuffle2;
  
  function randomIntFromInterval2(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
  }
  randomIntFromInterval = randomIntFromInterval2;
  
  // ranges from start to end, end is inclusive
  // e.g. range(1,5) = [1,2,3,4,5]
  function range2(start, end) {
      if(start === end) return [start];
      return [start, ...range(start + 1, end)];
  }
  range = range2;
  // Latin Square design generator
  
  // How to use:
  // var conditions = ["A", "B", "C", "D"];
  // balancedLatinSquare(conditions, 0)  //=> ["A", "B", "D", "C"]
  // balancedLatinSquare(conditions, 1)  //=> ["B", "C", "A", "D"]
  // balancedLatinSquare(conditions, 2)  //=> ["C", "D", "B", "A"]
  // ...
  function balancedLatinSquare2(array, participantId) {
   var result = [];
   // Based on "Bradley, J. V. Complete counterbalancing of immediate sequential effects in a Latin square design. J. Amer. Statist. Ass.,.1958, 53, 525-528. "
   for (var i = 0, j = 0, h = 0; i < array.length; ++i) {
    var val = 0;
    if (i < 2 || i % 2 != 0) {
     val = j++;
    } else {
     val = array.length - h - 1;
     ++h;
    }
  
    var idx = (val + participantId) % array.length;
    result.push(array[idx]);
   }
  
   if (array.length % 2 != 0 && participantId % 2 != 0) {
    result = result.reverse();
   }
  
   return result;
  }
  
  balancedLatinSquare = balancedLatinSquare2;
  
  
  
  /////////////////////////////////////
  //// font normalization function ////
  /////////////////////////////////////
  
  Array.prototype.sum = function() {
      return this.reduce(function(a,b){return a+b;});
  };
  
  Array.prototype.mean = function() {
      return this.sum() / this.length;
  };
  
  // CONTROL vars (Times)
  unitsPerEm_ctrl = 1000;
  xHeight_ctrl = 448;
  width_ctrl = 556.388855;
  height_ctrl = 707.977295;
  size_ctrl = 16;
  yourX=0
  xHeight_ctrl_weight = 448/unitsPerEm_ctrl;
  width_ctrl_weight   = 556.388855/unitsPerEm_ctrl;
  height_ctrl_weight  = 707.977295/unitsPerEm_ctrl;
  
  xHeightSourceDelta =  0.44970703125;
  widthSourceDelta =  0.5528367565524194;
  heightSourceDelta =  0.6362068422379032;
  
  chars = '1234567890qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM';
  chars_check = chars.split('');
  chars_decimal = [49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 113, 119, 101, 114, 116, 121, 117, 105, 111, 112, 97, 115, 100, 102, 103, 104, 106, 107, 108, 122, 120, 99, 118, 98, 110, 109, 81, 87, 69, 82, 84, 89, 85, 73, 79, 80, 65, 83, 68, 70, 71, 72, 74, 75, 76, 90, 88, 67, 86, 66, 78, 77];
  
  //chars = 'Adobe';
  chars_check = chars.split('');
  chars_decimal = [];
  chars_check.forEach(e => {
      chars_decimal.push(e.codePointAt());
  });
  
  
  chars_unicode = ['0x0031','0x0032','0x0033','0x0034','0x0035','0x0036','0x0037','0x0038','0x0039','0x0030','0x0071','0x0077','0x0065','0x0072','0x0074','0x0079','0x0075','0x0069','0x006f','0x0070','0x0061','0x0073','0x0064','0x0066','0x0067','0x0068','0x006a','0x006b','0x006c','0x007a','0x0078','0x0063','0x0076','0x0062','0x006e','0x006d','0x0051','0x0057','0x0045','0x0052','0x0054','0x0059','0x0055','0x0049','0x004f','0x0050','0x0041','0x0053','0x0044','0x0046','0x0047','0x0048','0x004a','0x004b','0x004c','0x005a','0x0058','0x0043','0x0056','0x0042','0x004e','0x004d'];
  
  function log(str) {
      console.log(str);
  };
  
  function print_server_load(name,path) {
      log("@font-face {");
      log("    font-family: '" + name + "';");
      log("    font-style: normal;");
      log("    font-weight: normal;");
      log("    src: local('" + name + "'), url('fonts/" + path + "') format('truetype');");
      log("}");
  };
  
  function print_css(name,name_css,factor,size) {
      log("p." + name_css + "_" + factor + " {");
      log("    font-family: '" + name + "' !important;");
      log("    font-size: " + size + "px;");
      log("}");
  }
  
  function gen_normalization2(fontPath,name,name_css) {
      opentype.load(fontPath, function(err, font) {
          if (err) {
              alert('Font ' + fontPath + ' could not be loaded: ' + err);
          } else {
              // Now let's display it on a canvas with id "canvas"
              console.log('normalization')
              //console.log(document.getElementById('canvas'))
              //console.log(document.getElementById('canvas').getContext)
              //console.log(document.getElementById('canvas').getContext('2d'))
              //var ctx = document.getElementById('canvas').getContext('2d');
      
              // Construct a Path object containing the letter shapes of the given text.
              // The other parameters are x, y and fontSize. Note that y is the position of the baseline.
              var path = font.getPath(chars, 0, 0, 16);
      
              //
              var xHeight = font.tables.os2.sxHeight; // sxHeight could be missing from some fonts
              var widths = [];
              var heights = [];
      
             var xMinFont = 0;
             var xMaxFont = 0;
             var yMinFont = 0;
             var yMaxFont = 0;
      
              //compute max width/height
              Object.keys(font.glyphs.glyphs).forEach(function (k) {
                  var glyph = font.glyphs.glyphs[k];
                  var unicode_decimal = glyph.unicode;
                  if (chars_decimal.includes(unicode_decimal)) {
                      if(glyph.xMin < xMinFont)
                          xMinFont = glyph.xMin;
                      if(glyph.xMax > xMaxFont)
                          xMaxFont = glyph.xMax;
                      if(glyph.yMin < yMinFont)
                          yMinFont = glyph.yMin;
                      if(glyph.yMax > yMaxFont)
                          yMaxFont = glyph.yMax;
                  }
              });
      
              Object.keys(font.glyphs.glyphs).forEach(function (k) {
                  var glyph = font.glyphs.glyphs[k];
                  var char = glyph.name;
                  var unicode_decimal = glyph.unicode;
      
                  var lsb = glyph.leftSideBearing;
                  var rsb = glyph.advanceWidth - (lsb + glyph.xMax - glyph.xMin); //right side bearing
      
                  var width = glyph.xMax - glyph.xMin;
                  width = glyph.advanceWidth;
                  //width = glyph.xMax - glyph.xMin;
      
                  var yMinGlyph = glyph.yMin;
                  var yMaxGlyph = glyph.yMax;
                  var yMinFinal = yMinFont;
                  var yMaxFinal = yMaxFont;
      
                  if (yMinFont > yMinGlyph)
                      yMinFinal = yMinGlyph;
                  if (yMaxFont < yMaxGlyph)
                      yMaxFinal = yMaxGlyph;
                  
                  var height = glyph.yMax - glyph.yMin;
                  if (chars_decimal.includes(unicode_decimal)) {
                      widths.push(width);
                      heights.push(height);
                  }
                  if(unicode_decimal === 120) { // x
                      xHeight = yMaxGlyph - yMinGlyph;
                  }
              });
      
              let unitsPerEm = font.tables.head.unitsPerEm;
      
              let xHeightDelta = xHeight/unitsPerEm;
              let widthDelta = widths.mean()/unitsPerEm;
              let heightDelta = heights.mean()/unitsPerEm;
              
              let x = 16*(1+((xHeightSourceDelta-xHeightDelta)/xHeightDelta));
              let w = 16*(1+((widthSourceDelta-widthDelta)/widthDelta));
              let h = 16*(1+((heightSourceDelta-heightDelta)/heightDelta));
              
              yourX = (1+((xHeightSourceDelta-xHeightDelta)/xHeightDelta));
              console.log('yourX')
              console.log(yourX)
              return yourX
              
          }
      });    
  
  }
  
  gen_normalization = gen_normalization2;
  document.body.style.zoom = "100%" 
  
  newY = []
  
  
  consentsize = [2550,3000]
  consentDesiredWidth = 1460
  consentSizeMultiplier = consentDesiredWidth / consentsize[0];
  
  consentsize = [consentsize[0]*consentSizeMultiplier,consentsize[1]*consentSizeMultiplier]
  
  imagesize = [2560,1900]
  
  popupsize = [1024,1000]
  
  preferencesize = [1247,302]
  
  
  // window pixel sizes below (h horizontal, v vertical)
  vsize = psychoJS.window._size[1];
  hsize = psychoJS.window._size[0];
  
  halfimg_x = popupsize[0]/2
  halfscreen_y = vsize/2
  
  
  preference_y = (halfscreen_y-preferencesize[1])
  preference_question_y = preference_y-(vsize*.2)
  preference_slider_y   = preference_question_y-(vsize*.2)
  
  
  popup_buttons = {}
  popup_buttons.back_button = {}
  popup_buttons.back_text = {}
  popup_buttons.close_button = {}
  // register position and size of popup's back button 
  popup_buttons.back_button.width  = 200
  popup_buttons.back_button.height = 50
  popup_buttons.back_button.x      = (-halfimg_x+(popup_buttons.back_button.width/2))
  popup_buttons.back_button.y      = (-halfscreen_y + (halfscreen_y*.1)) + popup_buttons.back_button.height
  
  
  // register position and size of popup's back text 
  popup_buttons.back_text.width  = 200
  popup_buttons.back_text.height = 50
  popup_buttons.back_text.x      = popup_buttons.back_button.x + popup_buttons.back_button.width/2 +popup_buttons.back_text.width/2 
  popup_buttons.back_text.y      = popup_buttons.back_button.y
  
  
  // register position and size of popup's close button 
  popup_buttons.close_button.width  = 25
  popup_buttons.close_button.height = 25
  popup_buttons.close_button.x      = (halfimg_x - (halfimg_x*.1)) 
  popup_buttons.close_button.y      = (halfscreen_y-(halfscreen_y*.05)) - popup_buttons.close_button.height
  
  // memory test buttons
  memory_button            = {}
  memory_button.yes_button = {}
  memory_button.no_button  = {}
  
  memory_button.yes_button.width      = hsize/10
  memory_button.yes_button.height     = hsize/20
  memory_button.yes_button.x          = -hsize/10
  memory_button.yes_button.y          = -hsize/10
  
  memory_button.no_button.width       = hsize/10
  memory_button.no_button.height      = hsize/20
  memory_button.no_button.x           = hsize/10
  memory_button.no_button.y           = -hsize/10
  
  
  ///////////////////////////////////////////////////////
  //// EXPERIMENT TYPE (FONT OR SPACING COMPARISONS) ////
  ///////////////////////////////////////////////////////
  
  // assign which fit clash conditions will be displayed at the end
  experimentType      = 'font' // 'spacing', or 'font'
  
  //////////////////////////////////////////////////////////////////////////
  //// TEXT PARAMETERS (pixels, size multipliers, wrapwidth, position.) ////
  //////////////////////////////////////////////////////////////////////////
  
  /////////////////
  // IMAGE SIZES //
  /////////////////
  
  // make sure to change these vales according to the image pixels you've rendered 
  // with the readability text to image conversion tool
  
  // horizontal axis
  xaxis                               = 2560 
  // vertical axis
  yaxis                               = 1900
  
  ////////////////
  // FONT SIZES //
  ////////////////
  
  // base font size (font size in pixels)
  baseSizePixels                      = 16;
  
  // size multiplier's for different types of text
  // multipliers work on the base pixel size
  // values lower than 1 are smaller than base size
  // values greater than 1 are smaller than base size
  
  // comprehension, feedback, and demographic question size multiplier
  questionSizeMultiplier              = 1.2;
  // 
  passageSizeMultiplier               = 1.5;
  // 
  instructionSizeMultiplier           = 1.5;
  
  // apply multipliers to base pixel size
  passageTextSize                     = baseSizePixels * passageSizeMultiplier;
  questionTextSize                    = baseSizePixels * questionSizeMultiplier;      // used in comprehension, feedback, and demographic questions 
  labelTextSize                       = baseSizePixels * questionSizeMultiplier;      // used in labels of the question sliders (each option of the likert items)
  instructionTextSize                 = baseSizePixels * instructionSizeMultiplier;   // used for instructions and consent forms
  
  // text COLOR (questions and instructions)
  textColor                           = "black"
  
  // text font (questions and instructions)
  textFont                            = "Arial"
  
  // keyboard pause duration for each screen of passages (if key press is applicable)
  // waits until these seconds passes to allow to skip the passage
  keyboardPauseDuration               = 3;
  
  // mouse delay (time required for enabling button click)
  mouseDelay                          = 3;  // between screens of a passage 
  mouseDelayOther                     = 3;  // between instructions, consent form pages, or questions 
  
  
  // screen scale variables, we are initializing these here
  y_scale                             = 1;
  x_scale                             = 1;
  
  // window pixel sizes below (h horizontal, v vertical)
  screen_height                       = psychoJS.window.size[1];
  screen_width                        = psychoJS.window.size[0];
  hsize                               = screen_height;
  vsize                               = screen_width;
  
  passageYaxis                        = -200;
  
  
  // text wrapping and position parameters (questions, instructions)
  wrapWidthText                       = screen_width*4/5;
  wrapWidthPassages                   = screen_width/2;
  
  // x axis starting point for passages (not applicable for image-based studies)
  xAxisCenterPassages                 =  -screen_width/4;
  
  // x axis starting point for other text (questions, instructions)
  xAxisCenter                         = -screen_width * 2/5;
  
  // screen scale instructions positions
  topScreenInstruction                = screen_height * 4/10;
  bottomScreenInstruction             = -screen_height * 4/10;
  
  // question text positions 
  questionsXaxis                      = -screen_width*45/100;     // horizontal alignment of text during comprehension/feedback/demographic questions
  questionsTopYaxis                   = screen_height*10/100;     // vertical position of the actual question text (e.g. What is the main idea of the passage?)
  questionsBottomYaxis                = -screen_height*35/100;    // vertical position of question-related instructions (press space, press button etc.)
  
  // slider positions and size (radio button slider positions)
  sliderPosition                      = [-screen_width*45/100, -screen_height*10/100];
  sliderSize                          = [screen_width*1/100, screen_height*26/100];       // slider size, do not change this unless you know what you are doing
  sliderPositionPreference            = [sliderPosition[0], preference_slider_y]
  
  // slider colors 
  colBlack                            = new util.Color('black');
  colWhite                            = new util.Color('black')
  col_white                           = new util.Color('white');
  col_grey                            = new util.Color('grey');
  col_red                             = new util.Color('red');
  col_black                           = new util.Color('black');
  sliderLineLabelColor                = colBlack;
  sliderMarkerColor                   = colWhite;
  
  // textbox position and size (demographics)
  textboxSize                         = [screen_width * 2/5, screen_height*7.5/100];
  textboxPosition                     = [xAxisCenter, 0];
  
  ccImageY = -(screen_width * 0.02)
  
  //console.log("screen_width",screen_width,"screen_height",screen_height);
  //console.log("wrapwidthText",wrapWidthText,"xAxis",xAxisCenter);
  //console.log("wrapwidthPass",wrapWidthPassages,"xAxisPass",xAxisCenterPassages) ;
  
  // next button size and position
  buttonWidth                         = screen_width/10;
  buttonHeight                        = screen_height/10;
  
  buttonX                             = screen_width * 4/10;
  buttonY                             = 0-(screen_height * 4/10);
  
  ss_right_buttonX = screen_width * 5.5/15;
  ss_right_buttonY = 0;
  
  ss_left_buttonX = ss_right_buttonX - buttonWidth;
  
  ss_up_buttonX = (ss_right_buttonX + ss_left_buttonX) / 2
  ss_up_buttonY = buttonHeight + (screen_width * 1/30);
  
  
  
  console.log({ss_right_buttonX,ss_right_buttonY, buttonX, buttonY})
  
  // password textbox parameters
  textboxSize                         = [screen_width * 2/5, screen_height*7.5/100];
  textboxPosition                     = [xAxisCenter, 0];
  
  // memory test variables, list position
  listx = screen_width/10;
  
  // clock
  myClock                             = new util.Clock();
  
  // initialize passage index order list 
  passageSetOrder                     = [];
  questionReactionTime                = [];
  
  radiobutton_size = 23
  
  const searchParams = new URLSearchParams(location.search);
  const imageParam = parseInt(searchParams.get('image')) || 0;
  
  
  if (imageParam==0) {
      // prolific
      psychoJS.setRedirectUrls('https://app.prolific.com/submissions/complete?cc=C1HZYXNB','')
  } else {
      // life
      psychoJS.setRedirectUrls('https://forms.gle/twgaBP6X4os6dk767','')
  }
  
  console.log('passed initialization')
  // - * BEGIN EXPERIMENT * - // 
  
  // use 'counterbalanced' for counterbalancing conditions across groups
  // use 'randomized' for randomizing the order of conditions for each participant
  randomization_scheme            = 'counterbalanced' // or 'counterbalanced'
  
  // name of the shelf record used for counterbalancing
  cbRegistry                      = ['cb_article']
  
  if (randomization_scheme === 'counterbalanced'){
      
  
      // cb_groups is used for ordering exp conditions and passage orders. 
      // Each letter represents a different group. Name of the groups are irrelevant.
      // number of counterbalance groups (cb_groups) will change according to 
      // the number of conditions you have. Whether condition count is even or odd
      // also changes the number of groups 
      // • Even number of conditions: Add as many groups as the number of your conditions. (4 conditions result in 4 groups)
      // • Odd number of conditions: Add twice as many groups as the number of conditions. (3 conditions result in 6 groups)
      
      // Make sure that you have a dictionary shelf record that have all the groups specified below.
      cb_groups                       = ['A','B','C','D','E','F'];
      
      registeryName                   = [] // data file name for registry 
      thisGroup                       = {} // counterbalance group
      cb_group                        = [] // letter representation of counterbalance group
      cb_index                        = [] // index of counterbalance group for latin-square function
  
  
      // GET COUNTERBALANCE DICTIONARY FROM SHELF
      cbDatabase                      = await psychoJS.shelf.getDictionaryFieldValue({key: cbRegistry, fieldName: 'cbgroups', defaultValue: "none"});
  
      /* Get a counterbalance group */
      cb_group                        = getCounterbalanceGroup(cb_groups,cbDatabase,cbRegistry)
      cb_index                        = letterToIndex(cb_group,cb_groups)
  //
  //    cb_group = "A"
  //    cb_index = 0
  } else if (randomization_scheme === 'randomized') {
  
      // used for ordering exp conditions and passage orders
      cb_groups                       = [];
      registeryName                   = [] // data file name for registry 
      thisGroup                       = {} // counterbalance group
      cb_group                        = [] // letter representation of counterbalance group
      cb_index                        = [] // index of counterbalance group for latin-square function
  
  }
  
  
  
  // Initialize components for Routine "preCheckScreen"
  preCheckScreenClock = new util.Clock();
  waitForCalibration_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'waitForCalibration_2',
    text: 'We are checking if all experiment resources are correctly downloaded.\n\nThis may take up to 30 seconds.\n\nIf there was a connection issue while downloading, you will encounter an "Unknown resource error" on this screen.\n\nIf that error occurs, please go back and re-enter to the experiment.\n\nOtherwise, please wait until the test instructions appear on the screen.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 1.0,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  // Initialize components for Routine "merge_fonts"
  merge_fontsClock = new util.Clock();
  fontIteration = 0
  // Initialize components for Routine "checkResources"
  checkResourcesClock = new util.Clock();
  passageImage_2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'passageImage_2', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0.0, pos : [0, 0], size : [1, 1],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  waitForCalibration = new visual.TextStim({
    win: psychoJS.window,
    name: 'waitForCalibration',
    text: 'We are checking if all experiment resources are correctly downloaded.\n\nThis may take up to 30 seconds.\n\nIf there was a connection issue while downloading, you will encounter an "Unknown resource error" on this screen.\n\nIf that error occurs, please go back and re-enter to the experiment.\n\nOtherwise, please wait until the test instructions appear on the screen.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 1.0,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  // Initialize components for Routine "creditCardInstructions"
  creditCardInstructionsClock = new util.Clock();
  creditCardInstructionText = new visual.TextStim({
    win: psychoJS.window,
    name: 'creditCardInstructionText',
    text: '',
    font: textFont,
    units: undefined, 
    pos: [0, 0], height: 1.0,  wrapWidth: wrapWidthText, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  nextButton_card = new visual.ImageStim({
    win : psychoJS.window,
    name : 'nextButton_card', units : undefined, 
    image : 'next_button.png', mask : undefined,
    ori : 0.0, pos : [0, 0], size : 1.0,
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -2.0 
  });
  mouseCardInstructions = new core.Mouse({
    win: psychoJS.window,
  });
  mouseCardInstructions.mouseClock = new util.Clock();
  // Initialize components for Routine "screenScale"
  screenScaleClock = new util.Clock();
  // Run 'Begin Experiment' code from scaleCode
  
  win=psychoJS.window;
  console.log('below screen size')
  console.log("whole window",win)
  console.log("sizes",win.size[0],win.size[1])
  hsize = 0;
  vsize = 0;
  // initialize screen scale bank for 
  // repeated scaling of the screen
  scaleBank = {"x": [NaN,NaN],"y":[NaN,NaN]}
  
  snellenHeight= 0 
  snellenWidth = 0
  
  oldt = 0;
  x_size = 8.56;
  y_size = 5.398;
  x_size_pix = 640;
  y_size_pix = 401;
  screen_height = 0;
  if ((psychoJS.window.units === "norm")) {
      x_scale = 0.05;
      y_scale = 0.1;
      dbase = 0.0001;
      unittext = " norm units";
      vsize = 2;
  } else {
      if ((psychoJS.window.units === "pix")) {
          x_scale = 60;
          y_scale = 40;
          dbase = 0.1;
          unittext = " pixels";
      } else {
          x_scale = 0.05;
          y_scale = 0.05;
          dbase = 0.0001;
          unittext = " height units";
          vsize = 1;
      }
  }
  console.log((x_size * x_scale), (y_size * y_scale));
  
  textTop = new visual.TextStim({
    win: psychoJS.window,
    name: 'textTop',
    text: 'Resize the Image: Grab a physical credit card for reference and adjust the image on the screen so that it matches the size of your physical credit card.\n\nUse the Arrow Keys for Resizing:\n⬆ Up Arrow: Increase the height (make the image taller).\n⬇ Down Arrow: Decrease the height (make the image shorter).\n⬅ Left Arrow: Decrease the width (make the image narrower).\n➡ Right Arrow: Increase the width (make the image wider).',
    font: textFont,
    units: 'pix', 
    pos: [0, 0], height: 1.0,  wrapWidth: wrapWidthText, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1.0,
    depth: -1.0 
  });
  
  textBottom = new visual.TextStim({
    win: psychoJS.window,
    name: 'textBottom',
    text: 'Please press the SPACE BAR to advance to the next page when you are done.',
    font: textFont,
    units: undefined, 
    pos: [0, 0], height: 1.0,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1.0,
    depth: -2.0 
  });
  
  ccimage = new visual.ImageStim({
    win : psychoJS.window,
    name : 'ccimage', units : undefined, 
    image : 'bank-1300155_640.png', mask : undefined,
    ori : 0.0, pos : [0, ccImageY], size : 1.0,
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -3.0 
  });
  up_button = new visual.ImageStim({
    win : psychoJS.window,
    name : 'up_button', units : undefined, 
    image : 'next_button.png', mask : undefined,
    ori : -90.0, pos : [0, 0], size : 1.0,
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -4.0 
  });
  down_button = new visual.ImageStim({
    win : psychoJS.window,
    name : 'down_button', units : undefined, 
    image : 'next_button.png', mask : undefined,
    ori : 90.0, pos : [0, 0], size : 1.0,
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -5.0 
  });
  left_button = new visual.ImageStim({
    win : psychoJS.window,
    name : 'left_button', units : undefined, 
    image : 'next_button.png', mask : undefined,
    ori : 180.0, pos : [0, 0], size : 1.0,
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -6.0 
  });
  right_button = new visual.ImageStim({
    win : psychoJS.window,
    name : 'right_button', units : undefined, 
    image : 'next_button.png', mask : undefined,
    ori : undefined, pos : [0, 0], size : 1.0,
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -7.0 
  });
  screenScaleMouse = new core.Mouse({
    win: psychoJS.window,
  });
  screenScaleMouse.mouseClock = new util.Clock();
  // Initialize components for Routine "scaleBlank"
  scaleBlankClock = new util.Clock();
  blankScreenForRefresh = new visual.TextStim({
    win: psychoJS.window,
    name: 'blankScreenForRefresh',
    text: '',
    font: textFont,
    units: undefined, 
    pos: [0, 0], height: 10.0,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  // Initialize components for Routine "generalInstructions2"
  generalInstructions2Clock = new util.Clock();
  generalInstructionsText_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'generalInstructionsText_2',
    text: 'Thank you for agreeing to participate in this experiment. To receive compensation, please ensure you complete the following steps:\n\n1. Consent Form\n2. Seating Instructions\n3. Demographic Survey\n4. Screening Activity\n5. Read seven newspaper articles\n6. Respond to all questions\n\nIf you have questions, contact the primary investigator: Shalah Dean Thomas, 616-808-4832. \n\nPlease press the button below to continue.\n',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 1.0,  wrapWidth: wrapWidthText, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -1.0 
  });
  
  nextButton_GeneralInst = new visual.ImageStim({
    win : psychoJS.window,
    name : 'nextButton_GeneralInst', units : undefined, 
    image : 'next_button.png', mask : undefined,
    ori : 0.0, pos : [0, 0], size : 1.0,
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -2.0 
  });
  mouseGeneralInstructions = new core.Mouse({
    win: psychoJS.window,
  });
  mouseGeneralInstructions.mouseClock = new util.Clock();
  // Initialize components for Routine "informedConsent1"
  informedConsent1Clock = new util.Clock();
  consent_image = new visual.ImageStim({
    win : psychoJS.window,
    name : 'consent_image', units : undefined, 
    image : 'stimuli/prolific_consent.png', mask : undefined,
    ori : 0.0, pos : [0, 0], size : consentsize,
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -2.0 
  });
  key_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  mouseInstructions = new core.Mouse({
    win: psychoJS.window,
  });
  mouseInstructions.mouseClock = new util.Clock();
  consent_keyboard = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "seatingInstructions"
  seatingInstructionsClock = new util.Clock();
  seating_key_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  seatingInstructionsText = new visual.TextStim({
    win: psychoJS.window,
    name: 'seatingInstructionsText',
    text: 'This experiment must be completed 14 inches from the screen.\n\nAt this time, please use a ruler to ensure you are positioned 14 inches away from the screen.\n\nOnce you have measured, remain at this distance throughout the experiment.\n\nPress the space button to continue ',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 1.0,  wrapWidth: wrapWidthText, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -2.0 
  });
  
  // Initialize components for Routine "setTrialParametersDemographic"
  setTrialParametersDemographicClock = new util.Clock();
  demogBlockIndx = 0
  // Initialize components for Routine "demographicInstructionsRoutine"
  demographicInstructionsRoutineClock = new util.Clock();
  text_4 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_4',
    text: 'In this section, please answer all questions for the demographic survey.\n\nPlease press the button on the right hand corner to continue.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 1.0,  wrapWidth: wrapWidthText, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  nextButtonDemographicInstructions_2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'nextButtonDemographicInstructions_2', units : undefined, 
    image : 'next_button.png', mask : undefined,
    ori : 0.0, pos : [0, 0], size : 1.0,
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -2.0 
  });
  mouseDemographicInstructions_2 = new core.Mouse({
    win: psychoJS.window,
  });
  mouseDemographicInstructions_2.mouseClock = new util.Clock();
  // Initialize components for Routine "textBoxQuestions"
  textBoxQuestionsClock = new util.Clock();
  fill_textbox = new visual.TextBox({
    win: psychoJS.window,
    name: 'fill_textbox',
    text: '',
    font: 'Arial',
    pos: [0, 0], letterHeight: 25.0,
    size: 1.0,  units: 'pix', 
    color: [(- 0.5373), (- 0.5608), (- 0.5608)], colorSpace: 'rgb',
    fillColor: 'white', borderColor: 'black',
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center-left',
    editable: true,
    multiline: true,
    anchor: 'center-left',
    depth: -1.0 
  });
  
  question_textbox = new visual.TextStim({
    win: psychoJS.window,
    name: 'question_textbox',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 1.0,  wrapWidth: wrapWidthText, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1.0,
    depth: -3.0 
  });
  
  pressSpaceTextTextbox = new visual.TextStim({
    win: psychoJS.window,
    name: 'pressSpaceTextTextbox',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 1.0,  wrapWidth: wrapWidthText, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -4.0 
  });
  
  demoRadio_1 = new visual.Polygon({
    win: psychoJS.window, name: 'demoRadio_1', 
    edges: 100, size:[radiobutton_size, radiobutton_size],
    ori: 0.0, pos: [0, 0],
    lineWidth: 2.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color('black'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: -5, interpolate: true,
  });
  
  demoRadio_2 = new visual.Polygon({
    win: psychoJS.window, name: 'demoRadio_2', 
    edges: 100, size:[radiobutton_size, radiobutton_size],
    ori: 0.0, pos: [0, 0],
    lineWidth: 2.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color('black'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: -6, interpolate: true,
  });
  
  demoRadio_3 = new visual.Polygon({
    win: psychoJS.window, name: 'demoRadio_3', 
    edges: 100, size:[radiobutton_size, radiobutton_size],
    ori: 0.0, pos: [0, 0],
    lineWidth: 2.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color('black'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: -7, interpolate: true,
  });
  
  demoRadio_4 = new visual.Polygon({
    win: psychoJS.window, name: 'demoRadio_4', 
    edges: 100, size:[radiobutton_size, radiobutton_size],
    ori: 0.0, pos: [0, 0],
    lineWidth: 2.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color('black'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: -8, interpolate: true,
  });
  
  demoRadio_5 = new visual.Polygon({
    win: psychoJS.window, name: 'demoRadio_5', 
    edges: 100, size:[radiobutton_size, radiobutton_size],
    ori: 0.0, pos: [0, 0],
    lineWidth: 2.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color('black'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: -9, interpolate: true,
  });
  
  demoRadio_6 = new visual.Polygon({
    win: psychoJS.window, name: 'demoRadio_6', 
    edges: 100, size:[radiobutton_size, radiobutton_size],
    ori: 0.0, pos: [0, 0],
    lineWidth: 2.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color('black'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: -10, interpolate: true,
  });
  
  demoSlider = new visual.Slider({
    win: psychoJS.window, name: 'demoSlider',
    startValue: undefined,
    size: sliderSize, pos: [(sliderPosition[0] + 125), sliderPosition[1]], ori: 0.0, units: 'pix',
    labels: ["PhD/Doctoral Degree", "Masters Degree", "Bachelor Degree", "Associates Degree", "Some College", "High School"], fontSize: labelTextSize*y_scale, ticks: [1, 2, 3, 4, 5, 6],
    granularity: 1.0, style: ["RADIO"],
    color: new util.Color('black'), markerColor: new util.Color('black'), lineColor: new util.Color('white'), 
    opacity: undefined, fontFamily: 'Arial', bold: true, italic: false, depth: -11, 
    flip: true,
  });
  
  positions                       = []
  radiobutton_size                = 23 
  
  
  // initialize colors for slider 
  col_white                       = new util.Color('white');
  col_grey                        = new util.Color('grey');
  col_red                         = new util.Color('red');
  col_black                       = new util.Color('black');
  
  
  
  demoRadios = [
      demoRadio_1,
      demoRadio_2,
      demoRadio_3,
      demoRadio_4,
      demoRadio_5,
      demoRadio_6,
  ];
  
  demoSliderLabels = [ 
      "PhD/Doctoral Degree", 
      "Masters Degree",  
      "Bachelor Degree", 
      "Associates Degree", 
      "Some College", 
      "High School"
  ];
      
  // Initialize components for Routine "screening_instructions"
  screening_instructionsClock = new util.Clock();
  screeningInstructions = new visual.TextStim({
    win: psychoJS.window,
    name: 'screeningInstructions',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 1.0,  wrapWidth: wrapWidthText, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  nextButton_screeningInstructions = new visual.ImageStim({
    win : psychoJS.window,
    name : 'nextButton_screeningInstructions', units : undefined, 
    image : 'next_button.png', mask : undefined,
    ori : 0.0, pos : [0, 0], size : 1.0,
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -2.0 
  });
  mouse_screeningInstructions = new core.Mouse({
    win: psychoJS.window,
  });
  mouse_screeningInstructions.mouseClock = new util.Clock();
  // Initialize components for Routine "pre_snellen"
  pre_snellenClock = new util.Clock();
  currentEye = []
  // Initialize components for Routine "snellen_instructions"
  snellen_instructionsClock = new util.Clock();
  snellenInstructions = new visual.TextStim({
    win: psychoJS.window,
    name: 'snellenInstructions',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 1.0,  wrapWidth: wrapWidthText, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1.0,
    depth: 0.0 
  });
  
  nextButton_snellenInstructions = new visual.ImageStim({
    win : psychoJS.window,
    name : 'nextButton_snellenInstructions', units : undefined, 
    image : 'next_button.png', mask : undefined,
    ori : 0.0, pos : [0, 0], size : 1.0,
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  snellen_mouse_instructions = new core.Mouse({
    win: psychoJS.window,
  });
  snellen_mouse_instructions.mouseClock = new util.Clock();
  // Initialize components for Routine "snellen_test"
  snellen_testClock = new util.Clock();
  snellen_textbox = new visual.TextBox({
    win: psychoJS.window,
    name: 'snellen_textbox',
    text: '',
    font: 'Arial',
    pos: [0, 0], letterHeight: 25.0,
    size: 1.0,  units: 'pix', 
    color: [(- 0.5373), (- 0.5608), (- 0.5608)], colorSpace: 'rgb',
    fillColor: 'white', borderColor: 'black',
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center-left',
    editable: true,
    multiline: true,
    anchor: 'center-left',
    depth: -1.0 
  });
  
  snellen_chart_image = new visual.ImageStim({
    win : psychoJS.window,
    name : 'snellen_chart_image', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0.0, pos : [0, 0], size : 1.0,
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -3.0 
  });
  snellen_chart_instructions = new visual.TextStim({
    win: psychoJS.window,
    name: 'snellen_chart_instructions',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 1.0,  wrapWidth: wrapWidthText, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1.0,
    depth: -4.0 
  });
  
  snellen_question = new visual.TextStim({
    win: psychoJS.window,
    name: 'snellen_question',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 1.0,  wrapWidth: wrapWidthText, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1.0,
    depth: -5.0 
  });
  
  pressSpaceSnellen = new visual.TextStim({
    win: psychoJS.window,
    name: 'pressSpaceSnellen',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 1.0,  wrapWidth: wrapWidthText, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -6.0 
  });
  
  nextButton_snellen = new visual.ImageStim({
    win : psychoJS.window,
    name : 'nextButton_snellen', units : undefined, 
    image : 'next_button.png', mask : undefined,
    ori : 0.0, pos : [0, 0], size : 1.0,
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -7.0 
  });
  snellen_mouse = new core.Mouse({
    win: psychoJS.window,
  });
  snellen_mouse.mouseClock = new util.Clock();
  // Initialize components for Routine "waitPopup"
  waitPopupClock = new util.Clock();
  waitPopupBlank = new visual.TextStim({
    win: psychoJS.window,
    name: 'waitPopupBlank',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 5.0,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  // Initialize components for Routine "memory_general_instructions"
  memory_general_instructionsClock = new util.Clock();
  memoryGeneralInstructions = new visual.TextStim({
    win: psychoJS.window,
    name: 'memoryGeneralInstructions',
    text: 'You will see a list of words and you will have 30 seconds to remember as many as you can.  Afterwards, you will be asked questions regarding the wordlist. ',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 1.0,  wrapWidth: wrapWidthText, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  nextButton_memoryGenInstructions = new visual.ImageStim({
    win : psychoJS.window,
    name : 'nextButton_memoryGenInstructions', units : undefined, 
    image : 'next_button.png', mask : undefined,
    ori : 0.0, pos : [0, 0], size : 1.0,
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -2.0 
  });
  mouse_memoryGenInstructions = new core.Mouse({
    win: psychoJS.window,
  });
  mouse_memoryGenInstructions.mouseClock = new util.Clock();
  // Initialize components for Routine "memory_initialize"
  memory_initializeClock = new util.Clock();
  // Initialize components for Routine "memory_specific_instructions"
  memory_specific_instructionsClock = new util.Clock();
  memorySpecificInstructions = new visual.TextStim({
    win: psychoJS.window,
    name: 'memorySpecificInstructions',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 1.0,  wrapWidth: wrapWidthText, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  nextButton_memorySpecInstructions = new visual.ImageStim({
    win : psychoJS.window,
    name : 'nextButton_memorySpecInstructions', units : undefined, 
    image : 'next_button.png', mask : undefined,
    ori : 0.0, pos : [0, 0], size : 1.0,
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -2.0 
  });
  mouse_memorySpecInstructions = new core.Mouse({
    win: psychoJS.window,
  });
  mouse_memorySpecInstructions.mouseClock = new util.Clock();
  // Initialize components for Routine "memory_display_list"
  memory_display_listClock = new util.Clock();
  listInstruction = new visual.TextStim({
    win: psychoJS.window,
    name: 'listInstruction',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 1.0,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  display_list1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'display_list1',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 1.0,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  display_list2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'display_list2',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 1.0,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  key_resp_2 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "memory_response"
  memory_responseClock = new util.Clock();
  responseInstruction = new visual.TextStim({
    win: psychoJS.window,
    name: 'responseInstruction',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 1.0,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  memory_word = new visual.TextStim({
    win: psychoJS.window,
    name: 'memory_word',
    text: '',
    font: textFont,
    units: undefined, 
    pos: [0, 0], height: 1.0,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  yes_button = new visual.ImageStim({
    win : psychoJS.window,
    name : 'yes_button', units : undefined, 
    image : 'stimuli/memory/yes.jpg', mask : undefined,
    ori : 0.0, pos : [0, 0], size : 1.0,
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -3.0 
  });
  no_button = new visual.ImageStim({
    win : psychoJS.window,
    name : 'no_button', units : undefined, 
    image : 'stimuli/memory/no.jpg', mask : undefined,
    ori : 0.0, pos : [0, 0], size : 1.0,
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -4.0 
  });
  memory_mouse = new core.Mouse({
    win: psychoJS.window,
  });
  memory_mouse.mouseClock = new util.Clock();
  // Initialize components for Routine "memory_interval"
  memory_intervalClock = new util.Clock();
  memory_interval_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'memory_interval_text',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 1.0,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  // Initialize components for Routine "general_instructions"
  general_instructionsClock = new util.Clock();
  generalInstructionsText = new visual.TextStim({
    win: psychoJS.window,
    name: 'generalInstructionsText',
    text: 'This test consists of 7 Newspaper Articles following a set of questions.\n\nDuring the reading sections, please read as quickly as you can, without reading out-loud or re-reading.\n\nHowever, be prepared to answer comprehension questions about the passage. You must select an answer to each question and press the button at the bottom of the screen to advance to the next page.\n\nIf you want to take a break, please do so while on an instruction page, not during the reading rounds as the timer will be running.\n\nIf you have questions, contact the primary investigator: Shalah Dean Thomas, 616-808-4832. \n\nPlease press the button below to continue.\n',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 1.0,  wrapWidth: wrapWidthText, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: 0.0 
  });
  
  nextButton_Instructions_4 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'nextButton_Instructions_4', units : undefined, 
    image : 'next_button.png', mask : undefined,
    ori : 0.0, pos : [0, 0], size : 1.0,
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -2.0 
  });
  mouseInstructions_4 = new core.Mouse({
    win: psychoJS.window,
  });
  mouseInstructions_4.mouseClock = new util.Clock();
  // Initialize components for Routine "teaching_links"
  teaching_linksClock = new util.Clock();
  teaching_link_mouse = new core.Mouse({
    win: psychoJS.window,
  });
  teaching_link_mouse.mouseClock = new util.Clock();
  teaching_example_image = new visual.ImageStim({
    win : psychoJS.window,
    name : 'teaching_example_image', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0.0, pos : [0, 0], size : 1.0,
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -2.0 
  });
  teachingLinksButton = new visual.ImageStim({
    win : psychoJS.window,
    name : 'teachingLinksButton', units : undefined, 
    image : 'next_button.png', mask : undefined,
    ori : 0.0, pos : [0, 0], size : 1.0,
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -3.0 
  });
  // Initialize components for Routine "practiceInstructions"
  practiceInstructionsClock = new util.Clock();
  generalInstructionsText_3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'generalInstructionsText_3',
    text: 'Consider this run as a practice trial to familiarize yourself with the task. \n\nPress the button below to continue.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 1.0,  wrapWidth: wrapWidthText, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: 0.0 
  });
  
  nextButton_Instructions = new visual.ImageStim({
    win : psychoJS.window,
    name : 'nextButton_Instructions', units : undefined, 
    image : 'next_button.png', mask : undefined,
    ori : 0.0, pos : [0, 0], size : 1.0,
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -2.0 
  });
  mouseInstructions_5 = new core.Mouse({
    win: psychoJS.window,
  });
  mouseInstructions_5.mouseClock = new util.Clock();
  // Initialize components for Routine "setBlockParameters"
  setBlockParametersClock = new util.Clock();
  // Initialize components for Routine "setTrialParameters"
  setTrialParametersClock = new util.Clock();
  // Initialize components for Routine "getWords"
  getWordsClock = new util.Clock();
  underlined_words = {}              
  init_temp_list = {}
  // Initialize components for Routine "instruction_proxy"
  instruction_proxyClock = new util.Clock();
  text_5 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_5',
    text: 'Before delving into the articles, share your thoughts by answering a couple of questions related to the topic.\n\nPlease press the button below to continue.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 1.0,  wrapWidth: wrapWidthText, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  nextButton_questionInstructions_2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'nextButton_questionInstructions_2', units : undefined, 
    image : 'next_button.png', mask : undefined,
    ori : 0.0, pos : [0, 0], size : 1.0,
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -2.0 
  });
  mouseQuestionInstructions_2 = new core.Mouse({
    win: psychoJS.window,
  });
  mouseQuestionInstructions_2.mouseClock = new util.Clock();
  // Initialize components for Routine "trial_textbox"
  trial_textboxClock = new util.Clock();
  fill_textbox_2 = new visual.TextBox({
    win: psychoJS.window,
    name: 'fill_textbox_2',
    text: '',
    font: 'Arial',
    pos: [0, 0], letterHeight: 25.0,
    size: 1.0,  units: 'pix', 
    color: [(- 0.5373), (- 0.5608), (- 0.5608)], colorSpace: 'rgb',
    fillColor: 'white', borderColor: 'black',
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center-left',
    editable: true,
    multiline: true,
    anchor: 'center-left',
    depth: -1.0 
  });
  
  question_textbox_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'question_textbox_2',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 1.0,  wrapWidth: wrapWidthText, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1.0,
    depth: -3.0 
  });
  
  pressSpaceTextTextbox_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'pressSpaceTextTextbox_2',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 1.0,  wrapWidth: wrapWidthText, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -4.0 
  });
  
  // Initialize components for Routine "instructions_passage"
  instructions_passageClock = new util.Clock();
  readPassageInstructions = new visual.TextStim({
    win: psychoJS.window,
    name: 'readPassageInstructions',
    text: 'In the next section, please try to read each article at your normal speed without reading aloud, re-reading, or taking breaks, and then press the button at the bottom of the screen when you are finished. Please sit 14 inches from the screen and try not to move your chair or move the distance of your head relative to the screen. Use your mouse or the up and down arrow keys to scroll through the articles and ensure you read the entire text. Do not refresh the browser as it will reset the test.\n\n• \ufeff\ufeffKeep in mind you will answer questions after reading.\n\n\ufeff\ufeff• If you need to take a very short break please do so now.\n\n\ufeff• Verify that you are 14 inches from the screen using a ruler\n\nOnce you are ready, please press the button below to continue.\n',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 1.0,  wrapWidth: wrapWidthText, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  nextButton_readingInstructions = new visual.ImageStim({
    win : psychoJS.window,
    name : 'nextButton_readingInstructions', units : undefined, 
    image : 'next_button.png', mask : undefined,
    ori : 0.0, pos : [0, 0], size : 1.0,
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -2.0 
  });
  mouseReadingInstructions = new core.Mouse({
    win: psychoJS.window,
  });
  mouseReadingInstructions.mouseClock = new util.Clock();
  // Initialize components for Routine "displayArticle"
  displayArticleClock = new util.Clock();
  article_image = new visual.ImageStim({
    win : psychoJS.window,
    name : 'article_image', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0.0, pos : [0, 0], size : 1.0,
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -6.0 
  });
  articleNextButton = new visual.ImageStim({
    win : psychoJS.window,
    name : 'articleNextButton', units : undefined, 
    image : 'next_button.png', mask : undefined,
    ori : 0.0, pos : [0, 0], size : 1.0,
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -7.0 
  });
  article_mouse = new core.Mouse({
    win: psychoJS.window,
  });
  article_mouse.mouseClock = new util.Clock();
  scrolling_keyboard = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "displayPopup"
  displayPopupClock = new util.Clock();
  popup_image = new visual.ImageStim({
    win : psychoJS.window,
    name : 'popup_image', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0.0, pos : [0, 0], size : 1.0,
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -3.0 
  });
  close_button = new visual.ImageStim({
    win : psychoJS.window,
    name : 'close_button', units : undefined, 
    image : 'close_button.jpg', mask : undefined,
    ori : 0.0, pos : [0, 0], size : 1.0,
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -4.0 
  });
  back_button = new visual.ImageStim({
    win : psychoJS.window,
    name : 'back_button', units : undefined, 
    image : 'back_button.jpg', mask : undefined,
    ori : 0.0, pos : [0, 0], size : 1.0,
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -5.0 
  });
  back_text = new visual.ImageStim({
    win : psychoJS.window,
    name : 'back_text', units : undefined, 
    image : 'back_text.jpg', mask : undefined,
    ori : 0.0, pos : [0, 0], size : 1.0,
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -6.0 
  });
  popup_mouse = new core.Mouse({
    win: psychoJS.window,
  });
  popup_mouse.mouseClock = new util.Clock();
  // Initialize components for Routine "instructions_questions"
  instructions_questionsClock = new util.Clock();
  text_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_2',
    text: "You've read the article.\n\nHaving completed the article, the next step involves addressing multiple-choice questions related to its content. Please select the answer that aligns best with your understanding of the article in the upcoming section.\n\nPlease press the button on the right hand corner to continue.",
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 1.0,  wrapWidth: wrapWidthText, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  nextButton_questionInstructions = new visual.ImageStim({
    win : psychoJS.window,
    name : 'nextButton_questionInstructions', units : undefined, 
    image : 'next_button.png', mask : undefined,
    ori : 0.0, pos : [0, 0], size : 1.0,
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -2.0 
  });
  mouseQuestionInstructions = new core.Mouse({
    win: psychoJS.window,
  });
  mouseQuestionInstructions.mouseClock = new util.Clock();
  // Initialize components for Routine "displayQuestions"
  displayQuestionsClock = new util.Clock();
  questionText = new visual.TextStim({
    win: psychoJS.window,
    name: 'questionText',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 1.0,  wrapWidth: wrapWidthText, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  questionPressInstruction = new visual.TextStim({
    win: psychoJS.window,
    name: 'questionPressInstruction',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 1.0,  wrapWidth: wrapWidthText, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  radiobutton_1 = new visual.Polygon({
    win: psychoJS.window, name: 'radiobutton_1', 
    edges: 100, size:[1.0, 1.0],
    ori: 0.0, pos: [0, 0],
    lineWidth: 2.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color('black'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: -3, interpolate: true,
  });
  
  radiobutton_2 = new visual.Polygon({
    win: psychoJS.window, name: 'radiobutton_2', 
    edges: 100, size:[1.0, 1.0],
    ori: 0.0, pos: [0, 0],
    lineWidth: 2.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color('black'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: -4, interpolate: true,
  });
  
  radiobutton_3 = new visual.Polygon({
    win: psychoJS.window, name: 'radiobutton_3', 
    edges: 100, size:[1.0, 1.0],
    ori: 0.0, pos: [0, 0],
    lineWidth: 2.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color('black'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: -5, interpolate: true,
  });
  
  radiobutton_4 = new visual.Polygon({
    win: psychoJS.window, name: 'radiobutton_4', 
    edges: 100, size:[1.0, 1.0],
    ori: 0.0, pos: [0, 0],
    lineWidth: 2.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color('black'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: -6, interpolate: true,
  });
  
  radiobutton_5 = new visual.Polygon({
    win: psychoJS.window, name: 'radiobutton_5', 
    edges: 100, size:[1.0, 1.0],
    ori: 0.0, pos: [0, 0],
    lineWidth: 2.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color('black'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: -7, interpolate: true,
  });
  
  radiobutton_6 = new visual.Polygon({
    win: psychoJS.window, name: 'radiobutton_6', 
    edges: 100, size:[1.0, 1.0],
    ori: 0.0, pos: [0, 0],
    lineWidth: 2.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color('black'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: -8, interpolate: true,
  });
  
  radiobutton_7 = new visual.Polygon({
    win: psychoJS.window, name: 'radiobutton_7', 
    edges: 100, size:[1.0, 1.0],
    ori: 0.0, pos: [0, 0],
    lineWidth: 2.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color('black'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: -9, interpolate: true,
  });
  
  radiobutton_8 = new visual.Polygon({
    win: psychoJS.window, name: 'radiobutton_8', 
    edges: 100, size:[1.0, 1.0],
    ori: 0.0, pos: [0, 0],
    lineWidth: 2.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color('black'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: -10, interpolate: true,
  });
  
  radiobutton_9 = new visual.Polygon({
    win: psychoJS.window, name: 'radiobutton_9', 
    edges: 100, size:[1.0, 1.0],
    ori: 0.0, pos: [0, 0],
    lineWidth: 2.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color('black'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: -11, interpolate: true,
  });
  
  questionSlider = new visual.Slider({
    win: psychoJS.window, name: 'questionSlider',
    startValue: undefined,
    size: 1.0, pos: [0, 0], ori: 0.0, units: 'pix',
    labels: undefined, fontSize: 1.0, ticks: [1, 2, 3],
    granularity: 1.0, style: ["RADIO"],
    color: new util.Color('black'), markerColor: new util.Color('black'), lineColor: new util.Color('black'), 
    opacity: undefined, fontFamily: 'Arial', bold: true, italic: false, depth: -12, 
    flip: true,
  });
  
  positions                       = []
  radiobutton_size                = 23 
  
  
  // initialize colors for slider 
  col_white                       = new util.Color('white');
  col_grey                        = new util.Color('grey');
  col_red                         = new util.Color('red');
  col_black                       = new util.Color('black');
  comprehensionButton = new visual.ImageStim({
    win : psychoJS.window,
    name : 'comprehensionButton', units : undefined, 
    image : 'next_button.png', mask : undefined,
    ori : 0.0, pos : [0, 0], size : 1.0,
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -14.0 
  });
  comprehensionMouse = new core.Mouse({
    win: psychoJS.window,
  });
  comprehensionMouse.mouseClock = new util.Clock();
  // Initialize components for Routine "displayFeedbackSurvey"
  displayFeedbackSurveyClock = new util.Clock();
  feedbackSurveyText = new visual.TextStim({
    win: psychoJS.window,
    name: 'feedbackSurveyText',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 1.0,  wrapWidth: wrapWidthText, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  pressFeedbackSpaceText = new visual.TextStim({
    win: psychoJS.window,
    name: 'pressFeedbackSpaceText',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 1.0,  wrapWidth: wrapWidthText, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  fradiobutton_1 = new visual.Polygon({
    win: psychoJS.window, name: 'fradiobutton_1', 
    edges: 100, size:[1.0, 1.0],
    ori: 0.0, pos: [0, 0],
    lineWidth: 2.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color('black'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: -3, interpolate: true,
  });
  
  fradiobutton_2 = new visual.Polygon({
    win: psychoJS.window, name: 'fradiobutton_2', 
    edges: 100, size:[1.0, 1.0],
    ori: 0.0, pos: [0, 0],
    lineWidth: 2.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color('black'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: -4, interpolate: true,
  });
  
  fradiobutton_3 = new visual.Polygon({
    win: psychoJS.window, name: 'fradiobutton_3', 
    edges: 100, size:[1.0, 1.0],
    ori: 0.0, pos: [0, 0],
    lineWidth: 2.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color('black'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: -5, interpolate: true,
  });
  
  fradiobutton_4 = new visual.Polygon({
    win: psychoJS.window, name: 'fradiobutton_4', 
    edges: 100, size:[1.0, 1.0],
    ori: 0.0, pos: [0, 0],
    lineWidth: 2.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color('black'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: -6, interpolate: true,
  });
  
  fradiobutton_5 = new visual.Polygon({
    win: psychoJS.window, name: 'fradiobutton_5', 
    edges: 100, size:[1.0, 1.0],
    ori: 0.0, pos: [0, 0],
    lineWidth: 2.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color('black'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: -7, interpolate: true,
  });
  
  fradiobutton_6 = new visual.Polygon({
    win: psychoJS.window, name: 'fradiobutton_6', 
    edges: 100, size:[1.0, 1.0],
    ori: 0.0, pos: [0, 0],
    lineWidth: 2.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color('black'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: -8, interpolate: true,
  });
  
  fradiobutton_7 = new visual.Polygon({
    win: psychoJS.window, name: 'fradiobutton_7', 
    edges: 100, size:[1.0, 1.0],
    ori: 0.0, pos: [0, 0],
    lineWidth: 2.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color('black'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: -9, interpolate: true,
  });
  
  fradiobutton_8 = new visual.Polygon({
    win: psychoJS.window, name: 'fradiobutton_8', 
    edges: 100, size:[1.0, 1.0],
    ori: 0.0, pos: [0, 0],
    lineWidth: 2.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color('black'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: -10, interpolate: true,
  });
  
  fradiobutton_9 = new visual.Polygon({
    win: psychoJS.window, name: 'fradiobutton_9', 
    edges: 100, size:[1.0, 1.0],
    ori: 0.0, pos: [0, 0],
    lineWidth: 2.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color('black'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: -11, interpolate: true,
  });
  
  feedbackSurveySlider = new visual.Slider({
    win: psychoJS.window, name: 'feedbackSurveySlider',
    startValue: undefined,
    size: 1.0, pos: [0, 0], ori: 0.0, units: 'pix',
    labels: undefined, fontSize: 1.0, ticks: [1, 2, 3, 4, 5],
    granularity: 1.0, style: ["RADIO"],
    color: new util.Color('black'), markerColor: new util.Color('black'), lineColor: new util.Color('black'), 
    opacity: undefined, fontFamily: 'Arial', bold: true, italic: false, depth: -12, 
    flip: true,
  });
  
  feedbackButton = new visual.ImageStim({
    win : psychoJS.window,
    name : 'feedbackButton', units : undefined, 
    image : 'next_button.png', mask : undefined,
    ori : 0.0, pos : [0, 0], size : 1.0,
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -14.0 
  });
  feedbackMouse = new core.Mouse({
    win: psychoJS.window,
  });
  feedbackMouse.mouseClock = new util.Clock();
  // Initialize components for Routine "findFastest"
  findFastestClock = new util.Clock();
  // Initialize components for Routine "preferenceInstructionsRoutine"
  preferenceInstructionsRoutineClock = new util.Clock();
  text_3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_3',
    text: 'You have finished reading all articles! \n\nKindly respond to the post-survey questions.\n\nPlease press the button on the right hand corner to continue.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 1.0,  wrapWidth: wrapWidthText, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  nextButtonDemographicInstructions = new visual.ImageStim({
    win : psychoJS.window,
    name : 'nextButtonDemographicInstructions', units : undefined, 
    image : 'next_button.png', mask : undefined,
    ori : 0.0, pos : [0, 0], size : 1.0,
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -2.0 
  });
  mouseDemographicInstructions = new core.Mouse({
    win: psychoJS.window,
  });
  mouseDemographicInstructions.mouseClock = new util.Clock();
  // Initialize components for Routine "font_preference"
  font_preferenceClock = new util.Clock();
  preference_image = new visual.ImageStim({
    win : psychoJS.window,
    name : 'preference_image', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0.0, pos : [0, 0], size : 1.0,
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  preferenceText = new visual.TextStim({
    win: psychoJS.window,
    name: 'preferenceText',
    text: 'The same paragraph is written in three different fonts. Please specify which font you prefer: ',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 1.0,  wrapWidth: wrapWidthText, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  pradiobutton_1 = new visual.Polygon({
    win: psychoJS.window, name: 'pradiobutton_1', 
    edges: 100, size:[1.0, 1.0],
    ori: 0.0, pos: [0, 0],
    lineWidth: 2.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color('black'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: -3, interpolate: true,
  });
  
  pradiobutton_2 = new visual.Polygon({
    win: psychoJS.window, name: 'pradiobutton_2', 
    edges: 100, size:[1.0, 1.0],
    ori: 0.0, pos: [0, 0],
    lineWidth: 2.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color('black'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: -4, interpolate: true,
  });
  
  pradiobutton_3 = new visual.Polygon({
    win: psychoJS.window, name: 'pradiobutton_3', 
    edges: 100, size:[1.0, 1.0],
    ori: 0.0, pos: [0, 0],
    lineWidth: 2.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color('black'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: -5, interpolate: true,
  });
  
  pradiobutton_4 = new visual.Polygon({
    win: psychoJS.window, name: 'pradiobutton_4', 
    edges: 100, size:[1.0, 1.0],
    ori: 0.0, pos: [0, 0],
    lineWidth: 2.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color('black'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: -6, interpolate: true,
  });
  
  pradiobutton_5 = new visual.Polygon({
    win: psychoJS.window, name: 'pradiobutton_5', 
    edges: 100, size:[1.0, 1.0],
    ori: 0.0, pos: [0, 0],
    lineWidth: 2.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color('black'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: -7, interpolate: true,
  });
  
  pradiobutton_6 = new visual.Polygon({
    win: psychoJS.window, name: 'pradiobutton_6', 
    edges: 100, size:[1.0, 1.0],
    ori: 0.0, pos: [0, 0],
    lineWidth: 2.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color('black'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: -8, interpolate: true,
  });
  
  pradiobutton_7 = new visual.Polygon({
    win: psychoJS.window, name: 'pradiobutton_7', 
    edges: 100, size:[1.0, 1.0],
    ori: 0.0, pos: [0, 0],
    lineWidth: 2.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color('black'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: -9, interpolate: true,
  });
  
  pradiobutton_8 = new visual.Polygon({
    win: psychoJS.window, name: 'pradiobutton_8', 
    edges: 100, size:[1.0, 1.0],
    ori: 0.0, pos: [0, 0],
    lineWidth: 2.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color('black'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: -10, interpolate: true,
  });
  
  pradiobutton_9 = new visual.Polygon({
    win: psychoJS.window, name: 'pradiobutton_9', 
    edges: 100, size:[1.0, 1.0],
    ori: 0.0, pos: [0, 0],
    lineWidth: 2.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color('black'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: -11, interpolate: true,
  });
  
  preferenceSlider = new visual.Slider({
    win: psychoJS.window, name: 'preferenceSlider',
    startValue: undefined,
    size: 1.0, pos: [0, 0], ori: 0.0, units: 'pix',
    labels: undefined, fontSize: 1.0, ticks: [1, 2, 3],
    granularity: 1.0, style: ["RADIO"],
    color: new util.Color('black'), markerColor: new util.Color('black'), lineColor: new util.Color('black'), 
    opacity: undefined, fontFamily: 'Arial', bold: true, italic: false, depth: -12, 
    flip: true,
  });
  
  preferenceButton = new visual.ImageStim({
    win : psychoJS.window,
    name : 'preferenceButton', units : undefined, 
    image : 'next_button.png', mask : undefined,
    ori : 0.0, pos : [0, 0], size : 1.0,
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -14.0 
  });
  mousePreference = new core.Mouse({
    win: psychoJS.window,
  });
  mousePreference.mouseClock = new util.Clock();
  // Initialize components for Routine "hyperlink_preference"
  hyperlink_preferenceClock = new util.Clock();
  hyperlink_preference_answers = [
    "I strongly prefer hyperlinks",
    "I prefer hyperlinks",
    "I don’t have a preference",
    "I do not prefer hyperlinks",
    "I strongly do not prefer hyperlinks",
  ].reverse();
  questionTextHyperlinkPreference = new visual.TextStim({
    win: psychoJS.window,
    name: 'questionTextHyperlinkPreference',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 1.0,  wrapWidth: wrapWidthText, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  pressSpaceHyperlinkPreference = new visual.TextStim({
    win: psychoJS.window,
    name: 'pressSpaceHyperlinkPreference',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 1.0,  wrapWidth: wrapWidthText, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  hpbutton_1 = new visual.Polygon({
    win: psychoJS.window, name: 'hpbutton_1', 
    edges: 100, size:[1.0, 1.0],
    ori: 0.0, pos: [0, 0],
    lineWidth: 2.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color('black'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: -3, interpolate: true,
  });
  
  hpbutton_2 = new visual.Polygon({
    win: psychoJS.window, name: 'hpbutton_2', 
    edges: 100, size:[1.0, 1.0],
    ori: 0.0, pos: [0, 0],
    lineWidth: 2.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color('black'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: -4, interpolate: true,
  });
  
  hpbutton_3 = new visual.Polygon({
    win: psychoJS.window, name: 'hpbutton_3', 
    edges: 100, size:[1.0, 1.0],
    ori: 0.0, pos: [0, 0],
    lineWidth: 2.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color('black'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: -5, interpolate: true,
  });
  
  hpbutton_4 = new visual.Polygon({
    win: psychoJS.window, name: 'hpbutton_4', 
    edges: 100, size:[1.0, 1.0],
    ori: 0.0, pos: [0, 0],
    lineWidth: 2.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color('black'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: -6, interpolate: true,
  });
  
  hpbutton_5 = new visual.Polygon({
    win: psychoJS.window, name: 'hpbutton_5', 
    edges: 100, size:[1.0, 1.0],
    ori: 0.0, pos: [0, 0],
    lineWidth: 2.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color('black'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: -7, interpolate: true,
  });
  
  questionsSliderHyperlinkPreference = new visual.Slider({
    win: psychoJS.window, name: 'questionsSliderHyperlinkPreference',
    startValue: undefined,
    size: 1.0, pos: [0, 0], ori: 0.0, units: 'pix',
    labels: undefined, fontSize: 1.0, ticks: [1, 2, 3],
    granularity: 1.0, style: ["RADIO"],
    color: new util.Color('black'), markerColor: new util.Color('black'), lineColor: new util.Color('black'), 
    opacity: undefined, fontFamily: 'Arial', bold: true, italic: false, depth: -8, 
    flip: true,
  });
  
  nextButton_hyperlinkPreference = new visual.ImageStim({
    win : psychoJS.window,
    name : 'nextButton_hyperlinkPreference', units : undefined, 
    image : 'next_button.png', mask : undefined,
    ori : 0.0, pos : [0, 0], size : 1.0,
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -10.0 
  });
  mouseHyperlinkPreference = new core.Mouse({
    win: psychoJS.window,
  });
  mouseHyperlinkPreference.mouseClock = new util.Clock();
  // Initialize components for Routine "post_engagement"
  post_engagementClock = new util.Clock();
  post_engagement_questions = [
    {
      text: "I have fun looking at newspaper articles.",
      type: "engagement",
    },
    {
      text: "It is hard to pay attention to what I'm reading.",
      type: "engagement",
    },
    {
      text: "I think it is important to understand what I read.",
      type: "attitude",
    },
    {
      text: "I only read if I have to",
      type: "engagement",
    },
    {
      text: "I think reading is important.",
      type: "engagement",
    },
    {
      text: "I enjoy reading",
      type: "attitude",
    },
  ];
  
  post_engagement_answers = [
    "Not at all like me",
    "Not much like me",
    "Can't decide",
    "Kind of like me",
    "A lot like me",
  ].reverse();
  questionTextPostEngagement = new visual.TextStim({
    win: psychoJS.window,
    name: 'questionTextPostEngagement',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 1.0,  wrapWidth: wrapWidthText, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  pressSpacePostEngagement = new visual.TextStim({
    win: psychoJS.window,
    name: 'pressSpacePostEngagement',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 1.0,  wrapWidth: wrapWidthText, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  peradiobutton_1 = new visual.Polygon({
    win: psychoJS.window, name: 'peradiobutton_1', 
    edges: 100, size:[1.0, 1.0],
    ori: 0.0, pos: [0, 0],
    lineWidth: 2.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color('black'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: -3, interpolate: true,
  });
  
  peradiobutton_2 = new visual.Polygon({
    win: psychoJS.window, name: 'peradiobutton_2', 
    edges: 100, size:[1.0, 1.0],
    ori: 0.0, pos: [0, 0],
    lineWidth: 2.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color('black'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: -4, interpolate: true,
  });
  
  peradiobutton_3 = new visual.Polygon({
    win: psychoJS.window, name: 'peradiobutton_3', 
    edges: 100, size:[1.0, 1.0],
    ori: 0.0, pos: [0, 0],
    lineWidth: 2.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color('black'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: -5, interpolate: true,
  });
  
  peradiobutton_4 = new visual.Polygon({
    win: psychoJS.window, name: 'peradiobutton_4', 
    edges: 100, size:[1.0, 1.0],
    ori: 0.0, pos: [0, 0],
    lineWidth: 2.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color('black'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: -6, interpolate: true,
  });
  
  peradiobutton_5 = new visual.Polygon({
    win: psychoJS.window, name: 'peradiobutton_5', 
    edges: 100, size:[1.0, 1.0],
    ori: 0.0, pos: [0, 0],
    lineWidth: 2.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color('black'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: -7, interpolate: true,
  });
  
  questionsSliderPostEngagement = new visual.Slider({
    win: psychoJS.window, name: 'questionsSliderPostEngagement',
    startValue: undefined,
    size: 1.0, pos: [0, 0], ori: 0.0, units: 'pix',
    labels: undefined, fontSize: 1.0, ticks: [1, 2, 3],
    granularity: 1.0, style: ["RADIO"],
    color: new util.Color('black'), markerColor: new util.Color('black'), lineColor: new util.Color('black'), 
    opacity: undefined, fontFamily: 'Arial', bold: true, italic: false, depth: -8, 
    flip: true,
  });
  
  nextButton_postEngagement = new visual.ImageStim({
    win : psychoJS.window,
    name : 'nextButton_postEngagement', units : undefined, 
    image : 'next_button.png', mask : undefined,
    ori : 0.0, pos : [0, 0], size : 1.0,
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -10.0 
  });
  mousePostEngagement = new core.Mouse({
    win: psychoJS.window,
  });
  mousePostEngagement.mouseClock = new util.Clock();
  // Initialize components for Routine "displayDemographicQuestions"
  displayDemographicQuestionsClock = new util.Clock();
  questionTextDemographic = new visual.TextStim({
    win: psychoJS.window,
    name: 'questionTextDemographic',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 1.0,  wrapWidth: wrapWidthText, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  pressSpaceTextDemographic = new visual.TextStim({
    win: psychoJS.window,
    name: 'pressSpaceTextDemographic',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 1.0,  wrapWidth: wrapWidthText, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  dradiobutton_1 = new visual.Polygon({
    win: psychoJS.window, name: 'dradiobutton_1', 
    edges: 100, size:[1.0, 1.0],
    ori: 0.0, pos: [0, 0],
    lineWidth: 2.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color('black'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: -3, interpolate: true,
  });
  
  dradiobutton_2 = new visual.Polygon({
    win: psychoJS.window, name: 'dradiobutton_2', 
    edges: 100, size:[1.0, 1.0],
    ori: 0.0, pos: [0, 0],
    lineWidth: 2.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color('black'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: -4, interpolate: true,
  });
  
  dradiobutton_3 = new visual.Polygon({
    win: psychoJS.window, name: 'dradiobutton_3', 
    edges: 100, size:[1.0, 1.0],
    ori: 0.0, pos: [0, 0],
    lineWidth: 2.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color('black'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: -5, interpolate: true,
  });
  
  dradiobutton_4 = new visual.Polygon({
    win: psychoJS.window, name: 'dradiobutton_4', 
    edges: 100, size:[1.0, 1.0],
    ori: 0.0, pos: [0, 0],
    lineWidth: 2.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color('black'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: -6, interpolate: true,
  });
  
  dradiobutton_5 = new visual.Polygon({
    win: psychoJS.window, name: 'dradiobutton_5', 
    edges: 100, size:[1.0, 1.0],
    ori: 0.0, pos: [0, 0],
    lineWidth: 2.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color('black'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: -7, interpolate: true,
  });
  
  dradiobutton_6 = new visual.Polygon({
    win: psychoJS.window, name: 'dradiobutton_6', 
    edges: 100, size:[1.0, 1.0],
    ori: 0.0, pos: [0, 0],
    lineWidth: 2.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color('black'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: -8, interpolate: true,
  });
  
  dradiobutton_7 = new visual.Polygon({
    win: psychoJS.window, name: 'dradiobutton_7', 
    edges: 100, size:[1.0, 1.0],
    ori: 0.0, pos: [0, 0],
    lineWidth: 2.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color('black'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: -9, interpolate: true,
  });
  
  dradiobutton_8 = new visual.Polygon({
    win: psychoJS.window, name: 'dradiobutton_8', 
    edges: 100, size:[1.0, 1.0],
    ori: 0.0, pos: [0, 0],
    lineWidth: 2.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color('black'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: -10, interpolate: true,
  });
  
  dradiobutton_9 = new visual.Polygon({
    win: psychoJS.window, name: 'dradiobutton_9', 
    edges: 100, size:[1.0, 1.0],
    ori: 0.0, pos: [0, 0],
    lineWidth: 2.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color('black'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: -11, interpolate: true,
  });
  
  questionSliderDemographic = new visual.Slider({
    win: psychoJS.window, name: 'questionSliderDemographic',
    startValue: undefined,
    size: 1.0, pos: [0, 0], ori: 0.0, units: 'pix',
    labels: undefined, fontSize: 1.0, ticks: [1, 2, 3],
    granularity: 1.0, style: ["RADIO"],
    color: new util.Color('black'), markerColor: new util.Color('black'), lineColor: new util.Color('black'), 
    opacity: undefined, fontFamily: 'Arial', bold: true, italic: false, depth: -12, 
    flip: true,
  });
  
  nextButton_demographic = new visual.ImageStim({
    win : psychoJS.window,
    name : 'nextButton_demographic', units : undefined, 
    image : 'next_button.png', mask : undefined,
    ori : 0.0, pos : [0, 0], size : 1.0,
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -14.0 
  });
  mouseDemographic = new core.Mouse({
    win: psychoJS.window,
  });
  mouseDemographic.mouseClock = new util.Clock();
  // Initialize components for Routine "trouble_with_test"
  trouble_with_testClock = new util.Clock();
  troubleFillBox = new visual.TextBox({
    win: psychoJS.window,
    name: 'troubleFillBox',
    text: '',
    font: 'Arial',
    pos: [0, 0], letterHeight: 25.0,
    size: 1.0,  units: 'pix', 
    color: [(- 0.5373), (- 0.5608), (- 0.5608)], colorSpace: 'rgb',
    fillColor: 'white', borderColor: 'black',
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center-left',
    editable: true,
    multiline: true,
    anchor: 'center-left',
    depth: 0.0 
  });
  
  troubleWithTest = new visual.TextStim({
    win: psychoJS.window,
    name: 'troubleWithTest',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 1.0,  wrapWidth: wrapWidthText, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1.0,
    depth: -2.0 
  });
  
  pressSpaceTrouble = new visual.TextStim({
    win: psychoJS.window,
    name: 'pressSpaceTrouble',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 1.0,  wrapWidth: wrapWidthText, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -3.0 
  });
  
  // Initialize components for Routine "writeDataToFile"
  writeDataToFileClock = new util.Clock();
  // Initialize components for Routine "finalInstructions"
  finalInstructionsClock = new util.Clock();
  finish_instructions = new visual.TextStim({
    win: psychoJS.window,
    name: 'finish_instructions',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 1.0,  wrapWidth: wrapWidthText, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  key_resp_3 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var continueRoutine;
var getFit;
var getClash;
var sortObjects;
var loopAverage;
var getAverage;
var isKeyPressed;
var participantCode;
var exp_group;
var registeryDate;
var totalTrialIterationIndex;
var data_totalTrialIndex;
var data_dateTime;
var data_feedbackRating;
var data_trialType;
var data_itemID;
var data_setID;
var data_passageType;
var data_passageWPM;
var data_passageRT;
var data_passageFont;
var data_passageSpacing;
var data_passageWordCount;
var data_passageLevel;
var data_articleSkipType;
var data_compAccuracy;
var data_compChoice;
var data_surveyRT;
var data_blockName;
var data_zoomLevel;
var currentFontType;
var currentRT;
var browserZoom;
var thisExp;
var trialColumNames;
var initializeComponents;
function initializeRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'initialize' ---
    t = 0;
    initializeClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // FUNCTIONS FOR FIT AND CLASH ESTIMATIONS //
    
    // you'll notice that each of the functions have '2' in their name.
    // Reason is that we need to duplicate these into a new name to be
    // able to use them in other components. Otherwise Psychopy does not
    // recognize your functions. 
    
    function getFit2(ftArray,field){
    
        // field is the key in which we make the first comparison: e.g. "accuracy".
        var conditions = Object.keys(ftArray)
        var fitCondition = conditions[0] // fit condition by acc 
        var fitAcc = ftArray[fitCondition][field]; // fit acc score
        var fitWpm = ftArray[fitCondition]["wpm"]; // fit by acc wpm 
        
        console.log('fit array: ',ftArray)
        
        for (var keyi = 1; keyi < conditions.length; keyi++){
            // starts from the second key
            if (ftArray[conditions[keyi]][field]  < fitAcc) {
                // if remaining key's accuracy smaller than the first, stop loop, get first one as max
                break;
            } else if (ftArray[conditions[keyi]]["wpm"]>fitWpm){           
                 // if remaining keys have the same accuracy, compare if wpms are the same
                    fitWpm = ftArray[conditions[keyi]]["wpm"]
                    fitCondition = conditions[keyi]
                }
            
        }
        return [fitCondition,fitWpm,fitAcc]
    }
    
    getFit = getFit2
          
    function getClash2(ftArray,field){
    
        // field is the key in which we make the first comparison: e.g. "accuracy".
        var conditions = Object.keys(ftArray)
        var clashCondition = conditions[conditions.length-1] // clash condition by acc 
        var clashAcc = ftArray[clashCondition][field]; // clash acc score
        var clashWpm = ftArray[clashCondition]["wpm"]; // clash by acc wpm 
        
        console.log('clash array: ',ftArray)
        
        for (var keyi = conditions.length-1; keyi > -1; keyi--){
            // starts from the last key and go towards the first key 
            // because these are ordered from highest to lowest accuracy 
    
            
            if (ftArray[conditions[keyi]][field]  > clashAcc) {
                console.log('clash curr key: ',conditions[keyi])
                console.log('clash curr acc: ',ftArray[conditions[keyi]][field])
                // if remaining key's accuracy smaller than the first, stop loop, get first one as max
                break;
            } else if (ftArray[conditions[keyi]]["wpm"]<clashWpm){           
                 // if remaining keys have the same accuracy, compare if wpms are the same
                    clashWpm = ftArray[conditions[keyi]]["wpm"]
                    clashCondition = conditions[keyi]
                }
            
        }
    
        return [clashCondition,clashWpm,clashAcc]
    
    }
    
    getClash = getClash2
    
    
    function sortObjects2(obj, num,field) {
        const requiredObj = {};
        if(num > Object.keys(obj).length){
           return false;
        };
        Object.keys(obj).sort((a, b) => obj[b][field] - obj[a][field]).forEach((key, ind) =>
        {
           if(ind < num){
              requiredObj[key] = obj[key];
           }
        });
        return requiredObj;
     };
    
    sortObjects = sortObjects2
    
    function loopAverage2(ftArray, condArray){
        // ftArray =  fitClashArray (e.g. [[getFitClash_all] [getFitClash_spacing] [getFitClash_font]])
        
        
        // get averages of wpm and acc for all fit-clash objects (all, spacing, font etc.) 
        for (var obji = 0; obji < ftArray.length; obji++){
            // loop over fit-clash objects 
            var currObj = ftArray[obji]
            var currConds = Object.keys(currObj)
            console.log('currObj: ',currObj)
            console.log('currConds: ',currConds)        
            console.log('averaging array: ',obji)
            
            // get avg of wpm and acc for this object (obji) and this condition (condi; e.g. flex_sp1, "-0.05","flex")
            for (var condi = 0; condi <currConds.length; condi++) {
                console.log('averaging condition: ',currConds[condi])
                currObj[currConds[condi]].wpm = Math.round(getAverage(currObj[currConds[condi]].wpm)*1000)/1000
    
                currObj[currConds[condi]].accuracy = Math.round(getAverage(currObj[currConds[condi]].accuracy)*1000)/1000
    
            }
            ftArray[obji] = currObj
        }
    
        return ftArray
    }
    
    loopAverage = loopAverage2
    
    function getAverage2(myNums){
    
        // create a variable for the sum and initialize it
        let sum = 0;
    
        // iterate over each item in the array
        for (let i = 0; i < myNums.length; i++ ) {
        sum += myNums[i];
        }
        var result = sum / myNums.length
        return result
    }
    
    getAverage = getAverage2
    
    function isKeyPressed2(keyEvents, key) {
    return keyEvents.some(event => event.pigletKey === key && event.status === core.Keyboard.KeyStatus.KEY_DOWN)
    }
    
    isKeyPressed = isKeyPressed2
    document.body.style.zoom = "100%" 
    
    newY = []
    
    
    
    imagesize = [2560,1900]
    
    popupsize = [1024,1000]
    
    preferencesize = [1247,302]
    
    
    // window pixel sizes below (h horizontal, v vertical)
    vsize = psychoJS.window._size[1];
    hsize = psychoJS.window._size[0];
    
    console.log('vsize', vsize)
    
    halfimg_x = popupsize[0]/2
    halfscreen_y = vsize/2
    
    
    preference_y = (halfscreen_y-preferencesize[1])
    preference_question_y = preference_y-(vsize*.2)
    preference_slider_y   = preference_question_y-(vsize*.2)
    
    
    popup_buttons = {}
    popup_buttons.back_button = {}
    popup_buttons.back_text = {}
    popup_buttons.close_button = {}
    // register position and size of popup's back button 
    popup_buttons.back_button.width  = 200
    popup_buttons.back_button.height = 50
    popup_buttons.back_button.x      = (-halfimg_x+(popup_buttons.back_button.width/2))
    popup_buttons.back_button.y      = (-halfscreen_y + (halfscreen_y*.1)) + popup_buttons.back_button.height
    
    
    // register position and size of popup's back text 
    popup_buttons.back_text.width  = 200
    popup_buttons.back_text.height = 50
    popup_buttons.back_text.x      = popup_buttons.back_button.x + popup_buttons.back_button.width/2 +popup_buttons.back_text.width/2 
    popup_buttons.back_text.y      = popup_buttons.back_button.y
    
    
    // register position and size of popup's close button 
    popup_buttons.close_button.width  = 25
    popup_buttons.close_button.height = 25
    popup_buttons.close_button.x      = (halfimg_x - (halfimg_x*.1)) 
    popup_buttons.close_button.y      = (halfscreen_y-(halfscreen_y*.05)) - popup_buttons.close_button.height
    
    // memory test buttons
    memory_button            = {}
    memory_button.yes_button = {}
    memory_button.no_button  = {}
    
    memory_button.yes_button.width      = hsize/10
    memory_button.yes_button.height     = hsize/20
    memory_button.yes_button.x          = -hsize/10
    memory_button.yes_button.y          = -hsize/10
    
    memory_button.no_button.width       = hsize/10
    memory_button.no_button.height      = hsize/20
    memory_button.no_button.x           = hsize/10
    memory_button.no_button.y           = -hsize/10
    ///////////////////////////////////////////////////////
    //// EXPERIMENT TYPE (FONT OR SPACING COMPARISONS) ////
    ///////////////////////////////////////////////////////
    //
    // assign which fit clash conditions will be displayed at the end
    //experimentType      = 'font' // 'spacing', or 'font'
    //
    //////////////////////////////////////////////////////////////////////////
    //// TEXT PARAMETERS (pixels, size multipliers, wrapwidth, position.) ////
    //////////////////////////////////////////////////////////////////////////
    //
    /////////////////
    // IMAGE SIZES //
    /////////////////
    //
    // make sure to change these vales according to the image pixels you've rendered 
    // with the readability text to image conversion tool
    //
    // horizontal axis
    //xaxis                               = 1024 
    // vertical axis
    //yaxis                               = 768
    //
    ////////////////
    // FONT SIZES //
    ////////////////
    //
    // base font size (font size in pixels)
    //baseSizePixels                      = 16;
    //
    // size multiplier's for different types of text
    // multipliers work on the base pixel size
    // values lower than 1 are smaller than base size
    // values greater than 1 are smaller than base size
    //
    // comprehension, feedback, and demographic question size multiplier
    //questionSizeMultiplier              = 1.2;
    // 
    //passageSizeMultiplier               = 1.5;
    // 
    //instructionSizeMultiplier           = 1.5;
    //
    // apply multipliers to base pixel size
    //passageTextSize                     = baseSizePixels * passageSizeMultiplier;
    //questionTextSize                    = baseSizePixels * questionSizeMultiplier;      // used in comprehension, feedback, and demographic questions 
    //labelTextSize                       = baseSizePixels * questionSizeMultiplier;      // used in labels of the question sliders (each option of the likert items)
    //instructionTextSize                 = baseSizePixels * instructionSizeMultiplier;   // used for instructions and consent forms
    //
    // text COLOR (questions and instructions)
    //textColor                           = "black"
    //
    // text font (questions and instructions)
    //textFont                            = "Arial"
    //
    // keyboard pause duration for each screen of passages (if key press is applicable)
    // waits until these seconds passes to allow to skip the passage
    //keyboardPauseDuration               = .05;
    //
    // mouse delay (time required for enabling button click)
    //mouseDelay                          = .05;  // between screens of a passage 
    //mouseDelayOther                     = .05;  // between instructions, consent form pages, or questions 
    //
    //
    // screen scale variables, we are initializing these here
    //y_scale                             = 1;
    //x_scale                             = 1;
    //
    // window pixel sizes below (h horizontal, v vertical)
    //screen_height                       = psychoJS.window.size[1];
    //screen_width                        = psychoJS.window.size[0];
    //hsize                               = screen_height;
    //vsize                               = screen_width;
    //
    //passageYaxis                        = -200;
    //
    //
    // text wrapping and position parameters (questions, instructions)
    //wrapWidthText                       = screen_width*4/5;
    //wrapWidthPassages                   = screen_width/2;
    //
    // x axis starting point for passages (not applicable for image-based studies)
    //xAxisCenterPassages                 =  -screen_width/4;
    //
    // x axis starting point for other text (questions, instructions)
    //xAxisCenter                         = -screen_width * 2/5;
    //
    // screen scale instructions positions
    //topScreenInstruction                = screen_height * 3/10;
    //bottomScreenInstruction             = -screen_height * 3/10;
    //
    // question text positions 
    //questionsXaxis                      = -screen_width*45/100;     // horizontal alignment of text during comprehension/feedback/demographic questions
    //questionsTopYaxis                   = screen_height*10/100;     // vertical position of the actual question text (e.g. What is the main idea of the passage?)
    //questionsBottomYaxis                = -screen_height*35/100;    // vertical position of question-related instructions (press space, press button etc.)
    //
    // slider positions and size (radio button slider positions)
    //sliderPosition                      = [-screen_width*45/100, -screen_height*10/100];
    //sliderSize                          = [screen_width*1/100, screen_height*26/100];       // slider size, do not change this unless you know what you are doing
    //sliderPositionPreference            = [sliderPosition[0], preference_slider_y]
    //
    // slider colors 
    //colBlack                            = new util.Color('black');
    //colWhite                            = new util.Color('black');
    //sliderLineLabelColor                = colBlack;
    //sliderMarkerColor                   = colWhite;
    //
    // textbox position and size (demographics)
    //textboxSize                         = [screen_width * 2/5, screen_height*7.5/100];
    //textboxPosition                     = [xAxisCenter, 0];
    //
    //console.log("screen_width",screen_width,"screen_height",screen_height);
    //console.log("wrapwidthText",wrapWidthText,"xAxis",xAxisCenter);
    //console.log("wrapwidthPass",wrapWidthPassages,"xAxisPass",xAxisCenterPassages) ;
    //
    // next button size and position
    //buttonWidth                         = screen_width/10;
    //buttonHeight                        = screen_height/10;
    //
    //buttonX                             = screen_width * 4/10;
    //buttonY                             = 0-(screen_height * 4/10);
    //
    // password textbox parameters
    //textboxSize                         = [screen_width * 2/5, screen_height*7.5/100];
    //textboxPosition                     = [xAxisCenter, 0];
    //
    // memory test variables, list position
    //listx = screen_width/10;
    //
    // clock
    //myClock                             = new util.Clock();
    //
    // initialize passage index order list 
    //passageSetOrder                     = [];
    //questionReactionTime                = [];
    //
    //
    //console.log('passed initialization')
    psychoJS.experiment.dataFileName = (("." + "/") + `data/${registeryName}_${expName}_${expInfo["date"]}`);
    // PARTICIPANT REGISTRY VARIABLES
    
    // get a random subject ID
    participantCode                   = randomIntFromInterval(100000,999999)
    
    // experimental group name
    exp_group                         = "unnamed"
    
    // registered participant name (id + cb_group-if exists)
    expInfo["participant"]            = participantCode.toString() +"_" +cb_group;
    
    // get date and time in a uniform format
    registeryDate                     = util.MonotonicClock.getDateStr()
    
    // format registry date for a uniform date-time across browsers and OSs
    registeryDate                     = formatDateTime(registeryDate)
    
    // register date
    expInfo["date"]                   = registeryDate
    
    // change data file name
    psychoJS.experiment.dataFileName  = (("." + "/") + `data/${registeryName}_${expName}_${expInfo["date"]}`);
    
    //////////////////////////////////////////////////////////////////////////
    //// DATA REGISTRY VARIABLES (accuracy, rt, date, blocks, trials etc) ////
    //////////////////////////////////////////////////////////////////////////
    totalTrialIterationIndex            = 0;
    data_totalTrialIndex                = [];
    data_dateTime                       = [];
    data_feedbackRating                 = [];
    data_trialType                      = [];
    data_itemID                         = [];
    data_setID                          = [];
    data_passageType                    = [];
    
    data_passageWPM                     = [];
    data_passageRT                      = [];
    data_passageFont                    = [];
    data_passageSpacing                 = [];
    data_passageWordCount               = [];
    data_passageType                    = [];
    data_passageLevel                   = [];
    data_articleSkipType                = [];
    
    data_compAccuracy                   = [];
    data_compChoice                     = [];
    data_surveyRT                       = [];
    
    data_blockName                      = [];
    data_zoomLevel                      = [];
    currentFontType                     = [];
    currentRT                           = [];
    browserZoom                         = [];
    
    
    thisExp = psychoJS.experiment;
    // write trial by trial data
    trialColumNames = ["trialNo","setID","itemID" ,"blockName", "trialType","fontName","linkCondition","articleSkipType","wordCount","passageRT", "wordsPerMinute", "comprehensionAccuracy", "comprehensionChoice","choiceRT","feedbackSurveyRating"];
    
    // add headers right above the data 
    psychoJS.experiment.addData("dateTime", "dateTime")
    psychoJS.experiment.addData(trialColumNames[0], trialColumNames[0]);
    psychoJS.experiment.addData("subid", "subid")
    psychoJS.experiment.addData("gender", "gender")
    psychoJS.experiment.addData("age", "age")
    psychoJS.experiment.addData("counterbalance_group", "counterbalance_group")
    
        for (let columni = 1; columni < trialColumNames.length; columni++) {
            // loop over trialColumnNames and create headers for the datasheet
          psychoJS.experiment.addData(trialColumNames[columni], trialColumNames[columni]);
        }
    
    psychoJS.experiment.addData("X_Scale", "X_Scale");
    psychoJS.experiment.addData("Y_Scale", "Y_Scale");
    psychoJS.experiment.addData("IsFullScreen", "IsFullScreen");
    psychoJS.experiment.addData("window_width", "window_width");
    psychoJS.experiment.addData("window_height", "window_height");
    psychoJS.experiment.addData("browser", "browser");
    psychoJS.experiment.addData("browserZoomLevel", "browserZoomLevel");
    psychoJS.experiment.nextEntry();
    
    // keep track of which components have finished
    initializeComponents = [];
    
    for (const thisComponent of initializeComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function initializeRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'initialize' ---
    // get current time
    t = initializeClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of initializeComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function initializeRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'initialize' ---
    for (const thisComponent of initializeComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // the Routine "initialize" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var preCheckScreenComponents;
function preCheckScreenRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'preCheckScreen' ---
    t = 0;
    preCheckScreenClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(15.000000);
    // update component parameters for each repeat
    waitForCalibration_2.setColor(new util.Color(textColor));
    waitForCalibration_2.setFont(textFont);
    waitForCalibration_2.setHeight(instructionTextSize);
    // Run 'Begin Routine' code from code_10
    console.log("calibration text screen");
    
    // keep track of which components have finished
    preCheckScreenComponents = [];
    preCheckScreenComponents.push(waitForCalibration_2);
    
    for (const thisComponent of preCheckScreenComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


var frameRemains;
function preCheckScreenRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'preCheckScreen' ---
    // get current time
    t = preCheckScreenClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *waitForCalibration_2* updates
    if (t >= 0.0 && waitForCalibration_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      waitForCalibration_2.tStart = t;  // (not accounting for frame time here)
      waitForCalibration_2.frameNStart = frameN;  // exact frame index
      
      waitForCalibration_2.setAutoDraw(true);
    }

    frameRemains = 15  - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((waitForCalibration_2.status === PsychoJS.Status.STARTED || waitForCalibration_2.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      waitForCalibration_2.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of preCheckScreenComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function preCheckScreenRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'preCheckScreen' ---
    for (const thisComponent of preCheckScreenComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var set_file_check;
function set_file_checkLoopBegin(set_file_checkLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    set_file_check = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: TrialHandler.importConditions(psychoJS.serverManager, 'stimuli/stimulus_set.xlsx', '0:7'),
      seed: undefined, name: 'set_file_check'
    });
    psychoJS.experiment.addLoop(set_file_check); // add the loop to the experiment
    currentLoop = set_file_check;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisSet_file_check of set_file_check) {
      snapshot = set_file_check.getSnapshot();
      set_file_checkLoopScheduler.add(importConditions(snapshot));
      const get_fontsLoopScheduler = new Scheduler(psychoJS);
      set_file_checkLoopScheduler.add(get_fontsLoopBegin(get_fontsLoopScheduler, snapshot));
      set_file_checkLoopScheduler.add(get_fontsLoopScheduler);
      set_file_checkLoopScheduler.add(get_fontsLoopEnd);
      set_file_checkLoopScheduler.add(set_file_checkLoopEndIteration(set_file_checkLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


var get_fonts;
function get_fontsLoopBegin(get_fontsLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    get_fonts = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'blocks/blocks_1.xlsx',
      seed: undefined, name: 'get_fonts'
    });
    psychoJS.experiment.addLoop(get_fonts); // add the loop to the experiment
    currentLoop = get_fonts;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisGet_font of get_fonts) {
      snapshot = get_fonts.getSnapshot();
      get_fontsLoopScheduler.add(importConditions(snapshot));
      get_fontsLoopScheduler.add(merge_fontsRoutineBegin(snapshot));
      get_fontsLoopScheduler.add(merge_fontsRoutineEachFrame());
      get_fontsLoopScheduler.add(merge_fontsRoutineEnd(snapshot));
      const loop_fontsLoopScheduler = new Scheduler(psychoJS);
      get_fontsLoopScheduler.add(loop_fontsLoopBegin(loop_fontsLoopScheduler, snapshot));
      get_fontsLoopScheduler.add(loop_fontsLoopScheduler);
      get_fontsLoopScheduler.add(loop_fontsLoopEnd);
      get_fontsLoopScheduler.add(get_fontsLoopEndIteration(get_fontsLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


var loop_fonts;
function loop_fontsLoopBegin(loop_fontsLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    loop_fonts = new TrialHandler({
      psychoJS: psychoJS,
      nReps: fontCount, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'loop_fonts'
    });
    psychoJS.experiment.addLoop(loop_fonts); // add the loop to the experiment
    currentLoop = loop_fonts;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisLoop_font of loop_fonts) {
      snapshot = loop_fonts.getSnapshot();
      loop_fontsLoopScheduler.add(importConditions(snapshot));
      const loop_spacingsLoopScheduler = new Scheduler(psychoJS);
      loop_fontsLoopScheduler.add(loop_spacingsLoopBegin(loop_spacingsLoopScheduler, snapshot));
      loop_fontsLoopScheduler.add(loop_spacingsLoopScheduler);
      loop_fontsLoopScheduler.add(loop_spacingsLoopEnd);
      loop_fontsLoopScheduler.add(loop_fontsLoopEndIteration(loop_fontsLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


var loop_spacings;
function loop_spacingsLoopBegin(loop_spacingsLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    loop_spacings = new TrialHandler({
      psychoJS: psychoJS,
      nReps: linkCount, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'loop_spacings'
    });
    psychoJS.experiment.addLoop(loop_spacings); // add the loop to the experiment
    currentLoop = loop_spacings;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisLoop_spacing of loop_spacings) {
      snapshot = loop_spacings.getSnapshot();
      loop_spacingsLoopScheduler.add(importConditions(snapshot));
      const screensLoopScheduler = new Scheduler(psychoJS);
      loop_spacingsLoopScheduler.add(screensLoopBegin(screensLoopScheduler, snapshot));
      loop_spacingsLoopScheduler.add(screensLoopScheduler);
      loop_spacingsLoopScheduler.add(screensLoopEnd);
      loop_spacingsLoopScheduler.add(loop_spacingsLoopEndIteration(loop_spacingsLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


var screens;
function screensLoopBegin(screensLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    screens = new TrialHandler({
      psychoJS: psychoJS,
      nReps: screenCount, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'screens'
    });
    psychoJS.experiment.addLoop(screens); // add the loop to the experiment
    currentLoop = screens;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisScreen of screens) {
      snapshot = screens.getSnapshot();
      screensLoopScheduler.add(importConditions(snapshot));
      screensLoopScheduler.add(checkResourcesRoutineBegin(snapshot));
      screensLoopScheduler.add(checkResourcesRoutineEachFrame());
      screensLoopScheduler.add(checkResourcesRoutineEnd(snapshot));
      screensLoopScheduler.add(screensLoopEndIteration(screensLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function screensLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(screens);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function screensLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      }
    return Scheduler.Event.NEXT;
    }
  };
}


async function loop_spacingsLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(loop_spacings);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function loop_spacingsLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      }
    return Scheduler.Event.NEXT;
    }
  };
}


async function loop_fontsLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(loop_fonts);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function loop_fontsLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      }
    return Scheduler.Event.NEXT;
    }
  };
}


async function get_fontsLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(get_fonts);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function get_fontsLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      }
    return Scheduler.Event.NEXT;
    }
  };
}


async function set_file_checkLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(set_file_check);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function set_file_checkLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var screenScaleTrials;
function screenScaleTrialsLoopBegin(screenScaleTrialsLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    screenScaleTrials = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 2, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'screenScaleTrials'
    });
    psychoJS.experiment.addLoop(screenScaleTrials); // add the loop to the experiment
    currentLoop = screenScaleTrials;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisScreenScaleTrial of screenScaleTrials) {
      snapshot = screenScaleTrials.getSnapshot();
      screenScaleTrialsLoopScheduler.add(importConditions(snapshot));
      screenScaleTrialsLoopScheduler.add(creditCardInstructionsRoutineBegin(snapshot));
      screenScaleTrialsLoopScheduler.add(creditCardInstructionsRoutineEachFrame());
      screenScaleTrialsLoopScheduler.add(creditCardInstructionsRoutineEnd(snapshot));
      screenScaleTrialsLoopScheduler.add(screenScaleRoutineBegin(snapshot));
      screenScaleTrialsLoopScheduler.add(screenScaleRoutineEachFrame());
      screenScaleTrialsLoopScheduler.add(screenScaleRoutineEnd(snapshot));
      screenScaleTrialsLoopScheduler.add(scaleBlankRoutineBegin(snapshot));
      screenScaleTrialsLoopScheduler.add(scaleBlankRoutineEachFrame());
      screenScaleTrialsLoopScheduler.add(scaleBlankRoutineEnd(snapshot));
      screenScaleTrialsLoopScheduler.add(screenScaleTrialsLoopEndIteration(screenScaleTrialsLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function screenScaleTrialsLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(screenScaleTrials);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function screenScaleTrialsLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var stimulus_listD;
function stimulus_listDLoopBegin(stimulus_listDLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    stimulus_listD = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: TrialHandler.importConditions(psychoJS.serverManager, 'stimuli/demographics.xlsx', '0'),
      seed: undefined, name: 'stimulus_listD'
    });
    psychoJS.experiment.addLoop(stimulus_listD); // add the loop to the experiment
    currentLoop = stimulus_listD;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisStimulus_listD of stimulus_listD) {
      snapshot = stimulus_listD.getSnapshot();
      stimulus_listDLoopScheduler.add(importConditions(snapshot));
      stimulus_listDLoopScheduler.add(setTrialParametersDemographicRoutineBegin(snapshot));
      stimulus_listDLoopScheduler.add(setTrialParametersDemographicRoutineEachFrame());
      stimulus_listDLoopScheduler.add(setTrialParametersDemographicRoutineEnd(snapshot));
      stimulus_listDLoopScheduler.add(demographicInstructionsRoutineRoutineBegin(snapshot));
      stimulus_listDLoopScheduler.add(demographicInstructionsRoutineRoutineEachFrame());
      stimulus_listDLoopScheduler.add(demographicInstructionsRoutineRoutineEnd(snapshot));
      const textbox_trialsLoopScheduler = new Scheduler(psychoJS);
      stimulus_listDLoopScheduler.add(textbox_trialsLoopBegin(textbox_trialsLoopScheduler, snapshot));
      stimulus_listDLoopScheduler.add(textbox_trialsLoopScheduler);
      stimulus_listDLoopScheduler.add(textbox_trialsLoopEnd);
      stimulus_listDLoopScheduler.add(stimulus_listDLoopEndIteration(stimulus_listDLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


var textbox_trials;
function textbox_trialsLoopBegin(textbox_trialsLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    textbox_trials = new TrialHandler({
      psychoJS: psychoJS,
      nReps: textboxCount, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'textbox_trials'
    });
    psychoJS.experiment.addLoop(textbox_trials); // add the loop to the experiment
    currentLoop = textbox_trials;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisTextbox_trial of textbox_trials) {
      snapshot = textbox_trials.getSnapshot();
      textbox_trialsLoopScheduler.add(importConditions(snapshot));
      textbox_trialsLoopScheduler.add(textBoxQuestionsRoutineBegin(snapshot));
      textbox_trialsLoopScheduler.add(textBoxQuestionsRoutineEachFrame());
      textbox_trialsLoopScheduler.add(textBoxQuestionsRoutineEnd(snapshot));
      textbox_trialsLoopScheduler.add(textbox_trialsLoopEndIteration(textbox_trialsLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function textbox_trialsLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(textbox_trials);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function textbox_trialsLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


async function stimulus_listDLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(stimulus_listD);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function stimulus_listDLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var snellen_trials;
function snellen_trialsLoopBegin(snellen_trialsLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    snellen_trials = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 4, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'snellen_trials'
    });
    psychoJS.experiment.addLoop(snellen_trials); // add the loop to the experiment
    currentLoop = snellen_trials;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisSnellen_trial of snellen_trials) {
      snapshot = snellen_trials.getSnapshot();
      snellen_trialsLoopScheduler.add(importConditions(snapshot));
      snellen_trialsLoopScheduler.add(pre_snellenRoutineBegin(snapshot));
      snellen_trialsLoopScheduler.add(pre_snellenRoutineEachFrame());
      snellen_trialsLoopScheduler.add(pre_snellenRoutineEnd(snapshot));
      snellen_trialsLoopScheduler.add(snellen_instructionsRoutineBegin(snapshot));
      snellen_trialsLoopScheduler.add(snellen_instructionsRoutineEachFrame());
      snellen_trialsLoopScheduler.add(snellen_instructionsRoutineEnd(snapshot));
      snellen_trialsLoopScheduler.add(snellen_testRoutineBegin(snapshot));
      snellen_trialsLoopScheduler.add(snellen_testRoutineEachFrame());
      snellen_trialsLoopScheduler.add(snellen_testRoutineEnd(snapshot));
      snellen_trialsLoopScheduler.add(waitPopupRoutineBegin(snapshot));
      snellen_trialsLoopScheduler.add(waitPopupRoutineEachFrame());
      snellen_trialsLoopScheduler.add(waitPopupRoutineEnd(snapshot));
      snellen_trialsLoopScheduler.add(snellen_trialsLoopEndIteration(snellen_trialsLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function snellen_trialsLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(snellen_trials);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function snellen_trialsLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var memory_trials;
function memory_trialsLoopBegin(memory_trialsLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    memory_trials = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'stimuli/memory/memory_stimulus_sheet.xlsx',
      seed: undefined, name: 'memory_trials'
    });
    psychoJS.experiment.addLoop(memory_trials); // add the loop to the experiment
    currentLoop = memory_trials;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisMemory_trial of memory_trials) {
      snapshot = memory_trials.getSnapshot();
      memory_trialsLoopScheduler.add(importConditions(snapshot));
      memory_trialsLoopScheduler.add(memory_initializeRoutineBegin(snapshot));
      memory_trialsLoopScheduler.add(memory_initializeRoutineEachFrame());
      memory_trialsLoopScheduler.add(memory_initializeRoutineEnd(snapshot));
      memory_trialsLoopScheduler.add(memory_specific_instructionsRoutineBegin(snapshot));
      memory_trialsLoopScheduler.add(memory_specific_instructionsRoutineEachFrame());
      memory_trialsLoopScheduler.add(memory_specific_instructionsRoutineEnd(snapshot));
      memory_trialsLoopScheduler.add(memory_display_listRoutineBegin(snapshot));
      memory_trialsLoopScheduler.add(memory_display_listRoutineEachFrame());
      memory_trialsLoopScheduler.add(memory_display_listRoutineEnd(snapshot));
      const memory_answer_loopLoopScheduler = new Scheduler(psychoJS);
      memory_trialsLoopScheduler.add(memory_answer_loopLoopBegin(memory_answer_loopLoopScheduler, snapshot));
      memory_trialsLoopScheduler.add(memory_answer_loopLoopScheduler);
      memory_trialsLoopScheduler.add(memory_answer_loopLoopEnd);
      memory_trialsLoopScheduler.add(memory_trialsLoopEndIteration(memory_trialsLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


var memory_answer_loop;
function memory_answer_loopLoopBegin(memory_answer_loopLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    memory_answer_loop = new TrialHandler({
      psychoJS: psychoJS,
      nReps: answerCount, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'memory_answer_loop'
    });
    psychoJS.experiment.addLoop(memory_answer_loop); // add the loop to the experiment
    currentLoop = memory_answer_loop;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisMemory_answer_loop of memory_answer_loop) {
      snapshot = memory_answer_loop.getSnapshot();
      memory_answer_loopLoopScheduler.add(importConditions(snapshot));
      memory_answer_loopLoopScheduler.add(memory_responseRoutineBegin(snapshot));
      memory_answer_loopLoopScheduler.add(memory_responseRoutineEachFrame());
      memory_answer_loopLoopScheduler.add(memory_responseRoutineEnd(snapshot));
      memory_answer_loopLoopScheduler.add(memory_intervalRoutineBegin(snapshot));
      memory_answer_loopLoopScheduler.add(memory_intervalRoutineEachFrame());
      memory_answer_loopLoopScheduler.add(memory_intervalRoutineEnd(snapshot));
      memory_answer_loopLoopScheduler.add(memory_answer_loopLoopEndIteration(memory_answer_loopLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function memory_answer_loopLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(memory_answer_loop);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function memory_answer_loopLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


async function memory_trialsLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(memory_trials);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function memory_trialsLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var blocks;
function blocksLoopBegin(blocksLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    blocks = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'blocks/blocks_1.xlsx',
      seed: undefined, name: 'blocks'
    });
    psychoJS.experiment.addLoop(blocks); // add the loop to the experiment
    currentLoop = blocks;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisBlock of blocks) {
      snapshot = blocks.getSnapshot();
      blocksLoopScheduler.add(importConditions(snapshot));
      blocksLoopScheduler.add(setBlockParametersRoutineBegin(snapshot));
      blocksLoopScheduler.add(setBlockParametersRoutineEachFrame());
      blocksLoopScheduler.add(setBlockParametersRoutineEnd(snapshot));
      const stimulus_listLoopScheduler = new Scheduler(psychoJS);
      blocksLoopScheduler.add(stimulus_listLoopBegin(stimulus_listLoopScheduler, snapshot));
      blocksLoopScheduler.add(stimulus_listLoopScheduler);
      blocksLoopScheduler.add(stimulus_listLoopEnd);
      blocksLoopScheduler.add(blocksLoopEndIteration(blocksLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


var stimulus_list;
function stimulus_listLoopBegin(stimulus_listLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    stimulus_list = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: TrialHandler.importConditions(psychoJS.serverManager, stimulus_file_counterbalanced, passageSetOrder),
      seed: undefined, name: 'stimulus_list'
    });
    psychoJS.experiment.addLoop(stimulus_list); // add the loop to the experiment
    currentLoop = stimulus_list;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisStimulus_list of stimulus_list) {
      snapshot = stimulus_list.getSnapshot();
      stimulus_listLoopScheduler.add(importConditions(snapshot));
      stimulus_listLoopScheduler.add(setTrialParametersRoutineBegin(snapshot));
      stimulus_listLoopScheduler.add(setTrialParametersRoutineEachFrame());
      stimulus_listLoopScheduler.add(setTrialParametersRoutineEnd(snapshot));
      const word_list_loopLoopScheduler = new Scheduler(psychoJS);
      stimulus_listLoopScheduler.add(word_list_loopLoopBegin(word_list_loopLoopScheduler, snapshot));
      stimulus_listLoopScheduler.add(word_list_loopLoopScheduler);
      stimulus_listLoopScheduler.add(word_list_loopLoopEnd);
      stimulus_listLoopScheduler.add(instruction_proxyRoutineBegin(snapshot));
      stimulus_listLoopScheduler.add(instruction_proxyRoutineEachFrame());
      stimulus_listLoopScheduler.add(instruction_proxyRoutineEnd(snapshot));
      const first_textbox_trialsLoopScheduler = new Scheduler(psychoJS);
      stimulus_listLoopScheduler.add(first_textbox_trialsLoopBegin(first_textbox_trialsLoopScheduler, snapshot));
      stimulus_listLoopScheduler.add(first_textbox_trialsLoopScheduler);
      stimulus_listLoopScheduler.add(first_textbox_trialsLoopEnd);
      stimulus_listLoopScheduler.add(instructions_passageRoutineBegin(snapshot));
      stimulus_listLoopScheduler.add(instructions_passageRoutineEachFrame());
      stimulus_listLoopScheduler.add(instructions_passageRoutineEnd(snapshot));
      const popup_loopLoopScheduler = new Scheduler(psychoJS);
      stimulus_listLoopScheduler.add(popup_loopLoopBegin(popup_loopLoopScheduler, snapshot));
      stimulus_listLoopScheduler.add(popup_loopLoopScheduler);
      stimulus_listLoopScheduler.add(popup_loopLoopEnd);
      stimulus_listLoopScheduler.add(instructions_questionsRoutineBegin(snapshot));
      stimulus_listLoopScheduler.add(instructions_questionsRoutineEachFrame());
      stimulus_listLoopScheduler.add(instructions_questionsRoutineEnd(snapshot));
      const question_trialsLoopScheduler = new Scheduler(psychoJS);
      stimulus_listLoopScheduler.add(question_trialsLoopBegin(question_trialsLoopScheduler, snapshot));
      stimulus_listLoopScheduler.add(question_trialsLoopScheduler);
      stimulus_listLoopScheduler.add(question_trialsLoopEnd);
      const feedback_trialsLoopScheduler = new Scheduler(psychoJS);
      stimulus_listLoopScheduler.add(feedback_trialsLoopBegin(feedback_trialsLoopScheduler, snapshot));
      stimulus_listLoopScheduler.add(feedback_trialsLoopScheduler);
      stimulus_listLoopScheduler.add(feedback_trialsLoopEnd);
      stimulus_listLoopScheduler.add(findFastestRoutineBegin(snapshot));
      stimulus_listLoopScheduler.add(findFastestRoutineEachFrame());
      stimulus_listLoopScheduler.add(findFastestRoutineEnd(snapshot));
      stimulus_listLoopScheduler.add(stimulus_listLoopEndIteration(stimulus_listLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


var word_list_loop;
function word_list_loopLoopBegin(word_list_loopLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    word_list_loop = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: linksheet,
      seed: undefined, name: 'word_list_loop'
    });
    psychoJS.experiment.addLoop(word_list_loop); // add the loop to the experiment
    currentLoop = word_list_loop;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisWord_list_loop of word_list_loop) {
      snapshot = word_list_loop.getSnapshot();
      word_list_loopLoopScheduler.add(importConditions(snapshot));
      word_list_loopLoopScheduler.add(getWordsRoutineBegin(snapshot));
      word_list_loopLoopScheduler.add(getWordsRoutineEachFrame());
      word_list_loopLoopScheduler.add(getWordsRoutineEnd(snapshot));
      word_list_loopLoopScheduler.add(word_list_loopLoopEndIteration(word_list_loopLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function word_list_loopLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(word_list_loop);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function word_list_loopLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var first_textbox_trials;
function first_textbox_trialsLoopBegin(first_textbox_trialsLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    first_textbox_trials = new TrialHandler({
      psychoJS: psychoJS,
      nReps: proxyCount, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'first_textbox_trials'
    });
    psychoJS.experiment.addLoop(first_textbox_trials); // add the loop to the experiment
    currentLoop = first_textbox_trials;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisFirst_textbox_trial of first_textbox_trials) {
      snapshot = first_textbox_trials.getSnapshot();
      first_textbox_trialsLoopScheduler.add(importConditions(snapshot));
      first_textbox_trialsLoopScheduler.add(trial_textboxRoutineBegin(snapshot));
      first_textbox_trialsLoopScheduler.add(trial_textboxRoutineEachFrame());
      first_textbox_trialsLoopScheduler.add(trial_textboxRoutineEnd(snapshot));
      first_textbox_trialsLoopScheduler.add(first_textbox_trialsLoopEndIteration(first_textbox_trialsLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function first_textbox_trialsLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(first_textbox_trials);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function first_textbox_trialsLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var popup_loop;
function popup_loopLoopBegin(popup_loopLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    popup_loop = new TrialHandler({
      psychoJS: psychoJS,
      nReps: loopCount, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'popup_loop'
    });
    psychoJS.experiment.addLoop(popup_loop); // add the loop to the experiment
    currentLoop = popup_loop;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisPopup_loop of popup_loop) {
      snapshot = popup_loop.getSnapshot();
      popup_loopLoopScheduler.add(importConditions(snapshot));
      popup_loopLoopScheduler.add(displayArticleRoutineBegin(snapshot));
      popup_loopLoopScheduler.add(displayArticleRoutineEachFrame());
      popup_loopLoopScheduler.add(displayArticleRoutineEnd(snapshot));
      const popup_selectionLoopScheduler = new Scheduler(psychoJS);
      popup_loopLoopScheduler.add(popup_selectionLoopBegin(popup_selectionLoopScheduler, snapshot));
      popup_loopLoopScheduler.add(popup_selectionLoopScheduler);
      popup_loopLoopScheduler.add(popup_selectionLoopEnd);
      popup_loopLoopScheduler.add(waitPopupRoutineBegin(snapshot));
      popup_loopLoopScheduler.add(waitPopupRoutineEachFrame());
      popup_loopLoopScheduler.add(waitPopupRoutineEnd(snapshot));
      popup_loopLoopScheduler.add(popup_loopLoopEndIteration(popup_loopLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


var popup_selection;
function popup_selectionLoopBegin(popup_selectionLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    popup_selection = new TrialHandler({
      psychoJS: psychoJS,
      nReps: enablePopup, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: TrialHandler.importConditions(psychoJS.serverManager, linksheet, popupIndex),
      seed: undefined, name: 'popup_selection'
    });
    psychoJS.experiment.addLoop(popup_selection); // add the loop to the experiment
    currentLoop = popup_selection;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisPopup_selection of popup_selection) {
      snapshot = popup_selection.getSnapshot();
      popup_selectionLoopScheduler.add(importConditions(snapshot));
      popup_selectionLoopScheduler.add(displayPopupRoutineBegin(snapshot));
      popup_selectionLoopScheduler.add(displayPopupRoutineEachFrame());
      popup_selectionLoopScheduler.add(displayPopupRoutineEnd(snapshot));
      popup_selectionLoopScheduler.add(popup_selectionLoopEndIteration(popup_selectionLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function popup_selectionLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(popup_selection);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function popup_selectionLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


async function popup_loopLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(popup_loop);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function popup_loopLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var question_trials;
function question_trialsLoopBegin(question_trialsLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    question_trials = new TrialHandler({
      psychoJS: psychoJS,
      nReps: questionCount, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'question_trials'
    });
    psychoJS.experiment.addLoop(question_trials); // add the loop to the experiment
    currentLoop = question_trials;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisQuestion_trial of question_trials) {
      snapshot = question_trials.getSnapshot();
      question_trialsLoopScheduler.add(importConditions(snapshot));
      question_trialsLoopScheduler.add(displayQuestionsRoutineBegin(snapshot));
      question_trialsLoopScheduler.add(displayQuestionsRoutineEachFrame());
      question_trialsLoopScheduler.add(displayQuestionsRoutineEnd(snapshot));
      question_trialsLoopScheduler.add(question_trialsLoopEndIteration(question_trialsLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function question_trialsLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(question_trials);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function question_trialsLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var feedback_trials;
function feedback_trialsLoopBegin(feedback_trialsLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    feedback_trials = new TrialHandler({
      psychoJS: psychoJS,
      nReps: feedbackCount, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'feedback_trials'
    });
    psychoJS.experiment.addLoop(feedback_trials); // add the loop to the experiment
    currentLoop = feedback_trials;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisFeedback_trial of feedback_trials) {
      snapshot = feedback_trials.getSnapshot();
      feedback_trialsLoopScheduler.add(importConditions(snapshot));
      feedback_trialsLoopScheduler.add(displayFeedbackSurveyRoutineBegin(snapshot));
      feedback_trialsLoopScheduler.add(displayFeedbackSurveyRoutineEachFrame());
      feedback_trialsLoopScheduler.add(displayFeedbackSurveyRoutineEnd(snapshot));
      feedback_trialsLoopScheduler.add(feedback_trialsLoopEndIteration(feedback_trialsLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function feedback_trialsLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(feedback_trials);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function feedback_trialsLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      }
    return Scheduler.Event.NEXT;
    }
  };
}


async function stimulus_listLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(stimulus_list);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function stimulus_listLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


async function blocksLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(blocks);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function blocksLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var post_engagement_loop;
function post_engagement_loopLoopBegin(post_engagement_loopLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    post_engagement_loop = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 6, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'post_engagement_loop'
    });
    psychoJS.experiment.addLoop(post_engagement_loop); // add the loop to the experiment
    currentLoop = post_engagement_loop;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisPost_engagement_loop of post_engagement_loop) {
      snapshot = post_engagement_loop.getSnapshot();
      post_engagement_loopLoopScheduler.add(importConditions(snapshot));
      post_engagement_loopLoopScheduler.add(post_engagementRoutineBegin(snapshot));
      post_engagement_loopLoopScheduler.add(post_engagementRoutineEachFrame());
      post_engagement_loopLoopScheduler.add(post_engagementRoutineEnd(snapshot));
      post_engagement_loopLoopScheduler.add(post_engagement_loopLoopEndIteration(post_engagement_loopLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function post_engagement_loopLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(post_engagement_loop);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function post_engagement_loopLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var post_survey_loop;
function post_survey_loopLoopBegin(post_survey_loopLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    post_survey_loop = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 5, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'post_survey_loop'
    });
    psychoJS.experiment.addLoop(post_survey_loop); // add the loop to the experiment
    currentLoop = post_survey_loop;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisPost_survey_loop of post_survey_loop) {
      snapshot = post_survey_loop.getSnapshot();
      post_survey_loopLoopScheduler.add(importConditions(snapshot));
      post_survey_loopLoopScheduler.add(displayDemographicQuestionsRoutineBegin(snapshot));
      post_survey_loopLoopScheduler.add(displayDemographicQuestionsRoutineEachFrame());
      post_survey_loopLoopScheduler.add(displayDemographicQuestionsRoutineEnd(snapshot));
      post_survey_loopLoopScheduler.add(post_survey_loopLoopEndIteration(post_survey_loopLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function post_survey_loopLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(post_survey_loop);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function post_survey_loopLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var testFonts;
var testSpacings;
var practiceFonts;
var allFonts;
var fontCount;
var screenCount;
var linkLabels;
var practiceLink;
var linkCount;
var spacingCount;
var spacingLabels;
var spacingLevels;
var merge_fontsComponents;
function merge_fontsRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'merge_fonts' ---
    t = 0;
    merge_fontsClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    /*bewary: this loop only uses the first row of "blocks_file.xlsx".
    Therefore, font names and labels should be specified within that first row. 
    Please adjust the "Selected Rows" value of this loop if it is not suitable for your design.*/
    
    /* below code extracts font names from the excel file
    these names are then used for creating variables for the database */
    testFonts = thisGet_font["testFonts"]
    
    /* split font names and labels by ";" */ 
    testFonts = testFonts.split(";")   
    
    /* extracts spacing levels from the blocks excel file */
    testSpacings = thisGet_font["testSpacings"]
    
    /* split spacing levels by ";" */ 
    testSpacings = testSpacings.split(";")   
    
    /* get practice font and convert to string - split ddoes that for above */
    practiceFonts = String(thisGet_font["practiceFonts"]);
    /* add practice font to fonts to be tested */ 
    testFonts.unshift(practiceFonts);
    
    /* store all fonts to a variable */
    allFonts = testFonts
    console.log('test fonts: ', testFonts)
    console.log('practice fonts: ', practiceFonts)
    console.log('all fonts: ', allFonts)
    
    /* count of fonts in the study */ 
    fontCount = allFonts.length
    
    /* get how many screens a passage is split to */
    //screenCount = thisSet_file_check["trialproperties"]
    //screenCount = screenCount.split(";") 
    screenCount = 1
    /* get the passage count number from stimulus sheet */
    //screenCount = getItemCount(screenCount)
    console.log('screen count', screenCount)
    
    // initialize link conditions 
    linkLabels                      = ['Link','NoLink']
    practiceLink                    = ['NoLink']
    linkCount                       = linkLabels.length
    
    
    spacingCount = testSpacings.length;
    spacingLabels = {};
    spacingLevels = [];
    /* below creates a dictionary to convert spacing levels in blocks file 
    to standardized spacing levels. Standardized ones used for naming images 
    and using them for display. Actual levels will be registered to sheet */
    for (var fi = 0; fi < spacingCount; fi++){
        spacingLevels.push("sp"+(fi+1).toString())
        spacingLabels[testSpacings[fi]] = spacingLevels[fi]
        }
    
    
    /* print out spacing labels */
    
    console.log('spacing labels: ', spacingLabels)
    // keep track of which components have finished
    merge_fontsComponents = [];
    
    for (const thisComponent of merge_fontsComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function merge_fontsRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'merge_fonts' ---
    // get current time
    t = merge_fontsClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of merge_fontsComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function merge_fontsRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'merge_fonts' ---
    for (const thisComponent of merge_fontsComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // the Routine "merge_fonts" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var currentFont;
var currentSpacing;
var currentLink;
var iterationString;
var passageIdentifier;
var itemIDIdentifier;
var setID;
var itemID;
var trialType;
var checkResourcesComponents;
function checkResourcesRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'checkResources' ---
    t = 0;
    checkResourcesClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    fontIteration       = fontIteration+1
    // call font to be displayed in this trial
    currentFont         = allFonts[loop_fonts.thisN]
    // call spacing to be displayed in this trial 
    currentSpacing      = testSpacings[loop_spacings.thisN];
    // call spacing label 
    currentLink         = linkLabels[loop_spacings.thisN];
    //console.log('currentSize', currentFontSize);
    //console.log('currentFont', currentFont)
    //console.log('current spacing: ', currentSpacing)
    // create the excel column name that represents the current passage text
    iterationString     = (screens.thisN+1).toString()
    
    passageIdentifier   = 'art1text'
    itemIDIdentifier    = 'art1ID'
    
    //what is the set ID
    setID               = thisSet_file_check["setID"]
    // what is the passage ID (RX00001a etc.)
    itemID              = thisSet_file_check[itemIDIdentifier];
    // get trial type
    trialType           = thisSet_file_check["trialType"];
    
    if ((currentLink === 'NoLink') && (currentFont === 'Open Sans')  || (trialType === 'test') && (currentFont === 'Open Sans') ||(trialType === 'practice') && ((currentFont === 'Georgia') || (currentFont === 'Roboto') ||(currentFont === 'Times')) ){
            console.log('pass this image: ', setID+'_'+currentFont+'_'+currentLink+'.jpg')
            continueRoutine = false
        } else {
                console.log('test this image: ', setID+'_'+currentFont+'_'+currentLink+'.jpg')
                currentArticleImage = 'stimuli/article_images/'+setID+'_'+currentFont+'_'+currentLink+'.jpg'
            }
        
        
    passageImage_2.setPos([0, 0]);
    passageImage_2.setImage(currentArticleImage);
    waitForCalibration.setColor(new util.Color(textColor));
    waitForCalibration.setFont(textFont);
    waitForCalibration.setHeight(instructionTextSize);
    // keep track of which components have finished
    checkResourcesComponents = [];
    checkResourcesComponents.push(passageImage_2);
    checkResourcesComponents.push(waitForCalibration);
    
    for (const thisComponent of checkResourcesComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function checkResourcesRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'checkResources' ---
    // get current time
    t = checkResourcesClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *passageImage_2* updates
    if (t >= 0 && passageImage_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      passageImage_2.tStart = t;  // (not accounting for frame time here)
      passageImage_2.frameNStart = frameN;  // exact frame index
      
      passageImage_2.setAutoDraw(true);
    }

    if (passageImage_2.status === PsychoJS.Status.STARTED && frameN >= 1) {
      passageImage_2.setAutoDraw(false);
    }
    
    // *waitForCalibration* updates
    if (t >= 0.0 && waitForCalibration.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      waitForCalibration.tStart = t;  // (not accounting for frame time here)
      waitForCalibration.frameNStart = frameN;  // exact frame index
      
      waitForCalibration.setAutoDraw(true);
    }

    if (waitForCalibration.status === PsychoJS.Status.STARTED && frameN >= 1) {
      waitForCalibration.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of checkResourcesComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function checkResourcesRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'checkResources' ---
    for (const thisComponent of checkResourcesComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // the Routine "checkResources" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var cardInstructions;
var gotValidClick;
var creditCardInstructionsComponents;
function creditCardInstructionsRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'creditCardInstructions' ---
    t = 0;
    creditCardInstructionsClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    if (screenScaleTrials.thisN === 0){
            cardInstructions = "Dear participant,\n\nYou will need to use your credit/debit card and adjust the size of a credit card image in the next step.\n\nYou will be asked to place your credit/debit card onto that image and will use arrow keys for resizing the image. Once the image is the same size as your credit/debit card, press space to confirm. You will do this twice for better measurement.\n\nPlease press the button below to advance to the next page."    
        } else {
            cardInstructions = "Please resize the image once more.\n\nPlease press the button below to advance to the next page."
            }
    
    creditCardInstructionText.setAlignHoriz("left");
    
    creditCardInstructionText.setColor(new util.Color(textColor));
    creditCardInstructionText.setPos([xAxisCenter, 0]);
    creditCardInstructionText.setText(cardInstructions);
    creditCardInstructionText.setHeight(instructionTextSize);
    nextButton_card.setPos([buttonX, buttonY]);
    nextButton_card.setSize([buttonWidth, buttonHeight]);
    // setup some python lists for storing info about the mouseCardInstructions
    // current position of the mouse:
    mouseCardInstructions.x = [];
    mouseCardInstructions.y = [];
    mouseCardInstructions.leftButton = [];
    mouseCardInstructions.midButton = [];
    mouseCardInstructions.rightButton = [];
    mouseCardInstructions.time = [];
    mouseCardInstructions.clicked_name = [];
    gotValidClick = false; // until a click is received
    // keep track of which components have finished
    creditCardInstructionsComponents = [];
    creditCardInstructionsComponents.push(creditCardInstructionText);
    creditCardInstructionsComponents.push(nextButton_card);
    creditCardInstructionsComponents.push(mouseCardInstructions);
    
    for (const thisComponent of creditCardInstructionsComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


var prevButtonState;
var _mouseButtons;
var _mouseXYs;
function creditCardInstructionsRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'creditCardInstructions' ---
    // get current time
    t = creditCardInstructionsClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *creditCardInstructionText* updates
    if (t >= 0 && creditCardInstructionText.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      creditCardInstructionText.tStart = t;  // (not accounting for frame time here)
      creditCardInstructionText.frameNStart = frameN;  // exact frame index
      
      creditCardInstructionText.setAutoDraw(true);
    }

    
    // *nextButton_card* updates
    if (t >= 0.2 && nextButton_card.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      nextButton_card.tStart = t;  // (not accounting for frame time here)
      nextButton_card.frameNStart = frameN;  // exact frame index
      
      nextButton_card.setAutoDraw(true);
    }

    // *mouseCardInstructions* updates
    if (t >= mouseDelayOther && mouseCardInstructions.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouseCardInstructions.tStart = t;  // (not accounting for frame time here)
      mouseCardInstructions.frameNStart = frameN;  // exact frame index
      
      mouseCardInstructions.status = PsychoJS.Status.STARTED;
      mouseCardInstructions.mouseClock.reset();
      prevButtonState = mouseCardInstructions.getPressed();  // if button is down already this ISN'T a new click
      }
    if (mouseCardInstructions.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = mouseCardInstructions.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          for (const obj of [nextButton_card]) {
            if (obj.contains(mouseCardInstructions)) {
              gotValidClick = true;
              mouseCardInstructions.clicked_name.push(obj.name)
            }
          }
          if (gotValidClick === true) { 
            _mouseXYs = mouseCardInstructions.getPos();
            mouseCardInstructions.x.push(_mouseXYs[0]);
            mouseCardInstructions.y.push(_mouseXYs[1]);
            mouseCardInstructions.leftButton.push(_mouseButtons[0]);
            mouseCardInstructions.midButton.push(_mouseButtons[1]);
            mouseCardInstructions.rightButton.push(_mouseButtons[2]);
            mouseCardInstructions.time.push(mouseCardInstructions.mouseClock.getTime());
          }
          if (gotValidClick === true) { // abort routine on response
            continueRoutine = false;
          }
        }
      }
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of creditCardInstructionsComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function creditCardInstructionsRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'creditCardInstructions' ---
    for (const thisComponent of creditCardInstructionsComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // store data for psychoJS.experiment (ExperimentHandler)
    if (mouseCardInstructions.x) {  psychoJS.experiment.addData('mouseCardInstructions.x', mouseCardInstructions.x[0])};
    if (mouseCardInstructions.y) {  psychoJS.experiment.addData('mouseCardInstructions.y', mouseCardInstructions.y[0])};
    if (mouseCardInstructions.leftButton) {  psychoJS.experiment.addData('mouseCardInstructions.leftButton', mouseCardInstructions.leftButton[0])};
    if (mouseCardInstructions.midButton) {  psychoJS.experiment.addData('mouseCardInstructions.midButton', mouseCardInstructions.midButton[0])};
    if (mouseCardInstructions.rightButton) {  psychoJS.experiment.addData('mouseCardInstructions.rightButton', mouseCardInstructions.rightButton[0])};
    if (mouseCardInstructions.time) {  psychoJS.experiment.addData('mouseCardInstructions.time', mouseCardInstructions.time[0])};
    if (mouseCardInstructions.clicked_name) {  psychoJS.experiment.addData('mouseCardInstructions.clicked_name', mouseCardInstructions.clicked_name[0])};
    
    // the Routine "creditCardInstructions" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var ccStart;
var screenScaleComponents;
function screenScaleRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'screenScale' ---
    t = 0;
    screenScaleClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // Run 'Begin Routine' code from scaleCode
    psychoJS.eventManager.clearEvents();
    
    console.log('this n value: ',screenScaleTrials.thisN)
    
    
    oldt = 0;
    ccStart = Date.now();
    x_size = 8.56;
    y_size = 5.398;
    x_size_pix = 640;
    y_size_pix = 401;
    screen_height = 0;
    if ((psychoJS.window.units === "norm")) {
        x_scale = 0.05;
        y_scale = 0.1;
        dbase = 0.0001;
        unittext = " norm units";
        vsize = 2;
    } else {
        if ((psychoJS.window.units === "pix")) {
            x_scale = 60;
            y_scale = 40;
            dbase = 0.1;
            unittext = " pixels";
        } else {
            x_scale = 0.05;
            y_scale = 0.05;
            dbase = 0.0001;
            unittext = " height units";
            vsize = 1;
        }
    }
    console.log((x_size * x_scale), (y_size * y_scale));
    
    
    
    
    textTop.setColor(new util.Color(textColor));
    textTop.setPos([0, topScreenInstruction]);
    textTop.setHeight(20.0);
    textBottom.setColor(new util.Color(textColor));
    textBottom.setPos([0, bottomScreenInstruction]);
    textBottom.setHeight(20.0);
    ccimage.setSize([(x_size * x_scale), (y_size * y_scale)]);
    up_button.setPos([ss_up_buttonX, ss_up_buttonY]);
    up_button.setSize([buttonWidth, buttonHeight]);
    down_button.setPos([ss_up_buttonX, (- ss_up_buttonY)]);
    down_button.setSize([buttonWidth, buttonHeight]);
    left_button.setPos([ss_left_buttonX, ss_right_buttonY]);
    left_button.setSize([buttonWidth, buttonHeight]);
    right_button.setPos([ss_right_buttonX, ss_right_buttonY]);
    right_button.setSize([buttonWidth, buttonHeight]);
    // setup some python lists for storing info about the screenScaleMouse
    // current position of the mouse:
    screenScaleMouse.x = [];
    screenScaleMouse.y = [];
    screenScaleMouse.leftButton = [];
    screenScaleMouse.midButton = [];
    screenScaleMouse.rightButton = [];
    screenScaleMouse.time = [];
    gotValidClick = false; // until a click is received
    // keep track of which components have finished
    screenScaleComponents = [];
    screenScaleComponents.push(textTop);
    screenScaleComponents.push(textBottom);
    screenScaleComponents.push(ccimage);
    screenScaleComponents.push(up_button);
    screenScaleComponents.push(down_button);
    screenScaleComponents.push(left_button);
    screenScaleComponents.push(right_button);
    screenScaleComponents.push(screenScaleMouse);
    
    for (const thisComponent of screenScaleComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


var _pj;
var keys;
var arrowClicked;
var buttonClicked;
var dscale;
function screenScaleRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'screenScale' ---
    // get current time
    t = screenScaleClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // Run 'Each Frame' code from scaleCode
    var _pj;
    var scale_buttons            = {};
    scale_buttons.up_button = {width: up_button._size[1], height: up_button._size[0], x: up_button._pos[0], y: up_button._pos[1]};
    scale_buttons.down_button = {width: down_button._size[1], height: down_button._size[0], x: down_button._pos[0], y: down_button._pos[1]};
    scale_buttons.right_button = {width: right_button._size[0], height: right_button._size[1], x: right_button._pos[0], y: right_button._pos[1]};
    scale_buttons.left_button = {width: left_button._size[0], height: left_button._size[1], x: left_button._pos[0], y: left_button._pos[1]};
    
    function _pj_snippets(container) {
        function in_es6(left, right) {
            if (((right instanceof Array) || ((typeof right) === "string"))) {
                return (right.indexOf(left) > (-1));
            } else {
                if (((right instanceof Map) || (right instanceof Set) || (right instanceof WeakMap) || (right instanceof WeakSet))) {
                    return right.has(left);
                } else {
                    return (left in right);
                }
            }
        }
        container["in_es6"] = in_es6;
        return container;
    }
    
    function has_clicked_arrow() {
        
    }
    _pj = {};
    _pj_snippets(_pj);
    keys = psychoJS.eventManager.getKeys();
    arrowClicked = screenScaleMouse.getPressed().some((key) => key != 0)
    //rectangleClickCheckImage(clickPosition, underlined_words)
    let buttonClicked = ""
    if (arrowClicked) {
        let output = rectangleClickCheckImage(screenScaleMouse.getPos(), scale_buttons)
        
        arrowClicked = output[0]
        buttonClicked = output[1]
     }
    
    if ((keys.length || arrowClicked) && (Date.now() - ccStart) > 1500) {
        console.log(rectangleClickCheckImage(screenScaleMouse.getPos(), scale_buttons))
        console.log({mouse: screenScaleMouse, pos: screenScaleMouse.getPos(), buttonClicked, right_button})
        if (((t - oldt) < 0.5)) {
            dscale = (5 * dbase);
            oldt = t;
        } else {
            dscale = dbase;
            oldt = t;
        }
        if ((_pj.in_es6("space", keys)) && (t > 1)) {
            continueRoutine = false;
        } else {
            if (_pj.in_es6("up", keys) || buttonClicked == "up_button") {
                y_scale = (Math.round(((y_scale + dscale) * 10000)) / 10000);
            } else {
                if (_pj.in_es6("down", keys) || buttonClicked == "down_button") {
                    y_scale = (Math.round(((y_scale - dscale) * 10000)) / 10000);
                } else {
                    if (_pj.in_es6("left", keys) || buttonClicked == "left_button") {
                        x_scale = (Math.round(((x_scale - dscale) * 10000)) / 10000);
                    } else {
                        if (_pj.in_es6("right", keys) || buttonClicked == "right_button") {
                            x_scale = (Math.round(((x_scale + dscale) * 10000)) / 10000);
                        }
                    }
                }
            }
        }
        screen_height = (Math.round(((vsize * 10) / y_scale)) / 10);
        textBottom.text = (((((((("X Scale = " + x_scale.toString()) + unittext) + " per cm, Y Scale = ") + y_scale.toString()) + unittext) + " per cm\nScreen height = ") + screen_height.toString()) + " cm\n\nPress the space bar when done");
        ccimage.size = [(x_size * x_scale), (y_size * y_scale)];
        console.log((x_size * x_scale), (y_size * y_scale));
    }
    
    
    // *textTop* updates
    if (t >= 0.0 && textTop.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      textTop.tStart = t;  // (not accounting for frame time here)
      textTop.frameNStart = frameN;  // exact frame index
      
      textTop.setAutoDraw(true);
    }

    
    // *textBottom* updates
    if (t >= 0.0 && textBottom.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      textBottom.tStart = t;  // (not accounting for frame time here)
      textBottom.frameNStart = frameN;  // exact frame index
      
      textBottom.setAutoDraw(true);
    }

    
    // *ccimage* updates
    if (t >= 0.0 && ccimage.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      ccimage.tStart = t;  // (not accounting for frame time here)
      ccimage.frameNStart = frameN;  // exact frame index
      
      ccimage.setAutoDraw(true);
    }

    
    // *up_button* updates
    if (t >= 0.5 && up_button.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      up_button.tStart = t;  // (not accounting for frame time here)
      up_button.frameNStart = frameN;  // exact frame index
      
      up_button.setAutoDraw(true);
    }

    
    // *down_button* updates
    if (t >= 0.5 && down_button.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      down_button.tStart = t;  // (not accounting for frame time here)
      down_button.frameNStart = frameN;  // exact frame index
      
      down_button.setAutoDraw(true);
    }

    
    // *left_button* updates
    if (t >= 0.5 && left_button.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      left_button.tStart = t;  // (not accounting for frame time here)
      left_button.frameNStart = frameN;  // exact frame index
      
      left_button.setAutoDraw(true);
    }

    
    // *right_button* updates
    if (t >= 0.5 && right_button.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      right_button.tStart = t;  // (not accounting for frame time here)
      right_button.frameNStart = frameN;  // exact frame index
      
      right_button.setAutoDraw(true);
    }

    // *screenScaleMouse* updates
    if (t >= 1 && screenScaleMouse.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      screenScaleMouse.tStart = t;  // (not accounting for frame time here)
      screenScaleMouse.frameNStart = frameN;  // exact frame index
      
      screenScaleMouse.status = PsychoJS.Status.STARTED;
      screenScaleMouse.mouseClock.reset();
      prevButtonState = screenScaleMouse.getPressed();  // if button is down already this ISN'T a new click
      }
    frameRemains = 1 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (screenScaleMouse.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      screenScaleMouse.status = PsychoJS.Status.FINISHED;
  }
    if (screenScaleMouse.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = screenScaleMouse.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          _mouseXYs = screenScaleMouse.getPos();
          screenScaleMouse.x.push(_mouseXYs[0]);
          screenScaleMouse.y.push(_mouseXYs[1]);
          screenScaleMouse.leftButton.push(_mouseButtons[0]);
          screenScaleMouse.midButton.push(_mouseButtons[1]);
          screenScaleMouse.rightButton.push(_mouseButtons[2]);
          screenScaleMouse.time.push(screenScaleMouse.mouseClock.getTime());
        }
      }
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of screenScaleComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


var pelliWidth;
var pelliHeight;
var snellenY;
function screenScaleRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'screenScale' ---
    for (const thisComponent of screenScaleComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // Run 'End Routine' code from scaleCode
    psychoJS.experiment.addData("X Scale", x_scale);
    psychoJS.experiment.addData("Y Scale", y_scale);
    
    scaleBank["y"][screenScaleTrials.thisN] = y_scale
    scaleBank["x"][screenScaleTrials.thisN] = y_scale
    if (screenScaleTrials.thisN === 1){
            y_scale = (scaleBank["y"][0]+scaleBank["y"][1])/2
            x_scale = (scaleBank["x"][0]+scaleBank["x"][1])/2
            console.log('y_scale', y_scale)
            // get desired snellen chart height
            // 14.7 = iphone X screen height in cm
            // 7.9 = iphone X screen width in cm
            snellenHeight   = y_scale * 14.36;
            snellenWidth    = y_scale * 7.9;
            
            pelliWidth      = snellenWidth;
            pelliHeight     = pelliWidth * 1.1955;
            
            snellenY = (snellenHeight-vsize)/2
            
            
            //y_scale= y_scale/40;
            y_scale= y_scale/40;
            x_scale = x_scale / 60;        
            
            imagesize = [imagesize[0]*y_scale,imagesize[1]*y_scale]
    
            popupsize = [popupsize[0]*y_scale,popupsize[1]*y_scale]
    
            preferencesize = [1247,302]
            
            
    
            halfimg_x = popupsize[0]/2
            halfscreen_y = vsize/2
    
    
            preference_y = (halfscreen_y-preferencesize[1])
            preference_question_y = preference_y-(vsize*.2)
            preference_slider_y   = preference_question_y-(vsize*.2)
    
    
            popup_buttons = {}
            popup_buttons.back_button = {}
            popup_buttons.back_text = {}
            popup_buttons.close_button = {}
            // register position and size of popup's back button 
            popup_buttons.back_button.width  = 200
            popup_buttons.back_button.height = 50
            popup_buttons.back_button.x      = (-halfimg_x+(popup_buttons.back_button.width/2))
            popup_buttons.back_button.y      = (-halfscreen_y + (halfscreen_y*.1)) + popup_buttons.back_button.height
    
    
            // register position and size of popup's back text 
            popup_buttons.back_text.width  = 200
            popup_buttons.back_text.height = 50
            popup_buttons.back_text.x      = popup_buttons.back_button.x + popup_buttons.back_button.width/2 +popup_buttons.back_text.width/2 
            popup_buttons.back_text.y      = popup_buttons.back_button.y
    
    
            // register position and size of popup's close button 
            popup_buttons.close_button.width  = 25
            popup_buttons.close_button.height = 25
            popup_buttons.close_button.x      = (halfimg_x - (halfimg_x*.1)) 
            popup_buttons.close_button.y      = (halfscreen_y-(halfscreen_y*.05)) - popup_buttons.close_button.height
    
            // memory test buttons
            memory_button            = {}
            memory_button.yes_button = {}
            memory_button.no_button  = {}
    
            memory_button.yes_button.width      = hsize/10
            memory_button.yes_button.height     = hsize/20
            memory_button.yes_button.x          = -hsize/10
            memory_button.yes_button.y          = -hsize/10
    
            memory_button.no_button.width       = hsize/10
            memory_button.no_button.height      = hsize/20
            memory_button.no_button.x           = hsize/10
            memory_button.no_button.y           = -hsize/10
            console.log('y_scale-ratio', y_scale)
        }
    
    
    
    // store data for psychoJS.experiment (ExperimentHandler)
    psychoJS.experiment.addData('screenScaleMouse.x', screenScaleMouse.x);
    psychoJS.experiment.addData('screenScaleMouse.y', screenScaleMouse.y);
    psychoJS.experiment.addData('screenScaleMouse.leftButton', screenScaleMouse.leftButton);
    psychoJS.experiment.addData('screenScaleMouse.midButton', screenScaleMouse.midButton);
    psychoJS.experiment.addData('screenScaleMouse.rightButton', screenScaleMouse.rightButton);
    psychoJS.experiment.addData('screenScaleMouse.time', screenScaleMouse.time);
    
    // the Routine "screenScale" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var scaleBlankComponents;
function scaleBlankRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'scaleBlank' ---
    t = 0;
    scaleBlankClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(1.000000);
    // update component parameters for each repeat
    // keep track of which components have finished
    scaleBlankComponents = [];
    scaleBlankComponents.push(blankScreenForRefresh);
    
    for (const thisComponent of scaleBlankComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function scaleBlankRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'scaleBlank' ---
    // get current time
    t = scaleBlankClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *blankScreenForRefresh* updates
    if (t >= 0.0 && blankScreenForRefresh.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      blankScreenForRefresh.tStart = t;  // (not accounting for frame time here)
      blankScreenForRefresh.frameNStart = frameN;  // exact frame index
      
      blankScreenForRefresh.setAutoDraw(true);
    }

    frameRemains = 0.0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (blankScreenForRefresh.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      blankScreenForRefresh.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of scaleBlankComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function scaleBlankRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'scaleBlank' ---
    for (const thisComponent of scaleBlankComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var generalInstructions2Components;
function generalInstructions2RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'generalInstructions2' ---
    t = 0;
    generalInstructions2Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    generalInstructionsText_2.setAlignHoriz("left");
    
    generalInstructionsText_2.setPos([xAxisCenter, 0]);
    generalInstructionsText_2.setHeight(instructionTextSize*y_scale);
    nextButton_GeneralInst.setPos([buttonX, buttonY]);
    nextButton_GeneralInst.setSize([buttonWidth, buttonHeight]);
    // setup some python lists for storing info about the mouseGeneralInstructions
    // current position of the mouse:
    mouseGeneralInstructions.x = [];
    mouseGeneralInstructions.y = [];
    mouseGeneralInstructions.leftButton = [];
    mouseGeneralInstructions.midButton = [];
    mouseGeneralInstructions.rightButton = [];
    mouseGeneralInstructions.time = [];
    mouseGeneralInstructions.clicked_name = [];
    gotValidClick = false; // until a click is received
    // keep track of which components have finished
    generalInstructions2Components = [];
    generalInstructions2Components.push(generalInstructionsText_2);
    generalInstructions2Components.push(nextButton_GeneralInst);
    generalInstructions2Components.push(mouseGeneralInstructions);
    
    for (const thisComponent of generalInstructions2Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function generalInstructions2RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'generalInstructions2' ---
    // get current time
    t = generalInstructions2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *generalInstructionsText_2* updates
    if (t >= 0.0 && generalInstructionsText_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      generalInstructionsText_2.tStart = t;  // (not accounting for frame time here)
      generalInstructionsText_2.frameNStart = frameN;  // exact frame index
      
      generalInstructionsText_2.setAutoDraw(true);
    }

    
    // *nextButton_GeneralInst* updates
    if (t >= 0.2 && nextButton_GeneralInst.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      nextButton_GeneralInst.tStart = t;  // (not accounting for frame time here)
      nextButton_GeneralInst.frameNStart = frameN;  // exact frame index
      
      nextButton_GeneralInst.setAutoDraw(true);
    }

    // *mouseGeneralInstructions* updates
    if (t >= mouseDelayOther && mouseGeneralInstructions.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouseGeneralInstructions.tStart = t;  // (not accounting for frame time here)
      mouseGeneralInstructions.frameNStart = frameN;  // exact frame index
      
      mouseGeneralInstructions.status = PsychoJS.Status.STARTED;
      mouseGeneralInstructions.mouseClock.reset();
      prevButtonState = mouseGeneralInstructions.getPressed();  // if button is down already this ISN'T a new click
      }
    if (mouseGeneralInstructions.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = mouseGeneralInstructions.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          for (const obj of [nextButton_GeneralInst]) {
            if (obj.contains(mouseGeneralInstructions)) {
              gotValidClick = true;
              mouseGeneralInstructions.clicked_name.push(obj.name)
            }
          }
          if (gotValidClick === true) { 
            _mouseXYs = mouseGeneralInstructions.getPos();
            mouseGeneralInstructions.x.push(_mouseXYs[0]);
            mouseGeneralInstructions.y.push(_mouseXYs[1]);
            mouseGeneralInstructions.leftButton.push(_mouseButtons[0]);
            mouseGeneralInstructions.midButton.push(_mouseButtons[1]);
            mouseGeneralInstructions.rightButton.push(_mouseButtons[2]);
            mouseGeneralInstructions.time.push(mouseGeneralInstructions.mouseClock.getTime());
          }
          if (gotValidClick === true) { // abort routine on response
            continueRoutine = false;
          }
        }
      }
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of generalInstructions2Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function generalInstructions2RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'generalInstructions2' ---
    for (const thisComponent of generalInstructions2Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // store data for psychoJS.experiment (ExperimentHandler)
    if (mouseGeneralInstructions.x) {  psychoJS.experiment.addData('mouseGeneralInstructions.x', mouseGeneralInstructions.x[0])};
    if (mouseGeneralInstructions.y) {  psychoJS.experiment.addData('mouseGeneralInstructions.y', mouseGeneralInstructions.y[0])};
    if (mouseGeneralInstructions.leftButton) {  psychoJS.experiment.addData('mouseGeneralInstructions.leftButton', mouseGeneralInstructions.leftButton[0])};
    if (mouseGeneralInstructions.midButton) {  psychoJS.experiment.addData('mouseGeneralInstructions.midButton', mouseGeneralInstructions.midButton[0])};
    if (mouseGeneralInstructions.rightButton) {  psychoJS.experiment.addData('mouseGeneralInstructions.rightButton', mouseGeneralInstructions.rightButton[0])};
    if (mouseGeneralInstructions.time) {  psychoJS.experiment.addData('mouseGeneralInstructions.time', mouseGeneralInstructions.time[0])};
    if (mouseGeneralInstructions.clicked_name) {  psychoJS.experiment.addData('mouseGeneralInstructions.clicked_name', mouseGeneralInstructions.clicked_name[0])};
    
    // the Routine "generalInstructions2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var popupN;
var ydifference;
var xdifference;
var consentY;
var _key_resp_allKeys;
var _consent_keyboard_allKeys;
var informedConsent1Components;
function informedConsent1RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'informedConsent1' ---
    t = 0;
    informedConsent1Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    popupN = popupN + 1
    
    ydifference = (vsize - consentsize[1])/2
    xdifference = (hsize - consentsize[0])/2
    consentY = ydifference;
    
    consent_image.setPos([0, consentY]);
    key_resp.keys = undefined;
    key_resp.rt = undefined;
    _key_resp_allKeys = [];
    // setup some python lists for storing info about the mouseInstructions
    // current position of the mouse:
    mouseInstructions.x = [];
    mouseInstructions.y = [];
    mouseInstructions.leftButton = [];
    mouseInstructions.midButton = [];
    mouseInstructions.rightButton = [];
    mouseInstructions.time = [];
    gotValidClick = false; // until a click is received
    consent_keyboard.keys = undefined;
    consent_keyboard.rt = undefined;
    _consent_keyboard_allKeys = [];
    // Run 'Begin Routine' code from set_consent_image
    const searchParams = new URLSearchParams(location.search);
    
    const imageParam = parseInt(searchParams.get('image')) || 0;
    
    let image = "stimuli/";
    
    if ( imageParam == 0 ) {
        console.log("prolific")
        image += "prolific_consent.png"
    } else {
        console.log("life")
        image += "life_consent.png"
    }
    
    consent_image.setImage(image)
    // keep track of which components have finished
    informedConsent1Components = [];
    informedConsent1Components.push(consent_image);
    informedConsent1Components.push(key_resp);
    informedConsent1Components.push(mouseInstructions);
    informedConsent1Components.push(consent_keyboard);
    
    for (const thisComponent of informedConsent1Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


var oldY;
var deltaY;
var imageY;
function informedConsent1RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'informedConsent1' ---
    // get current time
    t = informedConsent1Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    
    
    // register current Y position
    oldY = consent_image.pos[1];
    // estimate change in Y
    deltaY = (mouseInstructions.getWheelRel()[1]);
    
    //Check for keyboard up/down
    let skEvents = consent_keyboard.getEvents()
    if(isKeyPressed(skEvents, 'up')) {
         deltaY = -25;
    }
    
    if(isKeyPressed(skEvents, 'down')) {
         deltaY = 25;
    }
    // add to image position
    imageY = (oldY + deltaY);
    
    
    
    if (scrolling_amount != 0) {
        const newY = scrolling_amount + article_image.pos[1]
        
        if ((newY >= ydifference*3) && (Math.abs(newY - ydifference) <= (Math.abs(ydifference*4)))) {
            console.log('old y, new y: ',article_image.pos[1],newY)
             article_image.pos = [0, newY];
            underlined_words = changeWordPosition(scrolling_amount,underlined_words);
        }  
       
    }
    
    scrolling_keyboard.clearEvents()
    
    
    
    if (imageY != oldY) {
        // print coordinates and bounds for debugging
    //    console.log('new y, y difference, condition :', imageY, ydifference, imageY>=ydifference*2)
    //    console.log('abs(newy-oldy), abs(ydiff*2), condition :', Math.abs(imageY-oldY), Math.abs(ydifference*3), (Math.abs(imageY - oldY) < (Math.abs(ydifference*2))))
        // change img position if 1) it does not exceed the upper limit, 2) lower limit of image
        if ((imageY >= ydifference*2) && (Math.abs(imageY - ydifference) <= (Math.abs(ydifference*3)))) {
            // change image position
            consent_image.pos = [0, imageY];
            }  
    }
    
    
    
    document.body.style.zoom = "100%";
    
    // *consent_image* updates
    if (t >= 0.0 && consent_image.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      consent_image.tStart = t;  // (not accounting for frame time here)
      consent_image.frameNStart = frameN;  // exact frame index
      
      consent_image.setAutoDraw(true);
    }

    
    // *key_resp* updates
    if (t >= 3 && key_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp.tStart = t;  // (not accounting for frame time here)
      key_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp.clearEvents(); });
    }

    if (key_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_allKeys = _key_resp_allKeys.concat(theseKeys);
      if (_key_resp_allKeys.length > 0) {
        key_resp.keys = _key_resp_allKeys[_key_resp_allKeys.length - 1].name;  // just the last key pressed
        key_resp.rt = _key_resp_allKeys[_key_resp_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // *mouseInstructions* updates
    if (t >= 0.0 && mouseInstructions.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouseInstructions.tStart = t;  // (not accounting for frame time here)
      mouseInstructions.frameNStart = frameN;  // exact frame index
      
      mouseInstructions.status = PsychoJS.Status.STARTED;
      mouseInstructions.mouseClock.reset();
      prevButtonState = mouseInstructions.getPressed();  // if button is down already this ISN'T a new click
      }
    if (mouseInstructions.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = mouseInstructions.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          _mouseXYs = mouseInstructions.getPos();
          mouseInstructions.x.push(_mouseXYs[0]);
          mouseInstructions.y.push(_mouseXYs[1]);
          mouseInstructions.leftButton.push(_mouseButtons[0]);
          mouseInstructions.midButton.push(_mouseButtons[1]);
          mouseInstructions.rightButton.push(_mouseButtons[2]);
          mouseInstructions.time.push(mouseInstructions.mouseClock.getTime());
        }
      }
    }
    
    // *consent_keyboard* updates
    if (t >= 0.0 && consent_keyboard.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      consent_keyboard.tStart = t;  // (not accounting for frame time here)
      consent_keyboard.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { consent_keyboard.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { consent_keyboard.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { consent_keyboard.clearEvents(); });
    }

    if (consent_keyboard.status === PsychoJS.Status.STARTED) {
      let theseKeys = consent_keyboard.getKeys({keyList: [], waitRelease: false});
      _consent_keyboard_allKeys = _consent_keyboard_allKeys.concat(theseKeys);
      if (_consent_keyboard_allKeys.length > 0) {
        consent_keyboard.keys = _consent_keyboard_allKeys[_consent_keyboard_allKeys.length - 1].name;  // just the last key pressed
        consent_keyboard.rt = _consent_keyboard_allKeys[_consent_keyboard_allKeys.length - 1].rt;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of informedConsent1Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function informedConsent1RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'informedConsent1' ---
    for (const thisComponent of informedConsent1Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp.corr, level);
    }
    psychoJS.experiment.addData('key_resp.keys', key_resp.keys);
    if (typeof key_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp.rt', key_resp.rt);
        routineTimer.reset();
        }
    
    key_resp.stop();
    // store data for psychoJS.experiment (ExperimentHandler)
    psychoJS.experiment.addData('mouseInstructions.x', mouseInstructions.x);
    psychoJS.experiment.addData('mouseInstructions.y', mouseInstructions.y);
    psychoJS.experiment.addData('mouseInstructions.leftButton', mouseInstructions.leftButton);
    psychoJS.experiment.addData('mouseInstructions.midButton', mouseInstructions.midButton);
    psychoJS.experiment.addData('mouseInstructions.rightButton', mouseInstructions.rightButton);
    psychoJS.experiment.addData('mouseInstructions.time', mouseInstructions.time);
    
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(consent_keyboard.corr, level);
    }
    psychoJS.experiment.addData('consent_keyboard.keys', consent_keyboard.keys);
    if (typeof consent_keyboard.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('consent_keyboard.rt', consent_keyboard.rt);
        }
    
    consent_keyboard.stop();
    // the Routine "informedConsent1" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _seating_key_resp_allKeys;
var seatingInstructionsComponents;
function seatingInstructionsRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'seatingInstructions' ---
    t = 0;
    seatingInstructionsClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    seating_key_resp.keys = undefined;
    seating_key_resp.rt = undefined;
    _seating_key_resp_allKeys = [];
    seatingInstructionsText.setAlignHoriz("left");
    
    seatingInstructionsText.setPos([xAxisCenter, 0]);
    seatingInstructionsText.setHeight(instructionTextSize*y_scale);
    // keep track of which components have finished
    seatingInstructionsComponents = [];
    seatingInstructionsComponents.push(seating_key_resp);
    seatingInstructionsComponents.push(seatingInstructionsText);
    
    for (const thisComponent of seatingInstructionsComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function seatingInstructionsRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'seatingInstructions' ---
    // get current time
    t = seatingInstructionsClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *seating_key_resp* updates
    if (t >= 3 && seating_key_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      seating_key_resp.tStart = t;  // (not accounting for frame time here)
      seating_key_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { seating_key_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { seating_key_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { seating_key_resp.clearEvents(); });
    }

    if (seating_key_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = seating_key_resp.getKeys({keyList: ['space'], waitRelease: false});
      _seating_key_resp_allKeys = _seating_key_resp_allKeys.concat(theseKeys);
      if (_seating_key_resp_allKeys.length > 0) {
        seating_key_resp.keys = _seating_key_resp_allKeys[_seating_key_resp_allKeys.length - 1].name;  // just the last key pressed
        seating_key_resp.rt = _seating_key_resp_allKeys[_seating_key_resp_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *seatingInstructionsText* updates
    if (t >= 0.0 && seatingInstructionsText.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      seatingInstructionsText.tStart = t;  // (not accounting for frame time here)
      seatingInstructionsText.frameNStart = frameN;  // exact frame index
      
      seatingInstructionsText.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of seatingInstructionsComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function seatingInstructionsRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'seatingInstructions' ---
    for (const thisComponent of seatingInstructionsComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(seating_key_resp.corr, level);
    }
    psychoJS.experiment.addData('seating_key_resp.keys', seating_key_resp.keys);
    if (typeof seating_key_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('seating_key_resp.rt', seating_key_resp.rt);
        routineTimer.reset();
        }
    
    seating_key_resp.stop();
    // the Routine "seatingInstructions" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var trialproperties;
var likertCount;
var textboxCount;
var randomizeQuestions;
var rand_lo;
var rand_to;
var blockName;
var setTrialParametersDemographicComponents;
function setTrialParametersDemographicRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'setTrialParametersDemographic' ---
    t = 0;
    setTrialParametersDemographicClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    console.log('slider size demog init: ', sliderSize)
    
    // setup trial parameters
    trialproperties         = thisStimulus_listD["trialproperties"] // cell that indicates the number of passages and questions
    //console.log('stim list D', thisStimulus_listD)
    trialproperties         = trialproperties.split(";") 
    //console.log('trialdata',trialproperties)
    // likert counts
    likertCount             = trialproperties[0]
    //console.log('likertCount text',likertCount)
    likertCount             = getItemCount(likertCount)
    //likertCount = Number(likertCount[likertCount.length-1]) // get the last element (count)
    
    // textbox counts 
    textboxCount            = trialproperties[1]
    //console.log('textboxCount text',textboxCount)
    textboxCount            = getItemCount(textboxCount)
    
    //textboxCount = Number(textboxCount[textboxCount.length-1]) // get the last element (count)
    
    
    //randomization of questions within a set (1= yes, 0=no)
    randomizeQuestions      = trialproperties[2]
    randomizeQuestions      = Number(randomizeQuestions[randomizeQuestions.length-1]) // get the last element (count)
    
    // create likert questions' index array
    rand_lo = [];
    for (var i, _pj_c = 0, _pj_a = range(0, likertCount), _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
        i = _pj_a[_pj_c];
        rand_lo.push(_pj_c+1);
    }
    //console.log(rand_lo)
    // create textbox questions' index array
    rand_to = [];//[1,2,3,4,5,6,7,8,9,10];
    for (var i, _pj_c = 0, _pj_a = range(0, textboxCount), _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
        i = _pj_a[_pj_c];
        rand_to.push(_pj_c+1);
    }
    
    if (randomizeQuestions === 1) {
         rand_lo            = randomArrayShuffle(rand_lo);
         rand_to            = randomArrayShuffle(rand_to);
        }
    
    
    // what is this trial: practice or test?
    trialType               = thisStimulus_listD['trialType'];
    
    
    blockName               = "demographic_scale";
    // keep track of which components have finished
    setTrialParametersDemographicComponents = [];
    
    for (const thisComponent of setTrialParametersDemographicComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function setTrialParametersDemographicRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'setTrialParametersDemographic' ---
    // get current time
    t = setTrialParametersDemographicClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of setTrialParametersDemographicComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function setTrialParametersDemographicRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'setTrialParametersDemographic' ---
    for (const thisComponent of setTrialParametersDemographicComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // the Routine "setTrialParametersDemographic" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var demographicInstructionsRoutineComponents;
function demographicInstructionsRoutineRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'demographicInstructionsRoutine' ---
    t = 0;
    demographicInstructionsRoutineClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    text_4.setColor(new util.Color(textColor));
    text_4.setPos([xAxisCenter, 0]);
    text_4.setFont(textFont);
    text_4.setHeight(instructionTextSize*y_scale);
    text_4.setAlignHoriz('left')
    
    nextButtonDemographicInstructions_2.setPos([buttonX, buttonY]);
    nextButtonDemographicInstructions_2.setSize([buttonWidth, buttonHeight]);
    // setup some python lists for storing info about the mouseDemographicInstructions_2
    // current position of the mouse:
    mouseDemographicInstructions_2.x = [];
    mouseDemographicInstructions_2.y = [];
    mouseDemographicInstructions_2.leftButton = [];
    mouseDemographicInstructions_2.midButton = [];
    mouseDemographicInstructions_2.rightButton = [];
    mouseDemographicInstructions_2.time = [];
    mouseDemographicInstructions_2.clicked_name = [];
    gotValidClick = false; // until a click is received
    // keep track of which components have finished
    demographicInstructionsRoutineComponents = [];
    demographicInstructionsRoutineComponents.push(text_4);
    demographicInstructionsRoutineComponents.push(nextButtonDemographicInstructions_2);
    demographicInstructionsRoutineComponents.push(mouseDemographicInstructions_2);
    
    for (const thisComponent of demographicInstructionsRoutineComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function demographicInstructionsRoutineRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'demographicInstructionsRoutine' ---
    // get current time
    t = demographicInstructionsRoutineClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_4* updates
    if (t >= 0.0 && text_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_4.tStart = t;  // (not accounting for frame time here)
      text_4.frameNStart = frameN;  // exact frame index
      
      text_4.setAutoDraw(true);
    }

    
    // *nextButtonDemographicInstructions_2* updates
    if (t >= 0.2 && nextButtonDemographicInstructions_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      nextButtonDemographicInstructions_2.tStart = t;  // (not accounting for frame time here)
      nextButtonDemographicInstructions_2.frameNStart = frameN;  // exact frame index
      
      nextButtonDemographicInstructions_2.setAutoDraw(true);
    }

    // *mouseDemographicInstructions_2* updates
    if (t >= mouseDelayOther && mouseDemographicInstructions_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouseDemographicInstructions_2.tStart = t;  // (not accounting for frame time here)
      mouseDemographicInstructions_2.frameNStart = frameN;  // exact frame index
      
      mouseDemographicInstructions_2.status = PsychoJS.Status.STARTED;
      mouseDemographicInstructions_2.mouseClock.reset();
      prevButtonState = mouseDemographicInstructions_2.getPressed();  // if button is down already this ISN'T a new click
      }
    if (mouseDemographicInstructions_2.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = mouseDemographicInstructions_2.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          for (const obj of [nextButtonDemographicInstructions_2]) {
            if (obj.contains(mouseDemographicInstructions_2)) {
              gotValidClick = true;
              mouseDemographicInstructions_2.clicked_name.push(obj.name)
            }
          }
          if (gotValidClick === true) { 
            _mouseXYs = mouseDemographicInstructions_2.getPos();
            mouseDemographicInstructions_2.x.push(_mouseXYs[0]);
            mouseDemographicInstructions_2.y.push(_mouseXYs[1]);
            mouseDemographicInstructions_2.leftButton.push(_mouseButtons[0]);
            mouseDemographicInstructions_2.midButton.push(_mouseButtons[1]);
            mouseDemographicInstructions_2.rightButton.push(_mouseButtons[2]);
            mouseDemographicInstructions_2.time.push(mouseDemographicInstructions_2.mouseClock.getTime());
          }
          if (gotValidClick === true) { // abort routine on response
            continueRoutine = false;
          }
        }
      }
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of demographicInstructionsRoutineComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function demographicInstructionsRoutineRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'demographicInstructionsRoutine' ---
    for (const thisComponent of demographicInstructionsRoutineComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // store data for psychoJS.experiment (ExperimentHandler)
    if (mouseDemographicInstructions_2.x) {  psychoJS.experiment.addData('mouseDemographicInstructions_2.x', mouseDemographicInstructions_2.x[0])};
    if (mouseDemographicInstructions_2.y) {  psychoJS.experiment.addData('mouseDemographicInstructions_2.y', mouseDemographicInstructions_2.y[0])};
    if (mouseDemographicInstructions_2.leftButton) {  psychoJS.experiment.addData('mouseDemographicInstructions_2.leftButton', mouseDemographicInstructions_2.leftButton[0])};
    if (mouseDemographicInstructions_2.midButton) {  psychoJS.experiment.addData('mouseDemographicInstructions_2.midButton', mouseDemographicInstructions_2.midButton[0])};
    if (mouseDemographicInstructions_2.rightButton) {  psychoJS.experiment.addData('mouseDemographicInstructions_2.rightButton', mouseDemographicInstructions_2.rightButton[0])};
    if (mouseDemographicInstructions_2.time) {  psychoJS.experiment.addData('mouseDemographicInstructions_2.time', mouseDemographicInstructions_2.time[0])};
    if (mouseDemographicInstructions_2.clicked_name) {  psychoJS.experiment.addData('mouseDemographicInstructions_2.clicked_name', mouseDemographicInstructions_2.clicked_name[0])};
    
    // the Routine "demographicInstructionsRoutine" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var questionIdentifier;
var currentTextboxItem;
var currentTextboxDescription;
var currentTextboxTextDemographic;
var isMail;
var isAge;
var isOtherText;
var startTime;
var textBoxFill;
var pressSpaceTextFill;
var clearEventAfterChoice;
var labelCount;
var labelPosition_y;
var radioComponentName;
var positionMultiplier;
var textBoxQuestionsComponents;
function textBoxQuestionsRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'textBoxQuestions' ---
    t = 0;
    textBoxQuestionsClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // create the excel column name that represents the current question text
    questionIdentifier              = ('textbox'+((rand_to[textbox_trials.thisN]).toString())+'text')
    itemIDIdentifier                = ('textbox'+((rand_to[textbox_trials.thisN]).toString())+'ID')
    // call the question text 
    currentTextboxItem              = thisStimulus_listD[questionIdentifier];
    currentTextboxItem              = currentTextboxItem.split(";") 
    currentTextboxDescription       = currentTextboxItem[0] // label for this question, used for registry
    currentTextboxTextDemographic   = currentTextboxItem[1] // question text itself
    //console.log("text box items",currentTextboxItem);
    
    // what is the item type (passage, comp question, mini survey?)
    itemID                          = currentTextboxDescription
    
    //what is the set ID
    setID                           = thisStimulus_listD["setID"];
    
    // determine which of the text box question is about to be displayed
    // this is done to change the instructions regarding how to fill out 
    // the textbox depending on the question. 
    isMail                          = currentTextboxDescription === "email";
    isAge                           = currentTextboxDescription === "age";
    isOtherText                     = (isAge || isMail) === false;
    //console.log("ismail",isMail,"isAge",isAge,"isOtherText",isOtherText);
    
    // change additional question text's centering and weight
    pressSpaceTextTextbox.bold      = true;
    question_textbox.bold           = true;
    
    pressSpaceTextTextbox.setAlignHoriz('left')
    question_textbox.setAlignHoriz('left')
    // start Timer for 500 ms periods to scan for the text 
    myClock.reset(); // reset the timer
    startTime                       = myClock.getTime();
    
    
    // conditional instructions on how to fill out the text box 
    if (isMail === true) {
            // how to fill the mail textbox
            textBoxFill = "";
            pressSpaceTextFill = "Do not use spaces, enter a valid email format: example@gmail.com\n\n";
        }
    if (isAge === true) {
            // how to fill the age textbox
            textBoxFill = "";
            pressSpaceTextFill ="Do not use spaces, enter your age in numbers; example: 31\n\n";
        }
    if (isOtherText === true) {
            // how to fill other textboxes
            textBoxFill = "";
            pressSpaceTextFill = "Do not use paragraph breaks at the start or end of your response \n\n";
        }
    fill_textbox.setText('');
    fill_textbox.refresh();
    fill_textbox.setPos([xAxisCenter, (- 50)]);
    fill_textbox.setSize(textboxSize);
    fill_textbox.setText(textBoxFill);
    fill_textbox.setFont(textFont);
    
    psychoJS.eventManager.clearEvents();
    clearEventAfterChoice = 1;
    fill_textbox.refresh()
    console.log("text box items",fill_textbox);
    
    
    // start Timer for question reaction time
    myClock.reset(); // reset the timer
    startTime = myClock.getTime();
    question_textbox.setColor(new util.Color(textColor));
    question_textbox.setPos([xAxisCenter, questionsTopYaxis]);
    question_textbox.setText((currentTextboxTextDemographic + "\n(enter the text into the box below)"));
    question_textbox.setFont(textFont);
    question_textbox.setHeight(questionTextSize*y_scale);
    pressSpaceTextTextbox.setColor(new util.Color(textColor));
    pressSpaceTextTextbox.setPos([xAxisCenter, questionsBottomYaxis]);
    pressSpaceTextTextbox.setText((pressSpaceTextFill + "Please press the ENTER to advance to the next page after you type in."));
    pressSpaceTextTextbox.setFont(textFont);
    pressSpaceTextTextbox.setHeight(questionTextSize*y_scale);
    demoSlider.reset()
    // Run 'Begin Routine' code from initDemoSlider
    
    ////////////////////////////////////////////////
    //// UPDATE SLIDER LABELS, SIZE, COLOR ETC. ////
    ////////////////////////////////////////////////
    
    
    
    labelCount                      = 6;
    
    
    // 5 (number of labels - 1)
    labelPosition_y                 = Math.abs(sliderSize[1] / (5));
    positions                       = [];
    
    demoSlider.setFontSize(labelTextSize*y_scale);
    
    // what are the maximum amount of radio buttons of this slider
    // count radiobutton_# components, now it is 9.
    radiobutton_size                = [sliderSize[0]* 1.15, sliderSize[0]* 1.15];
    
    // name of radio components
    radioComponentName              = 'demoRadio_'
    
    
    // console.log('here even label')
    // there is no middle label, so get the half of the distance
    // of labels and move on from there while positioning the radio buttons 
    labelPosition_y = labelPosition_y / 2;
    
    // initialize label position coordinate multiplier
    positionMultiplier = 1;
    
    // loop over number of labels
    for (var k = 0; k < labelCount; k++){
        
        // initialize label number index
        var buttonNo = k + 1;
    
        if ((k % 2) === 0) {
            // increase the position multipler at every odd number 
            // this increases the distance from the middle label every third label
            if (k > 1) {
    
                positionMultiplier = positionMultiplier+2; 
            }  
            positions[k] = [sliderPosition[0]+125, sliderPosition[1]+(positionMultiplier*labelPosition_y)];
    
        } else{
    
            positions[k] = [sliderPosition[0]+125, sliderPosition[1]-(positionMultiplier*labelPosition_y)];
            
        }
        // enter the position and size values into individual label radio buttons  
        // position
        eval(radioComponentName + buttonNo + '._pos' +'= ['+positions[k][0] +', '+positions[k][1]+'];' );
        // size
        eval(radioComponentName + buttonNo + '._size' +'= ['+sliderSize[0]* 1.15+', '+sliderSize[0]* 1.15+'];' );
        // draw the changes 
        eval(radioComponentName + buttonNo + '._autoDraw' +'='+true+';');
        console.log('comprehension radio button'+buttonNo.toString(),eval(radioComponentName + buttonNo + '._pos' +'= ['+positions[k][0] +', '+positions[k][1]+'];' ));
    }    
        
    
    
    
    
    // remove radio buttons of slider labels that do not exist
    for (var i = labelCount; i <= maxLabels-1 ; i++){
        console.log(i);
        var buttonNo = i + 1;
        positions[i] = [sliderPosition[0]+125, sliderPosition[1]+labelPosition_y];
        eval(radioComponentName + buttonNo + '._pos'+'= ['+ 0 +','+ 0+'];' );
        eval(radioComponentName + buttonNo + '._size'+'='+1+';' );    
        eval(radioComponentName + buttonNo + '._autoDraw' +'='+true+';');
        
    }
    
    
    // console.log('comprehension slider', questionSlider)
    //////////////////////////////////////////////////////////////////
    // initiate input monitoring for conditional next-page command 
    // (next page command does not work unless participant chose one of 
    // the labels. 
    psychoJS.eventManager.clearEvents();
    clearEventAfterChoice = 1;
    
    // start Timer for question reaction time
    myClock.reset(); // reset the timer
    startTime = myClock.getTime();
    // keep track of which components have finished
    textBoxQuestionsComponents = [];
    textBoxQuestionsComponents.push(fill_textbox);
    textBoxQuestionsComponents.push(question_textbox);
    textBoxQuestionsComponents.push(pressSpaceTextTextbox);
    textBoxQuestionsComponents.push(demoRadio_1);
    textBoxQuestionsComponents.push(demoRadio_2);
    textBoxQuestionsComponents.push(demoRadio_3);
    textBoxQuestionsComponents.push(demoRadio_4);
    textBoxQuestionsComponents.push(demoRadio_5);
    textBoxQuestionsComponents.push(demoRadio_6);
    textBoxQuestionsComponents.push(demoSlider);
    
    for (const thisComponent of textBoxQuestionsComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


var sliderChoice;
var textInput;
var containsMail;
var validAge;
var anyCharacterTyped;
var isNumber;
var currentTime;
var twoSecondElapsed;
function textBoxQuestionsRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'textBoxQuestions' ---
    // get current time
    t = textBoxQuestionsClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *fill_textbox* updates
    if (t >= 0.0 && fill_textbox.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      fill_textbox.tStart = t;  // (not accounting for frame time here)
      fill_textbox.frameNStart = frameN;  // exact frame index
      
      fill_textbox.setAutoDraw(true);
    }

    // get the text inside the text box
    sliderChoice = demoSlider.getRating();
    textInput = fill_textbox._pixi.text;
    textInput = textInput.trim();
    
    if (currentTextboxTextDemographic.includes('highest degree')) {
        textInput = demoSliderLabels[sliderChoice - 1] || '';
        console.error(textInput)
    }
    // check if text input contains "@" and "." for mail input and not SPACES
    //containsSpace = (textInput.indexOf(' ') === -1);
    containsMail = ((textInput.indexOf('@') > -1) && (textInput.indexOf('.') > -1) &&  (textInput.indexOf("example") === -1));
    containsMail = containsMail;
    //console.log('contains mail')
    //console.log(containsMail);
    // allow continue only if age input consists of two characters, does not check for number type
    validAge = (textInput.length >= 2); 
    anyCharacterTyped = (textInput.length >= 1); 
    isNumber = isNaN(textInput) === false; //this condition returns true when input is a number
    validAge = validAge && isNumber; 
    
    if (clearEventAfterChoice === 1){
        psychoJS.eventManager.clearEvents();    // clears keypress events
                                                // does not terminate the loop prematurely        
        }
    
    currentTime = myClock.getTime();
    twoSecondElapsed = currentTime-startTime >=keyboardPauseDuration;
    if (twoSecondElapsed===true){
        if ((isMail && containsMail) || (isAge && validAge) || (isOtherText && anyCharacterTyped)) {
            //fill_textbox.borderColor= [0, 1, 0];
            if (clearEventAfterChoice === 1){
                psychoJS.eventManager.clearEvents(); // clears keypress events after choice so that previous unrelated space 
                clearEventAfterChoice=0;             // does not terminate the loop prematurely        
                }
            var _pj;
            function _pj_snippets(container) {
                function in_es6(left, right) {
                    if (((right instanceof Array) || ((typeof right) === "string"))) {
                        return (right.indexOf(left) > (- 1));
                    } else {
                        if (((right instanceof Map) || (right instanceof Set) || (right instanceof WeakMap) || (right instanceof WeakSet))) {
                            return right.has(left);
                        } else {
                            return (left in right);
                        }
                    }
                }
                container["in_es6"] = in_es6;
                return container;
            }
    
            _pj = {};
            _pj_snippets(_pj);
            keys = psychoJS.eventManager.getKeys();
            console.log(keys);
                if (keys.length) {
                    if (_pj.in_es6("return", keys)) {         
                        continueRoutine = false;            
                    } else {
                            psychoJS.eventManager.clearEvents();
                            questionReactionTime = myClock.getTime()-startTime
                        }
                }
        } else {
                //fill_textbox.borderColor= [1, 0, 0];
                psychoJS.eventManager.clearEvents(); 
            }
    }
    
    // *question_textbox* updates
    if (t >= 0.0 && question_textbox.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      question_textbox.tStart = t;  // (not accounting for frame time here)
      question_textbox.frameNStart = frameN;  // exact frame index
      
      question_textbox.setAutoDraw(true);
    }

    
    // *pressSpaceTextTextbox* updates
    if (t >= 0.0 && pressSpaceTextTextbox.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      pressSpaceTextTextbox.tStart = t;  // (not accounting for frame time here)
      pressSpaceTextTextbox.frameNStart = frameN;  // exact frame index
      
      pressSpaceTextTextbox.setAutoDraw(true);
    }

    
    // *demoRadio_1* updates
    if (t >= 0.0 && demoRadio_1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      demoRadio_1.tStart = t;  // (not accounting for frame time here)
      demoRadio_1.frameNStart = frameN;  // exact frame index
      
      demoRadio_1.setAutoDraw(true);
    }

    
    // *demoRadio_2* updates
    if (t >= 0.0 && demoRadio_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      demoRadio_2.tStart = t;  // (not accounting for frame time here)
      demoRadio_2.frameNStart = frameN;  // exact frame index
      
      demoRadio_2.setAutoDraw(true);
    }

    
    // *demoRadio_3* updates
    if (t >= 0.0 && demoRadio_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      demoRadio_3.tStart = t;  // (not accounting for frame time here)
      demoRadio_3.frameNStart = frameN;  // exact frame index
      
      demoRadio_3.setAutoDraw(true);
    }

    
    // *demoRadio_4* updates
    if (t >= 0.0 && demoRadio_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      demoRadio_4.tStart = t;  // (not accounting for frame time here)
      demoRadio_4.frameNStart = frameN;  // exact frame index
      
      demoRadio_4.setAutoDraw(true);
    }

    
    // *demoRadio_5* updates
    if (t >= 0.0 && demoRadio_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      demoRadio_5.tStart = t;  // (not accounting for frame time here)
      demoRadio_5.frameNStart = frameN;  // exact frame index
      
      demoRadio_5.setAutoDraw(true);
    }

    
    // *demoRadio_6* updates
    if (t >= 0.0 && demoRadio_6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      demoRadio_6.tStart = t;  // (not accounting for frame time here)
      demoRadio_6.frameNStart = frameN;  // exact frame index
      
      demoRadio_6.setAutoDraw(true);
    }

    
    // *demoSlider* updates
    if (t >= 0.0 && demoSlider.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      demoSlider.tStart = t;  // (not accounting for frame time here)
      demoSlider.frameNStart = frameN;  // exact frame index
      
      demoSlider.setAutoDraw(true);
    }

    // create a for loop using length of labels and update these like that
    for (let i = 0; i < labelCount; i++) {
        //console.log('current label for wrapwidth',i)
        //console.log('type of I',typeof i.toString())
        demoSlider._pixiLabels[i.toString()]._style._wordWrap = true
        demoSlider._pixiLabels[i.toString()]._style._wordWrapWidth = wrapWidthText    
        demoSlider._pixiLabels[i.toString()]._style._align = "left"
    }
    
    
    if (currentTextboxTextDemographic.includes('highest degree')) {
    
        demoSlider.status = PsychoJS.Status.STARTED;
        demoSlider.setAutoDraw(true);
        
        fill_textbox.status = PsychoJS.Status.PAUSED;
        fill_textbox.setAutoDraw(false);
        
        for (let button of demoRadios) {
            button.status = PsychoJS.Status.STARTED;
            button.setAutoDraw(true);
        }
    }
    else { 
    
        demoSlider.status = PsychoJS.Status.PAUSED;
        demoSlider.setAutoDraw(false);
        
        fill_textbox.status = PsychoJS.Status.STARTED;
        fill_textbox.setAutoDraw(true);
        
        for (let button of demoRadios) {
            button.status = PsychoJS.Status.PAUSED;
            button.setAutoDraw(false);
        }
    }
    
    
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of textBoxQuestionsComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


var participantAge;
function textBoxQuestionsRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'textBoxQuestions' ---
    for (const thisComponent of textBoxQuestionsComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('fill_textbox.text',fill_textbox.text)
    // Run 'End Routine' code from getTextFill
    if (isAge===true) {
            participantAge = textInput;
        }
    
    // get browser zoom
    browserZoom = window.outerWidth*100 / window.innerWidth;
    
    // format date
    registeryDate = util.MonotonicClock.getDateStr()
    registeryDate = formatDateTime(registeryDate)
    
    // register data
    data_setID.push(setID); // type of the set (AI or Human)
    data_itemID.push(itemID); // item ID is the unique ID assigned to each stimulus displayed on the screen
    data_trialType.push(trialType); // is this a test or a practice trial
    data_blockName.push(blockName); // what is the name of this block 
    data_totalTrialIndex.push("demographic_trials"); // what is the trial number (total across all blocks)
    
    data_dateTime.push(registeryDate); // date and time 
    data_zoomLevel.push(browserZoom);
    data_passageFont.push(currentFont); // what was the font used in this passage
    data_articleSkipType.push([]) // which button did they press (next or popup link)
    
    data_passageRT.push([]); // words per minute
    data_passageWPM.push([]); // words per minute
    data_passageWordCount.push([]); 
    data_passageSpacing.push([]); // what was the spacing used in this passage
    
    
    data_compAccuracy.push([]); // empty because there is no accuracy during passages 
    data_feedbackRating.push([]) // rating of the likert scale
    
    data_surveyRT.push(questionReactionTime); // time to respond to comprehension question
    data_compChoice.push(textInput) // chosen option is registered as text
    
    // the Routine "textBoxQuestions" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var screening_instructionsComponents;
function screening_instructionsRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'screening_instructions' ---
    t = 0;
    screening_instructionsClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    screeningInstructions.setColor(new util.Color(textColor));
    screeningInstructions.setPos([xAxisCenter, 0]);
    screeningInstructions.setText('In this section, please use your daily corrected vision method to answer each question. \n\nPlease use a tape measurer and sit 14 inches from the screen and try your best to not move.\n\nPlease press the button below to continue.');
    screeningInstructions.setFont(textFont);
    screeningInstructions.setHeight(instructionTextSize*y_scale);
    screeningInstructions.setAlignHoriz("left");
    
    nextButton_screeningInstructions.setPos([buttonX, buttonY]);
    nextButton_screeningInstructions.setSize([buttonWidth, buttonHeight]);
    // setup some python lists for storing info about the mouse_screeningInstructions
    // current position of the mouse:
    mouse_screeningInstructions.x = [];
    mouse_screeningInstructions.y = [];
    mouse_screeningInstructions.leftButton = [];
    mouse_screeningInstructions.midButton = [];
    mouse_screeningInstructions.rightButton = [];
    mouse_screeningInstructions.time = [];
    mouse_screeningInstructions.clicked_name = [];
    gotValidClick = false; // until a click is received
    // keep track of which components have finished
    screening_instructionsComponents = [];
    screening_instructionsComponents.push(screeningInstructions);
    screening_instructionsComponents.push(nextButton_screeningInstructions);
    screening_instructionsComponents.push(mouse_screeningInstructions);
    
    for (const thisComponent of screening_instructionsComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function screening_instructionsRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'screening_instructions' ---
    // get current time
    t = screening_instructionsClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *screeningInstructions* updates
    if (t >= 0.0 && screeningInstructions.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      screeningInstructions.tStart = t;  // (not accounting for frame time here)
      screeningInstructions.frameNStart = frameN;  // exact frame index
      
      screeningInstructions.setAutoDraw(true);
    }

    
    // *nextButton_screeningInstructions* updates
    if (t >= 0.2 && nextButton_screeningInstructions.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      nextButton_screeningInstructions.tStart = t;  // (not accounting for frame time here)
      nextButton_screeningInstructions.frameNStart = frameN;  // exact frame index
      
      nextButton_screeningInstructions.setAutoDraw(true);
    }

    // *mouse_screeningInstructions* updates
    if (t >= mouseDelayOther && mouse_screeningInstructions.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouse_screeningInstructions.tStart = t;  // (not accounting for frame time here)
      mouse_screeningInstructions.frameNStart = frameN;  // exact frame index
      
      mouse_screeningInstructions.status = PsychoJS.Status.STARTED;
      mouse_screeningInstructions.mouseClock.reset();
      prevButtonState = mouse_screeningInstructions.getPressed();  // if button is down already this ISN'T a new click
      }
    if (mouse_screeningInstructions.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = mouse_screeningInstructions.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          for (const obj of [nextButton_screeningInstructions]) {
            if (obj.contains(mouse_screeningInstructions)) {
              gotValidClick = true;
              mouse_screeningInstructions.clicked_name.push(obj.name)
            }
          }
          if (gotValidClick === true) { 
            _mouseXYs = mouse_screeningInstructions.getPos();
            mouse_screeningInstructions.x.push(_mouseXYs[0]);
            mouse_screeningInstructions.y.push(_mouseXYs[1]);
            mouse_screeningInstructions.leftButton.push(_mouseButtons[0]);
            mouse_screeningInstructions.midButton.push(_mouseButtons[1]);
            mouse_screeningInstructions.rightButton.push(_mouseButtons[2]);
            mouse_screeningInstructions.time.push(mouse_screeningInstructions.mouseClock.getTime());
          }
          if (gotValidClick === true) { // abort routine on response
            continueRoutine = false;
          }
        }
      }
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of screening_instructionsComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function screening_instructionsRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'screening_instructions' ---
    for (const thisComponent of screening_instructionsComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // store data for psychoJS.experiment (ExperimentHandler)
    if (mouse_screeningInstructions.x) {  psychoJS.experiment.addData('mouse_screeningInstructions.x', mouse_screeningInstructions.x[0])};
    if (mouse_screeningInstructions.y) {  psychoJS.experiment.addData('mouse_screeningInstructions.y', mouse_screeningInstructions.y[0])};
    if (mouse_screeningInstructions.leftButton) {  psychoJS.experiment.addData('mouse_screeningInstructions.leftButton', mouse_screeningInstructions.leftButton[0])};
    if (mouse_screeningInstructions.midButton) {  psychoJS.experiment.addData('mouse_screeningInstructions.midButton', mouse_screeningInstructions.midButton[0])};
    if (mouse_screeningInstructions.rightButton) {  psychoJS.experiment.addData('mouse_screeningInstructions.rightButton', mouse_screeningInstructions.rightButton[0])};
    if (mouse_screeningInstructions.time) {  psychoJS.experiment.addData('mouse_screeningInstructions.time', mouse_screeningInstructions.time[0])};
    if (mouse_screeningInstructions.clicked_name) {  psychoJS.experiment.addData('mouse_screeningInstructions.clicked_name', mouse_screeningInstructions.clicked_name[0])};
    
    // the Routine "screening_instructions" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var eyes;
var screeningInstructionText;
var chartInstructions;
var screeningSize;
var screeningImage;
var pre_snellenComponents;
function pre_snellenRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'pre_snellen' ---
    t = 0;
    pre_snellenClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    eyes = ["right", "left", "both"];
    
    trialType = "test_screening";
    blockName = "screening";
    snellenInstructions.setAlignHoriz("left");
    
    screeningInstructionText = ""
    chartInstructions = ""
    itemID = ""
    setID = ""
    screeningSize = []
    screeningImage = ""
    
    switch (snellen_trials.thisN) {
      case 0:
      case 1:{
            currentEye = eyes[snellen_trials.thisN];
            chartInstructions =
            "Make sure you are 14 inches away from the screen.\n\nCover your " +
            currentEye +
            " eye with your hand and identify the line on the chart that you can comfortably read.";
            screeningInstructionText = chartInstructions;
    
            itemID = "snellen_" + currentEye;
            //what is the set ID
            setID = "snellen_test";
            screeningSize = [snellenWidth, snellenHeight];
            screeningImage = "stimuli/screening_images/snellen_numbered.png";
            continueRoutine = false
            break;
        }
        case 2: {
            currentEye = eyes[snellen_trials.thisN];
            chartInstructions = "Make sure you are 14 inches away from the screen.\n\nWith no eyes covered, identify the line on the chart that you can comfortably read";
            screeningInstructionText = chartInstructions;
            
            itemID = "snellen_" + currentEye;
            //what is the set ID
            setID = "snellen_test";
            screeningSize = [snellenWidth, snellenHeight];
            screeningImage = "stimuli/screening_images/snellen_numbered.png";
            continueRoutine = false
            break;
        }
        case 3: {
            screeningInstructionText = "Please reuse your tape measurer to ensure you are still sited 14 inches from the screen and try your best to not move.\n\nPress the button below to continue when ready."    
            chartInstructions           = "Identify the line on the chart that you can comfortably read."
            itemID                          = "pelli-robson_test"
            //what is the set ID
            setID                           = "pelli-robson_test"
            screeningSize                   = [pelliWidth, pelliHeight]
            screeningImage                  = "stimuli/screening_images/pelli_robson_numbered.jpg"
            break;
        }
    }
    
    console.error({screeningInstructionText});
    
    // keep track of which components have finished
    pre_snellenComponents = [];
    
    for (const thisComponent of pre_snellenComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function pre_snellenRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'pre_snellen' ---
    // get current time
    t = pre_snellenClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of pre_snellenComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function pre_snellenRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'pre_snellen' ---
    for (const thisComponent of pre_snellenComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // the Routine "pre_snellen" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var snellen_instructionsComponents;
function snellen_instructionsRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'snellen_instructions' ---
    t = 0;
    snellen_instructionsClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    snellenInstructions.setColor(new util.Color(textColor));
    snellenInstructions.setPos([xAxisCenter, 0]);
    snellenInstructions.setText(screeningInstructionText);
    snellenInstructions.setFont(textFont);
    snellenInstructions.setHeight(instructionTextSize*y_scale);
    nextButton_snellenInstructions.setPos([buttonX, buttonY]);
    nextButton_snellenInstructions.setSize([buttonWidth, buttonHeight]);
    // setup some python lists for storing info about the snellen_mouse_instructions
    // current position of the mouse:
    snellen_mouse_instructions.x = [];
    snellen_mouse_instructions.y = [];
    snellen_mouse_instructions.leftButton = [];
    snellen_mouse_instructions.midButton = [];
    snellen_mouse_instructions.rightButton = [];
    snellen_mouse_instructions.time = [];
    snellen_mouse_instructions.clicked_name = [];
    gotValidClick = false; // until a click is received
    // keep track of which components have finished
    snellen_instructionsComponents = [];
    snellen_instructionsComponents.push(snellenInstructions);
    snellen_instructionsComponents.push(nextButton_snellenInstructions);
    snellen_instructionsComponents.push(snellen_mouse_instructions);
    
    for (const thisComponent of snellen_instructionsComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function snellen_instructionsRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'snellen_instructions' ---
    // get current time
    t = snellen_instructionsClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *snellenInstructions* updates
    if (t >= 0.0 && snellenInstructions.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      snellenInstructions.tStart = t;  // (not accounting for frame time here)
      snellenInstructions.frameNStart = frameN;  // exact frame index
      
      snellenInstructions.setAutoDraw(true);
    }

    
    // *nextButton_snellenInstructions* updates
    if (t >= 0 && nextButton_snellenInstructions.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      nextButton_snellenInstructions.tStart = t;  // (not accounting for frame time here)
      nextButton_snellenInstructions.frameNStart = frameN;  // exact frame index
      
      nextButton_snellenInstructions.setAutoDraw(true);
    }

    // *snellen_mouse_instructions* updates
    if (t >= 1 && snellen_mouse_instructions.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      snellen_mouse_instructions.tStart = t;  // (not accounting for frame time here)
      snellen_mouse_instructions.frameNStart = frameN;  // exact frame index
      
      snellen_mouse_instructions.status = PsychoJS.Status.STARTED;
      snellen_mouse_instructions.mouseClock.reset();
      prevButtonState = snellen_mouse_instructions.getPressed();  // if button is down already this ISN'T a new click
      }
    if (snellen_mouse_instructions.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = snellen_mouse_instructions.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          for (const obj of [nextButton_snellenInstructions]) {
            if (obj.contains(snellen_mouse_instructions)) {
              gotValidClick = true;
              snellen_mouse_instructions.clicked_name.push(obj.name)
            }
          }
          _mouseXYs = snellen_mouse_instructions.getPos();
          snellen_mouse_instructions.x.push(_mouseXYs[0]);
          snellen_mouse_instructions.y.push(_mouseXYs[1]);
          snellen_mouse_instructions.leftButton.push(_mouseButtons[0]);
          snellen_mouse_instructions.midButton.push(_mouseButtons[1]);
          snellen_mouse_instructions.rightButton.push(_mouseButtons[2]);
          snellen_mouse_instructions.time.push(snellen_mouse_instructions.mouseClock.getTime());
          if (gotValidClick === true) { // abort routine on response
            continueRoutine = false;
          }
        }
      }
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of snellen_instructionsComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function snellen_instructionsRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'snellen_instructions' ---
    for (const thisComponent of snellen_instructionsComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // store data for psychoJS.experiment (ExperimentHandler)
    if (snellen_mouse_instructions.x) {  psychoJS.experiment.addData('snellen_mouse_instructions.x', snellen_mouse_instructions.x[0])};
    if (snellen_mouse_instructions.y) {  psychoJS.experiment.addData('snellen_mouse_instructions.y', snellen_mouse_instructions.y[0])};
    if (snellen_mouse_instructions.leftButton) {  psychoJS.experiment.addData('snellen_mouse_instructions.leftButton', snellen_mouse_instructions.leftButton[0])};
    if (snellen_mouse_instructions.midButton) {  psychoJS.experiment.addData('snellen_mouse_instructions.midButton', snellen_mouse_instructions.midButton[0])};
    if (snellen_mouse_instructions.rightButton) {  psychoJS.experiment.addData('snellen_mouse_instructions.rightButton', snellen_mouse_instructions.rightButton[0])};
    if (snellen_mouse_instructions.time) {  psychoJS.experiment.addData('snellen_mouse_instructions.time', snellen_mouse_instructions.time[0])};
    if (snellen_mouse_instructions.clicked_name) {  psychoJS.experiment.addData('snellen_mouse_instructions.clicked_name', snellen_mouse_instructions.clicked_name[0])};
    
    // the Routine "snellen_instructions" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var screeningY;
var enableButton;
var snellen_testComponents;
function snellen_testRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'snellen_test' ---
    t = 0;
    snellen_testClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // change additional question text's centering and weight
    pressSpaceSnellen.bold                = true;
    snellen_question.bold                 = true;
    snellen_chart_instructions.bold       = true;
     
    pressSpaceSnellen.setAlignHoriz('left')
    snellen_question.setAlignHoriz('left')
    //snellen_chart_instructions.setAlignHoriz('left')
    // start Timer for 500 ms periods to scan for the text 
    myClock.reset(); // reset the timer
    startTime                       = myClock.getTime();
    
    
    screeningY = (screeningSize[1]/2) *1.2
    
    
    snellen_textbox.setText('');
    snellen_textbox.refresh();
    snellen_textbox.setPos([(snellenWidth * 0.7), 0]);
    snellen_textbox.setSize([(textboxSize[0] / 2), textboxSize[1]]);
    snellen_textbox.setText('');
    snellen_textbox.setFont(textFont);
    
    psychoJS.eventManager.clearEvents();
    clearEventAfterChoice = 1;
    snellen_textbox.refresh()
    console.log("text box items",snellen_textbox);
    
    enableButton = false
    
    
    // start Timer for question reaction time
    myClock.reset(); // reset the timer
    startTime = myClock.getTime();
    snellen_chart_image.setPos([0, 0]);
    snellen_chart_image.setSize(screeningSize);
    snellen_chart_image.setImage(screeningImage);
    snellen_chart_instructions.setColor(new util.Color(textColor));
    snellen_chart_instructions.setPos([0, screeningY]);
    snellen_chart_instructions.setText(chartInstructions);
    snellen_chart_instructions.setFont(textFont);
    snellen_chart_instructions.setHeight(questionTextSize);
    snellen_question.setColor(new util.Color(textColor));
    snellen_question.setPos([(snellenWidth * 0.7), textboxSize[1]]);
    snellen_question.setText('Type in the number of the line you find comfortable reading.');
    snellen_question.setFont(textFont);
    snellen_question.setHeight(questionTextSize/1.5);
    pressSpaceSnellen.setColor(new util.Color(textColor));
    pressSpaceSnellen.setPos([(snellenWidth * 0.7), (- textboxSize[1])]);
    pressSpaceSnellen.setText('Please press the button below to continue.');
    pressSpaceSnellen.setFont(textFont);
    pressSpaceSnellen.setHeight(questionTextSize/1.5);
    nextButton_snellen.setPos([buttonX, buttonY]);
    nextButton_snellen.setSize([buttonWidth, buttonHeight]);
    // setup some python lists for storing info about the snellen_mouse
    // current position of the mouse:
    snellen_mouse.x = [];
    snellen_mouse.y = [];
    snellen_mouse.leftButton = [];
    snellen_mouse.midButton = [];
    snellen_mouse.rightButton = [];
    snellen_mouse.time = [];
    snellen_mouse.clicked_name = [];
    gotValidClick = false; // until a click is received
    // keep track of which components have finished
    snellen_testComponents = [];
    snellen_testComponents.push(snellen_textbox);
    snellen_testComponents.push(snellen_chart_image);
    snellen_testComponents.push(snellen_chart_instructions);
    snellen_testComponents.push(snellen_question);
    snellen_testComponents.push(pressSpaceSnellen);
    snellen_testComponents.push(nextButton_snellen);
    snellen_testComponents.push(snellen_mouse);
    
    for (const thisComponent of snellen_testComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function snellen_testRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'snellen_test' ---
    // get current time
    t = snellen_testClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *snellen_textbox* updates
    if (t >= 0.0 && snellen_textbox.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      snellen_textbox.tStart = t;  // (not accounting for frame time here)
      snellen_textbox.frameNStart = frameN;  // exact frame index
      
      snellen_textbox.setAutoDraw(true);
    }

    // get the text inside the text box
    textInput               = snellen_textbox._pixi.text;
    textInput               = textInput.trim();
    
    anyCharacterTyped       = (textInput.length >= 1); 
    isNumber                = isNaN(textInput) === false; //this condition returns true when input is a number
    
    
    
    if (clearEventAfterChoice === 1){
        psychoJS.eventManager.clearEvents();    // clears keypress events
                                                // does not terminate the loop prematurely        
        }
    
    currentTime             = myClock.getTime();
    twoSecondElapsed        = currentTime-startTime >=2;
    
    if (twoSecondElapsed===true){
        
      enableButton          = (isNumber && anyCharacterTyped)
      
    }
    
    // *snellen_chart_image* updates
    if (t >= 0.0 && snellen_chart_image.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      snellen_chart_image.tStart = t;  // (not accounting for frame time here)
      snellen_chart_image.frameNStart = frameN;  // exact frame index
      
      snellen_chart_image.setAutoDraw(true);
    }

    
    // *snellen_chart_instructions* updates
    if (t >= 0.0 && snellen_chart_instructions.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      snellen_chart_instructions.tStart = t;  // (not accounting for frame time here)
      snellen_chart_instructions.frameNStart = frameN;  // exact frame index
      
      snellen_chart_instructions.setAutoDraw(true);
    }

    
    // *snellen_question* updates
    if (t >= 0.0 && snellen_question.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      snellen_question.tStart = t;  // (not accounting for frame time here)
      snellen_question.frameNStart = frameN;  // exact frame index
      
      snellen_question.setAutoDraw(true);
    }

    
    // *pressSpaceSnellen* updates
    if (t >= 0.0 && pressSpaceSnellen.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      pressSpaceSnellen.tStart = t;  // (not accounting for frame time here)
      pressSpaceSnellen.frameNStart = frameN;  // exact frame index
      
      pressSpaceSnellen.setAutoDraw(true);
    }

    
    // *nextButton_snellen* updates
    if (t >= 0 && nextButton_snellen.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      nextButton_snellen.tStart = t;  // (not accounting for frame time here)
      nextButton_snellen.frameNStart = frameN;  // exact frame index
      
      nextButton_snellen.setAutoDraw(true);
    }

    // *snellen_mouse* updates
    if ((enableButton) && snellen_mouse.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      snellen_mouse.tStart = t;  // (not accounting for frame time here)
      snellen_mouse.frameNStart = frameN;  // exact frame index
      
      snellen_mouse.status = PsychoJS.Status.STARTED;
      snellen_mouse.mouseClock.reset();
      prevButtonState = snellen_mouse.getPressed();  // if button is down already this ISN'T a new click
      }
    if (snellen_mouse.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = snellen_mouse.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          for (const obj of [nextButton_snellen]) {
            if (obj.contains(snellen_mouse)) {
              gotValidClick = true;
              snellen_mouse.clicked_name.push(obj.name)
            }
          }
          _mouseXYs = snellen_mouse.getPos();
          snellen_mouse.x.push(_mouseXYs[0]);
          snellen_mouse.y.push(_mouseXYs[1]);
          snellen_mouse.leftButton.push(_mouseButtons[0]);
          snellen_mouse.midButton.push(_mouseButtons[1]);
          snellen_mouse.rightButton.push(_mouseButtons[2]);
          snellen_mouse.time.push(snellen_mouse.mouseClock.getTime());
          if (gotValidClick === true) { // abort routine on response
            continueRoutine = false;
          }
        }
      }
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of snellen_testComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function snellen_testRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'snellen_test' ---
    for (const thisComponent of snellen_testComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('snellen_textbox.text',snellen_textbox.text)
    // Run 'End Routine' code from getfill_snellen
    // get browser zoom
    browserZoom                 = window.outerWidth*100 / window.innerWidth;
    
    // format date
    registeryDate               = util.MonotonicClock.getDateStr()
    registeryDate               = formatDateTime(registeryDate)
    
    // register data
    data_setID.push(setID); // type of the set (AI or Human)
    data_itemID.push(itemID); // item ID is the unique ID assigned to each stimulus displayed on the screen
    data_trialType.push(trialType); // is this a test or a practice trial
    data_blockName.push(blockName); // what is the name of this block 
    data_totalTrialIndex.push("screening_trials"); // what is the trial number (total across all blocks)
    
    data_dateTime.push(registeryDate); // date and time 
    data_zoomLevel.push(browserZoom);
    data_passageFont.push([]); // what was the font used in this passage
    
    data_passageRT.push([]); // words per minute
    data_passageWPM.push([]); // words per minute
    data_passageWordCount.push([]); 
    data_passageSpacing.push([]); // what was the spacing used in this passage
    data_articleSkipType.push([]) // which button did they press (next or popup link)
    
    data_compAccuracy.push([]); // empty because there is no accuracy during passages 
    data_feedbackRating.push([]) // rating of the likert scale
    
    data_surveyRT.push([]); // time to respond to comprehension question
    data_compChoice.push(textInput) // chosen option is registered as text
    
    // store data for psychoJS.experiment (ExperimentHandler)
    if (snellen_mouse.x) {  psychoJS.experiment.addData('snellen_mouse.x', snellen_mouse.x[0])};
    if (snellen_mouse.y) {  psychoJS.experiment.addData('snellen_mouse.y', snellen_mouse.y[0])};
    if (snellen_mouse.leftButton) {  psychoJS.experiment.addData('snellen_mouse.leftButton', snellen_mouse.leftButton[0])};
    if (snellen_mouse.midButton) {  psychoJS.experiment.addData('snellen_mouse.midButton', snellen_mouse.midButton[0])};
    if (snellen_mouse.rightButton) {  psychoJS.experiment.addData('snellen_mouse.rightButton', snellen_mouse.rightButton[0])};
    if (snellen_mouse.time) {  psychoJS.experiment.addData('snellen_mouse.time', snellen_mouse.time[0])};
    if (snellen_mouse.clicked_name) {  psychoJS.experiment.addData('snellen_mouse.clicked_name', snellen_mouse.clicked_name[0])};
    
    // the Routine "snellen_test" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var waitPopupComponents;
function waitPopupRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'waitPopup' ---
    t = 0;
    waitPopupClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(0.300000);
    // update component parameters for each repeat
    // keep track of which components have finished
    waitPopupComponents = [];
    waitPopupComponents.push(waitPopupBlank);
    
    for (const thisComponent of waitPopupComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function waitPopupRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'waitPopup' ---
    // get current time
    t = waitPopupClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *waitPopupBlank* updates
    if (t >= 0.0 && waitPopupBlank.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      waitPopupBlank.tStart = t;  // (not accounting for frame time here)
      waitPopupBlank.frameNStart = frameN;  // exact frame index
      
      waitPopupBlank.setAutoDraw(true);
    }

    frameRemains = 0.0 + 0.3 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (waitPopupBlank.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      waitPopupBlank.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of waitPopupComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function waitPopupRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'waitPopup' ---
    for (const thisComponent of waitPopupComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var memory_general_instructionsComponents;
function memory_general_instructionsRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'memory_general_instructions' ---
    t = 0;
    memory_general_instructionsClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    memoryGeneralInstructions.setColor(new util.Color(textColor));
    memoryGeneralInstructions.setPos([xAxisCenter, 0]);
    memoryGeneralInstructions.setFont(textFont);
    memoryGeneralInstructions.setHeight(instructionTextSize*y_scale);
    memoryGeneralInstructions.setAlignHoriz("left");
    
    nextButton_memoryGenInstructions.setPos([buttonX, buttonY]);
    nextButton_memoryGenInstructions.setSize([buttonWidth, buttonHeight]);
    // setup some python lists for storing info about the mouse_memoryGenInstructions
    // current position of the mouse:
    mouse_memoryGenInstructions.x = [];
    mouse_memoryGenInstructions.y = [];
    mouse_memoryGenInstructions.leftButton = [];
    mouse_memoryGenInstructions.midButton = [];
    mouse_memoryGenInstructions.rightButton = [];
    mouse_memoryGenInstructions.time = [];
    mouse_memoryGenInstructions.clicked_name = [];
    gotValidClick = false; // until a click is received
    // keep track of which components have finished
    memory_general_instructionsComponents = [];
    memory_general_instructionsComponents.push(memoryGeneralInstructions);
    memory_general_instructionsComponents.push(nextButton_memoryGenInstructions);
    memory_general_instructionsComponents.push(mouse_memoryGenInstructions);
    
    for (const thisComponent of memory_general_instructionsComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function memory_general_instructionsRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'memory_general_instructions' ---
    // get current time
    t = memory_general_instructionsClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *memoryGeneralInstructions* updates
    if (t >= 0.0 && memoryGeneralInstructions.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      memoryGeneralInstructions.tStart = t;  // (not accounting for frame time here)
      memoryGeneralInstructions.frameNStart = frameN;  // exact frame index
      
      memoryGeneralInstructions.setAutoDraw(true);
    }

    
    // *nextButton_memoryGenInstructions* updates
    if (t >= 0.2 && nextButton_memoryGenInstructions.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      nextButton_memoryGenInstructions.tStart = t;  // (not accounting for frame time here)
      nextButton_memoryGenInstructions.frameNStart = frameN;  // exact frame index
      
      nextButton_memoryGenInstructions.setAutoDraw(true);
    }

    // *mouse_memoryGenInstructions* updates
    if (t >= mouseDelayOther && mouse_memoryGenInstructions.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouse_memoryGenInstructions.tStart = t;  // (not accounting for frame time here)
      mouse_memoryGenInstructions.frameNStart = frameN;  // exact frame index
      
      mouse_memoryGenInstructions.status = PsychoJS.Status.STARTED;
      mouse_memoryGenInstructions.mouseClock.reset();
      prevButtonState = mouse_memoryGenInstructions.getPressed();  // if button is down already this ISN'T a new click
      }
    if (mouse_memoryGenInstructions.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = mouse_memoryGenInstructions.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          for (const obj of [nextButton_memoryGenInstructions]) {
            if (obj.contains(mouse_memoryGenInstructions)) {
              gotValidClick = true;
              mouse_memoryGenInstructions.clicked_name.push(obj.name)
            }
          }
          if (gotValidClick === true) { 
            _mouseXYs = mouse_memoryGenInstructions.getPos();
            mouse_memoryGenInstructions.x.push(_mouseXYs[0]);
            mouse_memoryGenInstructions.y.push(_mouseXYs[1]);
            mouse_memoryGenInstructions.leftButton.push(_mouseButtons[0]);
            mouse_memoryGenInstructions.midButton.push(_mouseButtons[1]);
            mouse_memoryGenInstructions.rightButton.push(_mouseButtons[2]);
            mouse_memoryGenInstructions.time.push(mouse_memoryGenInstructions.mouseClock.getTime());
          }
          if (gotValidClick === true) { // abort routine on response
            continueRoutine = false;
          }
        }
      }
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of memory_general_instructionsComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function memory_general_instructionsRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'memory_general_instructions' ---
    for (const thisComponent of memory_general_instructionsComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // store data for psychoJS.experiment (ExperimentHandler)
    if (mouse_memoryGenInstructions.x) {  psychoJS.experiment.addData('mouse_memoryGenInstructions.x', mouse_memoryGenInstructions.x[0])};
    if (mouse_memoryGenInstructions.y) {  psychoJS.experiment.addData('mouse_memoryGenInstructions.y', mouse_memoryGenInstructions.y[0])};
    if (mouse_memoryGenInstructions.leftButton) {  psychoJS.experiment.addData('mouse_memoryGenInstructions.leftButton', mouse_memoryGenInstructions.leftButton[0])};
    if (mouse_memoryGenInstructions.midButton) {  psychoJS.experiment.addData('mouse_memoryGenInstructions.midButton', mouse_memoryGenInstructions.midButton[0])};
    if (mouse_memoryGenInstructions.rightButton) {  psychoJS.experiment.addData('mouse_memoryGenInstructions.rightButton', mouse_memoryGenInstructions.rightButton[0])};
    if (mouse_memoryGenInstructions.time) {  psychoJS.experiment.addData('mouse_memoryGenInstructions.time', mouse_memoryGenInstructions.time[0])};
    if (mouse_memoryGenInstructions.clicked_name) {  psychoJS.experiment.addData('mouse_memoryGenInstructions.clicked_name', mouse_memoryGenInstructions.clicked_name[0])};
    
    // the Routine "memory_general_instructions" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var testid;
var currentList;
var currentAnswers;
var currentInstruction;
var listCount;
var answerCount;
var displayList;
var memory_initializeComponents;
function memory_initializeRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'memory_initialize' ---
    t = 0;
    memory_initializeClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    testid                  = thisMemory_trial["test_id"]
    currentList             = thisMemory_trial["word_list"]
    currentAnswers          = thisMemory_trial["answer_list"]
    currentInstruction      = thisMemory_trial["instructions"]
    
    /* Separate fonts and spacings, then count  */
    currentList                     = currentList.split(";")        
    currentAnswers                  = currentAnswers.split(";")
    listCount                       = currentList.length;
    answerCount                     = currentAnswers.length;
    
    
    // create two lists from the word list of excel file
    displayList = [(currentList.slice(0,listCount/2)).join('\n'),(currentList.slice(listCount/2,listCount)).join('\n')]
    
    currentAnswers = randomArrayShuffle(currentAnswers)
    
    // keep track of which components have finished
    memory_initializeComponents = [];
    
    for (const thisComponent of memory_initializeComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function memory_initializeRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'memory_initialize' ---
    // get current time
    t = memory_initializeClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of memory_initializeComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function memory_initializeRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'memory_initialize' ---
    for (const thisComponent of memory_initializeComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // the Routine "memory_initialize" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var memory_specific_instructionsComponents;
function memory_specific_instructionsRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'memory_specific_instructions' ---
    t = 0;
    memory_specific_instructionsClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    memorySpecificInstructions.setColor(new util.Color(textColor));
    memorySpecificInstructions.setPos([xAxisCenter, 0]);
    memorySpecificInstructions.setText(instructions);
    memorySpecificInstructions.setFont(textFont);
    memorySpecificInstructions.setHeight(instructionTextSize*y_scale);
    memorySpecificInstructions.setAlignHoriz("left");
    
    nextButton_memorySpecInstructions.setPos([buttonX, buttonY]);
    nextButton_memorySpecInstructions.setSize([buttonWidth, buttonHeight]);
    // setup some python lists for storing info about the mouse_memorySpecInstructions
    // current position of the mouse:
    mouse_memorySpecInstructions.x = [];
    mouse_memorySpecInstructions.y = [];
    mouse_memorySpecInstructions.leftButton = [];
    mouse_memorySpecInstructions.midButton = [];
    mouse_memorySpecInstructions.rightButton = [];
    mouse_memorySpecInstructions.time = [];
    mouse_memorySpecInstructions.clicked_name = [];
    gotValidClick = false; // until a click is received
    // keep track of which components have finished
    memory_specific_instructionsComponents = [];
    memory_specific_instructionsComponents.push(memorySpecificInstructions);
    memory_specific_instructionsComponents.push(nextButton_memorySpecInstructions);
    memory_specific_instructionsComponents.push(mouse_memorySpecInstructions);
    
    for (const thisComponent of memory_specific_instructionsComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function memory_specific_instructionsRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'memory_specific_instructions' ---
    // get current time
    t = memory_specific_instructionsClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *memorySpecificInstructions* updates
    if (t >= 0.0 && memorySpecificInstructions.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      memorySpecificInstructions.tStart = t;  // (not accounting for frame time here)
      memorySpecificInstructions.frameNStart = frameN;  // exact frame index
      
      memorySpecificInstructions.setAutoDraw(true);
    }

    
    // *nextButton_memorySpecInstructions* updates
    if (t >= 0.2 && nextButton_memorySpecInstructions.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      nextButton_memorySpecInstructions.tStart = t;  // (not accounting for frame time here)
      nextButton_memorySpecInstructions.frameNStart = frameN;  // exact frame index
      
      nextButton_memorySpecInstructions.setAutoDraw(true);
    }

    // *mouse_memorySpecInstructions* updates
    if (t >= mouseDelayOther && mouse_memorySpecInstructions.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouse_memorySpecInstructions.tStart = t;  // (not accounting for frame time here)
      mouse_memorySpecInstructions.frameNStart = frameN;  // exact frame index
      
      mouse_memorySpecInstructions.status = PsychoJS.Status.STARTED;
      mouse_memorySpecInstructions.mouseClock.reset();
      prevButtonState = mouse_memorySpecInstructions.getPressed();  // if button is down already this ISN'T a new click
      }
    if (mouse_memorySpecInstructions.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = mouse_memorySpecInstructions.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          for (const obj of [nextButton_memorySpecInstructions]) {
            if (obj.contains(mouse_memorySpecInstructions)) {
              gotValidClick = true;
              mouse_memorySpecInstructions.clicked_name.push(obj.name)
            }
          }
          if (gotValidClick === true) { 
            _mouseXYs = mouse_memorySpecInstructions.getPos();
            mouse_memorySpecInstructions.x.push(_mouseXYs[0]);
            mouse_memorySpecInstructions.y.push(_mouseXYs[1]);
            mouse_memorySpecInstructions.leftButton.push(_mouseButtons[0]);
            mouse_memorySpecInstructions.midButton.push(_mouseButtons[1]);
            mouse_memorySpecInstructions.rightButton.push(_mouseButtons[2]);
            mouse_memorySpecInstructions.time.push(mouse_memorySpecInstructions.mouseClock.getTime());
          }
          if (gotValidClick === true) { // abort routine on response
            continueRoutine = false;
          }
        }
      }
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of memory_specific_instructionsComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function memory_specific_instructionsRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'memory_specific_instructions' ---
    for (const thisComponent of memory_specific_instructionsComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // store data for psychoJS.experiment (ExperimentHandler)
    if (mouse_memorySpecInstructions.x) {  psychoJS.experiment.addData('mouse_memorySpecInstructions.x', mouse_memorySpecInstructions.x[0])};
    if (mouse_memorySpecInstructions.y) {  psychoJS.experiment.addData('mouse_memorySpecInstructions.y', mouse_memorySpecInstructions.y[0])};
    if (mouse_memorySpecInstructions.leftButton) {  psychoJS.experiment.addData('mouse_memorySpecInstructions.leftButton', mouse_memorySpecInstructions.leftButton[0])};
    if (mouse_memorySpecInstructions.midButton) {  psychoJS.experiment.addData('mouse_memorySpecInstructions.midButton', mouse_memorySpecInstructions.midButton[0])};
    if (mouse_memorySpecInstructions.rightButton) {  psychoJS.experiment.addData('mouse_memorySpecInstructions.rightButton', mouse_memorySpecInstructions.rightButton[0])};
    if (mouse_memorySpecInstructions.time) {  psychoJS.experiment.addData('mouse_memorySpecInstructions.time', mouse_memorySpecInstructions.time[0])};
    if (mouse_memorySpecInstructions.clicked_name) {  psychoJS.experiment.addData('mouse_memorySpecInstructions.clicked_name', mouse_memorySpecInstructions.clicked_name[0])};
    
    // the Routine "memory_specific_instructions" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _key_resp_2_allKeys;
var memory_display_listComponents;
function memory_display_listRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'memory_display_list' ---
    t = 0;
    memory_display_listClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(30.000000);
    // update component parameters for each repeat
    listInstruction.setColor(new util.Color(textColor));
    listInstruction.setPos([0, (vsize / 2.2)]);
    listInstruction.setText('Memorize the words displayed below');
    listInstruction.setFont(textFont);
    listInstruction.setHeight(instructionTextSize);
    display_list1.setColor(new util.Color(textColor));
    display_list1.setPos([(- listx), 0]);
    display_list1.setText(displayList[0]);
    display_list1.setFont(textFont);
    display_list1.setHeight(instructionTextSize*1.7);
    display_list2.setColor(new util.Color(textColor));
    display_list2.setPos([listx, 0]);
    display_list2.setText(displayList[1]);
    display_list2.setFont(textFont);
    display_list2.setHeight(instructionTextSize*1.7);
    key_resp_2.keys = undefined;
    key_resp_2.rt = undefined;
    _key_resp_2_allKeys = [];
    // keep track of which components have finished
    memory_display_listComponents = [];
    memory_display_listComponents.push(listInstruction);
    memory_display_listComponents.push(display_list1);
    memory_display_listComponents.push(display_list2);
    memory_display_listComponents.push(key_resp_2);
    
    for (const thisComponent of memory_display_listComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function memory_display_listRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'memory_display_list' ---
    // get current time
    t = memory_display_listClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *listInstruction* updates
    if (t >= 0.0 && listInstruction.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      listInstruction.tStart = t;  // (not accounting for frame time here)
      listInstruction.frameNStart = frameN;  // exact frame index
      
      listInstruction.setAutoDraw(true);
    }

    frameRemains = 0.0 + 30 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (listInstruction.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      listInstruction.setAutoDraw(false);
    }
    
    // *display_list1* updates
    if (t >= 0.0 && display_list1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      display_list1.tStart = t;  // (not accounting for frame time here)
      display_list1.frameNStart = frameN;  // exact frame index
      
      display_list1.setAutoDraw(true);
    }

    frameRemains = 0.0 + 30 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (display_list1.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      display_list1.setAutoDraw(false);
    }
    
    // *display_list2* updates
    if (t >= 0.0 && display_list2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      display_list2.tStart = t;  // (not accounting for frame time here)
      display_list2.frameNStart = frameN;  // exact frame index
      
      display_list2.setAutoDraw(true);
    }

    frameRemains = 0.0 + 30 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (display_list2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      display_list2.setAutoDraw(false);
    }
    
    // *key_resp_2* updates
    if (t >= 0.0 && key_resp_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_2.tStart = t;  // (not accounting for frame time here)
      key_resp_2.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_2.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_2.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_2.clearEvents(); });
    }

    frameRemains = 0.0 + 30 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (key_resp_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      key_resp_2.status = PsychoJS.Status.FINISHED;
  }

    if (key_resp_2.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_2.getKeys({keyList: ['m'], waitRelease: false});
      _key_resp_2_allKeys = _key_resp_2_allKeys.concat(theseKeys);
      if (_key_resp_2_allKeys.length > 0) {
        key_resp_2.keys = _key_resp_2_allKeys[_key_resp_2_allKeys.length - 1].name;  // just the last key pressed
        key_resp_2.rt = _key_resp_2_allKeys[_key_resp_2_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of memory_display_listComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function memory_display_listRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'memory_display_list' ---
    for (const thisComponent of memory_display_listComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_2.corr, level);
    }
    psychoJS.experiment.addData('key_resp_2.keys', key_resp_2.keys);
    if (typeof key_resp_2.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_2.rt', key_resp_2.rt);
        routineTimer.reset();
        }
    
    key_resp_2.stop();
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var currentWord;
var checkWord;
var memory_responseComponents;
function memory_responseRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'memory_response' ---
    t = 0;
    memory_responseClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // check if current word was in the list 
    
    currentWord = currentAnswers[memory_answer_loop.thisN]
    
    // check if the word is in the list (false not, true in the list)
    checkWord = currentList.indexOf(currentWord) >= 0 
    responseInstruction.setColor(new util.Color(textColor));
    responseInstruction.setPos([0, (vsize / 7)]);
    responseInstruction.setText('Was this word on the list?');
    responseInstruction.setFont(textFont);
    responseInstruction.setHeight(instructionTextSize);
    memory_word.setColor(new util.Color(textColor));
    memory_word.setText(currentAnswers[memory_answer_loop.thisN]);
    memory_word.setHeight(instructionTextSize*1.7);
    yes_button.setPos([memory_button.yes_button.x, memory_button.yes_button.y]);
    yes_button.setSize([memory_button.yes_button.width, memory_button.yes_button.height]);
    no_button.setPos([memory_button.no_button.x, memory_button.no_button.y]);
    no_button.setSize([memory_button.no_button.width, memory_button.no_button.height]);
    // setup some python lists for storing info about the memory_mouse
    // current position of the mouse:
    memory_mouse.x = [];
    memory_mouse.y = [];
    memory_mouse.leftButton = [];
    memory_mouse.midButton = [];
    memory_mouse.rightButton = [];
    memory_mouse.time = [];
    gotValidClick = false; // until a click is received
    // keep track of which components have finished
    memory_responseComponents = [];
    memory_responseComponents.push(responseInstruction);
    memory_responseComponents.push(memory_word);
    memory_responseComponents.push(yes_button);
    memory_responseComponents.push(no_button);
    memory_responseComponents.push(memory_mouse);
    
    for (const thisComponent of memory_responseComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


var mousePressed;
var clickPosition;
var checkClick;
function memory_responseRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'memory_response' ---
    // get current time
    t = memory_responseClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // estimate change in Y
    mousePressed = memory_mouse.getPressed()[0]
    
    // debug
    if (mousePressed){
        clickPosition = memory_mouse.getPos()
        checkClick = rectangleClickCheckImage(clickPosition,memory_button)    
        console.log('check click - popup var: ', checkClick)
        if (checkClick[0]) {
            continueRoutine = false;
            }
        }
    
    
    
    
    // *responseInstruction* updates
    if (t >= 0.0 && responseInstruction.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      responseInstruction.tStart = t;  // (not accounting for frame time here)
      responseInstruction.frameNStart = frameN;  // exact frame index
      
      responseInstruction.setAutoDraw(true);
    }

    
    // *memory_word* updates
    if (t >= 0.0 && memory_word.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      memory_word.tStart = t;  // (not accounting for frame time here)
      memory_word.frameNStart = frameN;  // exact frame index
      
      memory_word.setAutoDraw(true);
    }

    
    // *yes_button* updates
    if (t >= 0.0 && yes_button.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      yes_button.tStart = t;  // (not accounting for frame time here)
      yes_button.frameNStart = frameN;  // exact frame index
      
      yes_button.setAutoDraw(true);
    }

    
    // *no_button* updates
    if (t >= 0.0 && no_button.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      no_button.tStart = t;  // (not accounting for frame time here)
      no_button.frameNStart = frameN;  // exact frame index
      
      no_button.setAutoDraw(true);
    }

    // *memory_mouse* updates
    if (t >= 0.0 && memory_mouse.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      memory_mouse.tStart = t;  // (not accounting for frame time here)
      memory_mouse.frameNStart = frameN;  // exact frame index
      
      memory_mouse.status = PsychoJS.Status.STARTED;
      memory_mouse.mouseClock.reset();
      prevButtonState = memory_mouse.getPressed();  // if button is down already this ISN'T a new click
      }
    if (memory_mouse.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = memory_mouse.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          _mouseXYs = memory_mouse.getPos();
          memory_mouse.x.push(_mouseXYs[0]);
          memory_mouse.y.push(_mouseXYs[1]);
          memory_mouse.leftButton.push(_mouseButtons[0]);
          memory_mouse.midButton.push(_mouseButtons[1]);
          memory_mouse.rightButton.push(_mouseButtons[2]);
          memory_mouse.time.push(memory_mouse.mouseClock.getTime());
          if (gotValidClick === true) { // abort routine on response
            continueRoutine = false;
          }
        }
      }
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of memory_responseComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


var memoryResponse;
var choiceText;
var mouselength;
var mouse_tStart;
var button_tStart;
var validClick;
var compRT;
function memory_responseRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'memory_response' ---
    for (const thisComponent of memory_responseComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    if (((checkClick[1] === "yes_button") && checkWord) || ((checkClick[1] === "no_button") && !checkWord)){
        memoryResponse = 1
        console.log('correct')
        } else {
            memoryResponse = 0
            console.log('incorrect')
            }
    
    
    if (checkClick[1] === "yes_button"){
        choiceText = 'yes'
        } else if (checkClick[1] === "no_button"){
            choiceText = 'no'
            }
    // console.log('mouse-comp: ',mouseComprehension)
    // console.log('mouse-comp-time: ',mouseComprehension.time)
    
    
    // get reaction time from psychopy's mouse component 
    
    // get the amount of mouse clicks
    mouselength         = memory_mouse.time.length
    // get the start time of mouse click component
    mouse_tStart        = memory_mouse.tStart; 
    // get 'next button's starting second
    button_tStart       = yes_button.tStart 
    // get the latest mouse click-- which terminates the loop    
    validClick          = memory_mouse.time[mouselength-1]; 
    // add mouse's and button's starting seconds to the click RT, because it starts to count RT after these are displayed
    compRT              = validClick + mouse_tStart - button_tStart; 
    
    // console.log('mouse time',validClick)
    // console.log('mouse rt', compRT)    
    
    
    // get browser zoom
    browserZoom         = window.outerWidth*100 / window.innerWidth;
    // format date
    registeryDate       = util.MonotonicClock.getDateStr()
    registeryDate       = formatDateTime(registeryDate)
    
    // register data into lists
    data_setID.push(testid); // type of the set (AI or Human)
    data_itemID.push(currentAnswers[memory_answer_loop.thisN]); // item ID is the unique ID assigned to each stimulus displayed on the screen
    data_trialType.push("test"); // is this a test or a practice trial
    data_blockName.push("memory_test"); // what is the name of this block 
    data_totalTrialIndex.push("memory_trials"); // what is the trial number (total across all blocks)
    
    data_dateTime.push(registeryDate); // date and time 
    data_zoomLevel.push(browserZoom);
    data_passageFont.push([]); // what was the font used in this passage
    data_passageSpacing.push([]); // what was spacing used in this passage
    data_passageType.push([]);// what is the type of this set (informative, narrative)?
    data_passageLevel.push([]); // what is the grade level (2nd, 3rd)
    data_articleSkipType.push([]) // which button did they press (next or popup link)
    
    data_passageRT.push([]); // words per minute
    data_passageWPM.push([]); // words per minute
    data_passageWordCount.push([]); 
    data_feedbackRating.push([]) // rating of the likert scale
    
    data_compChoice.push(choiceText); // chosen option is registered as text
    data_surveyRT.push(compRT); // time to respond to comprehension question
    data_compAccuracy.push(memoryResponse); // empty because there is no accuracy during passages 
    // store data for psychoJS.experiment (ExperimentHandler)
    if (memory_mouse.x) {  psychoJS.experiment.addData('memory_mouse.x', memory_mouse.x[0])};
    if (memory_mouse.y) {  psychoJS.experiment.addData('memory_mouse.y', memory_mouse.y[0])};
    if (memory_mouse.leftButton) {  psychoJS.experiment.addData('memory_mouse.leftButton', memory_mouse.leftButton[0])};
    if (memory_mouse.midButton) {  psychoJS.experiment.addData('memory_mouse.midButton', memory_mouse.midButton[0])};
    if (memory_mouse.rightButton) {  psychoJS.experiment.addData('memory_mouse.rightButton', memory_mouse.rightButton[0])};
    if (memory_mouse.time) {  psychoJS.experiment.addData('memory_mouse.time', memory_mouse.time[0])};
    
    // the Routine "memory_response" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var memory_intervalComponents;
function memory_intervalRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'memory_interval' ---
    t = 0;
    memory_intervalClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(2.000000);
    // update component parameters for each repeat
    memory_interval_text.setColor(new util.Color(textColor));
    memory_interval_text.setFont(textFont);
    memory_interval_text.setHeight(instructionTextSize*2);
    // keep track of which components have finished
    memory_intervalComponents = [];
    memory_intervalComponents.push(memory_interval_text);
    
    for (const thisComponent of memory_intervalComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function memory_intervalRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'memory_interval' ---
    // get current time
    t = memory_intervalClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *memory_interval_text* updates
    if (t >= 0.0 && memory_interval_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      memory_interval_text.tStart = t;  // (not accounting for frame time here)
      memory_interval_text.frameNStart = frameN;  // exact frame index
      
      memory_interval_text.setAutoDraw(true);
    }

    frameRemains = 0.0 + 2 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (memory_interval_text.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      memory_interval_text.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of memory_intervalComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function memory_intervalRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'memory_interval' ---
    for (const thisComponent of memory_intervalComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var general_instructionsComponents;
function general_instructionsRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'general_instructions' ---
    t = 0;
    general_instructionsClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    generalInstructionsText.setPos([xAxisCenter, 0]);
    generalInstructionsText.setHeight(instructionTextSize*y_scale);
    generalInstructionsText.setAlignHoriz("left");
    
    
    console.log('slider size initial: ', sliderSize)
    nextButton_Instructions_4.setPos([buttonX, buttonY]);
    nextButton_Instructions_4.setSize([buttonWidth, buttonHeight]);
    // setup some python lists for storing info about the mouseInstructions_4
    // current position of the mouse:
    mouseInstructions_4.x = [];
    mouseInstructions_4.y = [];
    mouseInstructions_4.leftButton = [];
    mouseInstructions_4.midButton = [];
    mouseInstructions_4.rightButton = [];
    mouseInstructions_4.time = [];
    mouseInstructions_4.clicked_name = [];
    gotValidClick = false; // until a click is received
    // keep track of which components have finished
    general_instructionsComponents = [];
    general_instructionsComponents.push(generalInstructionsText);
    general_instructionsComponents.push(nextButton_Instructions_4);
    general_instructionsComponents.push(mouseInstructions_4);
    
    for (const thisComponent of general_instructionsComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function general_instructionsRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'general_instructions' ---
    // get current time
    t = general_instructionsClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *generalInstructionsText* updates
    if (t >= 0.0 && generalInstructionsText.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      generalInstructionsText.tStart = t;  // (not accounting for frame time here)
      generalInstructionsText.frameNStart = frameN;  // exact frame index
      
      generalInstructionsText.setAutoDraw(true);
    }

    
    // *nextButton_Instructions_4* updates
    if (t >= 0.2 && nextButton_Instructions_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      nextButton_Instructions_4.tStart = t;  // (not accounting for frame time here)
      nextButton_Instructions_4.frameNStart = frameN;  // exact frame index
      
      nextButton_Instructions_4.setAutoDraw(true);
    }

    // *mouseInstructions_4* updates
    if (t >= mouseDelayOther && mouseInstructions_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouseInstructions_4.tStart = t;  // (not accounting for frame time here)
      mouseInstructions_4.frameNStart = frameN;  // exact frame index
      
      mouseInstructions_4.status = PsychoJS.Status.STARTED;
      mouseInstructions_4.mouseClock.reset();
      prevButtonState = mouseInstructions_4.getPressed();  // if button is down already this ISN'T a new click
      }
    if (mouseInstructions_4.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = mouseInstructions_4.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          for (const obj of [nextButton_Instructions_4]) {
            if (obj.contains(mouseInstructions_4)) {
              gotValidClick = true;
              mouseInstructions_4.clicked_name.push(obj.name)
            }
          }
          if (gotValidClick === true) { 
            _mouseXYs = mouseInstructions_4.getPos();
            mouseInstructions_4.x.push(_mouseXYs[0]);
            mouseInstructions_4.y.push(_mouseXYs[1]);
            mouseInstructions_4.leftButton.push(_mouseButtons[0]);
            mouseInstructions_4.midButton.push(_mouseButtons[1]);
            mouseInstructions_4.rightButton.push(_mouseButtons[2]);
            mouseInstructions_4.time.push(mouseInstructions_4.mouseClock.getTime());
          }
          if (gotValidClick === true) { // abort routine on response
            continueRoutine = false;
          }
        }
      }
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of general_instructionsComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function general_instructionsRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'general_instructions' ---
    for (const thisComponent of general_instructionsComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // store data for psychoJS.experiment (ExperimentHandler)
    if (mouseInstructions_4.x) {  psychoJS.experiment.addData('mouseInstructions_4.x', mouseInstructions_4.x[0])};
    if (mouseInstructions_4.y) {  psychoJS.experiment.addData('mouseInstructions_4.y', mouseInstructions_4.y[0])};
    if (mouseInstructions_4.leftButton) {  psychoJS.experiment.addData('mouseInstructions_4.leftButton', mouseInstructions_4.leftButton[0])};
    if (mouseInstructions_4.midButton) {  psychoJS.experiment.addData('mouseInstructions_4.midButton', mouseInstructions_4.midButton[0])};
    if (mouseInstructions_4.rightButton) {  psychoJS.experiment.addData('mouseInstructions_4.rightButton', mouseInstructions_4.rightButton[0])};
    if (mouseInstructions_4.time) {  psychoJS.experiment.addData('mouseInstructions_4.time', mouseInstructions_4.time[0])};
    if (mouseInstructions_4.clicked_name) {  psychoJS.experiment.addData('mouseInstructions_4.clicked_name', mouseInstructions_4.clicked_name[0])};
    
    // the Routine "general_instructions" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var teaching_linksComponents;
function teaching_linksRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'teaching_links' ---
    t = 0;
    teaching_linksClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    ydifference = (vsize - imagesize[1])/2
    xdifference = (hsize - imagesize[0])/2
    
    // at first display, setup the article such that its borders 
    // meet screen's vertical size, then continue with the scrolled position
    
    imageY = ydifference;
     
    // setup some python lists for storing info about the teaching_link_mouse
    // current position of the mouse:
    teaching_link_mouse.x = [];
    teaching_link_mouse.y = [];
    teaching_link_mouse.leftButton = [];
    teaching_link_mouse.midButton = [];
    teaching_link_mouse.rightButton = [];
    teaching_link_mouse.time = [];
    teaching_link_mouse.clicked_name = [];
    gotValidClick = false; // until a click is received
    teaching_example_image.setPos([0, imageY]);
    teaching_example_image.setSize([2560, 2020]);
    teaching_example_image.setImage('stimuli/teaching_link.jpg');
    teachingLinksButton.setPos([buttonX, buttonY]);
    teachingLinksButton.setSize([buttonWidth, buttonHeight]);
    // keep track of which components have finished
    teaching_linksComponents = [];
    teaching_linksComponents.push(teaching_link_mouse);
    teaching_linksComponents.push(teaching_example_image);
    teaching_linksComponents.push(teachingLinksButton);
    
    for (const thisComponent of teaching_linksComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function teaching_linksRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'teaching_links' ---
    // get current time
    t = teaching_linksClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    document.body.style.zoom = "100%";
    
    // register current Y position
    oldY = teaching_example_image.pos[1];
    // estimate change in Y
    deltaY = (teaching_link_mouse.getWheelRel()[1]);
    // add to image position
    imageY = (oldY + deltaY);
    
    if (imageY != oldY) {
        // print coordinates and bounds for debugging
    //    console.log('new y, y difference, condition :', imageY, ydifference, imageY>=ydifference*2)
    //    console.log('abs(newy-oldy), abs(ydiff*2), condition :', Math.abs(imageY-oldY), Math.abs(ydifference*3), (Math.abs(imageY - oldY) < (Math.abs(ydifference*2))))
        // change img position if 1) it does not exceed the upper limit, 2) lower limit of image
        if ((imageY >= ydifference*3) && (Math.abs(imageY - ydifference) <= (Math.abs(ydifference*4)))) {
            console.log('old y, new y: ',oldY,imageY)
            // change image position
            teaching_example_image.pos = [0, imageY];
            }  
    }
    
    
    
    // *teaching_link_mouse* updates
    if (t >= 3.0 && teaching_link_mouse.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      teaching_link_mouse.tStart = t;  // (not accounting for frame time here)
      teaching_link_mouse.frameNStart = frameN;  // exact frame index
      
      teaching_link_mouse.status = PsychoJS.Status.STARTED;
      teaching_link_mouse.mouseClock.reset();
      prevButtonState = [0, 0, 0];  // if now button is down we will treat as 'new' click
      }
    if (teaching_link_mouse.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = teaching_link_mouse.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          for (const obj of [teachingLinksButton]) {
            if (obj.contains(teaching_link_mouse)) {
              gotValidClick = true;
              teaching_link_mouse.clicked_name.push(obj.name)
            }
          }
          _mouseXYs = teaching_link_mouse.getPos();
          teaching_link_mouse.x.push(_mouseXYs[0]);
          teaching_link_mouse.y.push(_mouseXYs[1]);
          teaching_link_mouse.leftButton.push(_mouseButtons[0]);
          teaching_link_mouse.midButton.push(_mouseButtons[1]);
          teaching_link_mouse.rightButton.push(_mouseButtons[2]);
          teaching_link_mouse.time.push(teaching_link_mouse.mouseClock.getTime());
          if (gotValidClick === true) { // abort routine on response
            continueRoutine = false;
          }
        }
      }
    }
    
    // *teaching_example_image* updates
    if (t >= 0.0 && teaching_example_image.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      teaching_example_image.tStart = t;  // (not accounting for frame time here)
      teaching_example_image.frameNStart = frameN;  // exact frame index
      
      teaching_example_image.setAutoDraw(true);
    }

    
    // *teachingLinksButton* updates
    if (t >= 0 && teachingLinksButton.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      teachingLinksButton.tStart = t;  // (not accounting for frame time here)
      teachingLinksButton.frameNStart = frameN;  // exact frame index
      
      teachingLinksButton.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of teaching_linksComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function teaching_linksRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'teaching_links' ---
    for (const thisComponent of teaching_linksComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // store data for psychoJS.experiment (ExperimentHandler)
    if (teaching_link_mouse.x) {  psychoJS.experiment.addData('teaching_link_mouse.x', teaching_link_mouse.x[0])};
    if (teaching_link_mouse.y) {  psychoJS.experiment.addData('teaching_link_mouse.y', teaching_link_mouse.y[0])};
    if (teaching_link_mouse.leftButton) {  psychoJS.experiment.addData('teaching_link_mouse.leftButton', teaching_link_mouse.leftButton[0])};
    if (teaching_link_mouse.midButton) {  psychoJS.experiment.addData('teaching_link_mouse.midButton', teaching_link_mouse.midButton[0])};
    if (teaching_link_mouse.rightButton) {  psychoJS.experiment.addData('teaching_link_mouse.rightButton', teaching_link_mouse.rightButton[0])};
    if (teaching_link_mouse.time) {  psychoJS.experiment.addData('teaching_link_mouse.time', teaching_link_mouse.time[0])};
    if (teaching_link_mouse.clicked_name) {  psychoJS.experiment.addData('teaching_link_mouse.clicked_name', teaching_link_mouse.clicked_name[0])};
    
    // the Routine "teaching_links" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var practiceInstructionsComponents;
function practiceInstructionsRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'practiceInstructions' ---
    t = 0;
    practiceInstructionsClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    generalInstructionsText_3.setPos([xAxisCenter, 0]);
    generalInstructionsText_3.setHeight(instructionTextSize*y_scale);
    generalInstructionsText_3.setAlignHoriz("left");
    
    
    console.log('slider size initial: ', sliderSize)
    nextButton_Instructions.setPos([buttonX, buttonY]);
    nextButton_Instructions.setSize([buttonWidth, buttonHeight]);
    // setup some python lists for storing info about the mouseInstructions_5
    // current position of the mouse:
    mouseInstructions_5.x = [];
    mouseInstructions_5.y = [];
    mouseInstructions_5.leftButton = [];
    mouseInstructions_5.midButton = [];
    mouseInstructions_5.rightButton = [];
    mouseInstructions_5.time = [];
    mouseInstructions_5.clicked_name = [];
    gotValidClick = false; // until a click is received
    // keep track of which components have finished
    practiceInstructionsComponents = [];
    practiceInstructionsComponents.push(generalInstructionsText_3);
    practiceInstructionsComponents.push(nextButton_Instructions);
    practiceInstructionsComponents.push(mouseInstructions_5);
    
    for (const thisComponent of practiceInstructionsComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function practiceInstructionsRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'practiceInstructions' ---
    // get current time
    t = practiceInstructionsClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *generalInstructionsText_3* updates
    if (t >= 0.0 && generalInstructionsText_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      generalInstructionsText_3.tStart = t;  // (not accounting for frame time here)
      generalInstructionsText_3.frameNStart = frameN;  // exact frame index
      
      generalInstructionsText_3.setAutoDraw(true);
    }

    
    // *nextButton_Instructions* updates
    if (t >= 0.2 && nextButton_Instructions.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      nextButton_Instructions.tStart = t;  // (not accounting for frame time here)
      nextButton_Instructions.frameNStart = frameN;  // exact frame index
      
      nextButton_Instructions.setAutoDraw(true);
    }

    // *mouseInstructions_5* updates
    if (t >= mouseDelayOther && mouseInstructions_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouseInstructions_5.tStart = t;  // (not accounting for frame time here)
      mouseInstructions_5.frameNStart = frameN;  // exact frame index
      
      mouseInstructions_5.status = PsychoJS.Status.STARTED;
      mouseInstructions_5.mouseClock.reset();
      prevButtonState = mouseInstructions_5.getPressed();  // if button is down already this ISN'T a new click
      }
    if (mouseInstructions_5.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = mouseInstructions_5.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          for (const obj of [nextButton_Instructions]) {
            if (obj.contains(mouseInstructions_5)) {
              gotValidClick = true;
              mouseInstructions_5.clicked_name.push(obj.name)
            }
          }
          if (gotValidClick === true) { 
            _mouseXYs = mouseInstructions_5.getPos();
            mouseInstructions_5.x.push(_mouseXYs[0]);
            mouseInstructions_5.y.push(_mouseXYs[1]);
            mouseInstructions_5.leftButton.push(_mouseButtons[0]);
            mouseInstructions_5.midButton.push(_mouseButtons[1]);
            mouseInstructions_5.rightButton.push(_mouseButtons[2]);
            mouseInstructions_5.time.push(mouseInstructions_5.mouseClock.getTime());
          }
          if (gotValidClick === true) { // abort routine on response
            continueRoutine = false;
          }
        }
      }
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of practiceInstructionsComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function practiceInstructionsRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'practiceInstructions' ---
    for (const thisComponent of practiceInstructionsComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // store data for psychoJS.experiment (ExperimentHandler)
    if (mouseInstructions_5.x) {  psychoJS.experiment.addData('mouseInstructions_5.x', mouseInstructions_5.x[0])};
    if (mouseInstructions_5.y) {  psychoJS.experiment.addData('mouseInstructions_5.y', mouseInstructions_5.y[0])};
    if (mouseInstructions_5.leftButton) {  psychoJS.experiment.addData('mouseInstructions_5.leftButton', mouseInstructions_5.leftButton[0])};
    if (mouseInstructions_5.midButton) {  psychoJS.experiment.addData('mouseInstructions_5.midButton', mouseInstructions_5.midButton[0])};
    if (mouseInstructions_5.rightButton) {  psychoJS.experiment.addData('mouseInstructions_5.rightButton', mouseInstructions_5.rightButton[0])};
    if (mouseInstructions_5.time) {  psychoJS.experiment.addData('mouseInstructions_5.time', mouseInstructions_5.time[0])};
    if (mouseInstructions_5.clicked_name) {  psychoJS.experiment.addData('mouseInstructions_5.clicked_name', mouseInstructions_5.clicked_name[0])};
    
    // the Routine "practiceInstructions" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var blockFileName;
var stimulus_file_counterbalanced;
var dotIndex;
var practiceCount;
var testCount;
var practiceSpacings;
var blockFonts;
var blockSpacings;
var blockFontCount;
var blockSpacingCount;
var repFontTrials;
var blockFontsForDisplay;
var blockConditionsForDisplay_temp;
var blockConditionsForRegistry_temp;
var getFitClash_all;
var getFitClash_spacing;
var getFitClash_font;
var iteration;
var blockConditionsForDisplay;
var blockConditionsForRegistry;
var passageSetIndices;
var trialIteration;
var blockIteration;
var setBlockParametersComponents;
function setBlockParametersRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'setBlockParameters' ---
    t = 0;
    setBlockParametersClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // block information (get from the blocks file) //
    
    // select the stimulus set file based on counterbalancing
    blockFileName                   = thisBlock['stimulus_file']   // name of the excel file that contains stim set for the block
    stimulus_file_counterbalanced   = blockFileName + ".xlsx"
    dotIndex                        = stimulus_file_counterbalanced.indexOf(".");
    blockName                       = stimulus_file_counterbalanced.slice(0, (dotIndex - 1)); // remove .xlsx from the file name
    blockName                       = blockName.substring(8)                  // remove "stimuli/" text from the block name
    blockName                       = "article_trials" // add counterbalance condition to the end of block name
    
    console.log({blockName, stimulus_file_counterbalanced, thisBlock})
    
    // practice and test trials, fonts and their names (get from the blocks file)
    practiceCount                   = thisBlock['practiceTrials']; // how many practice trials
    testCount                       = thisBlock['testTrials'];     // how many test trials
    practiceFonts                   = thisBlock['practiceFonts']; // font is used in practice
    practiceSpacings                = thisBlock['practiceSpacings']
    blockFonts                      = thisBlock['testFonts'];  // fonts used in this block
    blockSpacings                   = thisBlock['testSpacings']; // spacing levels used in this block
    
    /* Separate fonts and spacings, then count  */
    blockFonts                      = blockFonts.split(";")
    blockSpacings                   = blockSpacings.split(";")
    blockFontCount                  = blockFonts.length;
    blockSpacingCount               = blockSpacings.length;
    
    // add link conditions for the article study
    linkLabels                      = ['Link','NoLink']
    practiceLink                    = ['Link']
    linkCount                       = linkLabels.length
    
    repFontTrials                   = testCount / (blockFontCount * linkCount); // these two have to be divisible
    
    // reproduce block fonts in an array to match the trial count 
    // e.g. blockFonts = ["arial", "helvetica"], blockSpacings = ["0","0.05"], testCount = 4,repFontTrials = 1
    // new block font variable: blockFonts = ["arial", "helvetica", "arial", "helvetica"];
    blockFontsForDisplay                = [];
    blockConditionsForDisplay_temp      = []; // parameters of a trial is stored in this variable - only in loop: temp - 
    blockConditionsForRegistry_temp     = []; // parameters are registered as strings for registering fit-clashes - only in loop: temp - 
    
    /* create a dictionary for registering most accurate and fastest conditions */
    getFitClash_all                 = {}; // fit clash for the combination of conditions
    getFitClash_spacing             = {}; // fit-clash for only spacings
    getFitClash_font                = {}; // fit clash for only fonts
    
    iteration = -1
    
    
    for (var i = 0; i < blockFontCount; i++) {
    
        // initialize fit-clash storage only for fonts
        getFitClash_font[blockFonts[i]] = { "setid": [], "wpm": [], "accuracy": [] };
        //console.log("getFitClash_font[" + blockFonts[i] + "]:", getFitClash_font[blockFonts[i]]);
    
        for (var j = 0; j < linkCount; j++) {
            iteration               = iteration+1
            if (i === 0) {
                // initialize fit-clash storage only for link condition
                // do not repeat this for other font iterations, we only need one of each spacing
                getFitClash_spacing[linkLabels[j]] = { "setid": [], "wpm": [], "accuracy": [] };
                //console.log("getFitClash_spacing[" + spacingLabels[blockSpacings[j]] + "]:", getFitClash_spacing[spacingLabels[blockSpacings[j]]]);
            }
    
            // register all possible condition parameters both as
            // separate parameters, and as labels that describe the interaction
            // of these parameters
            //
            // parameters = ["Roboto Flex","0.05"];
            // description = ["Roboto Flex_sp3"]; (assuming spacing has three levels [-0.05,0,0,05],
            // example would be the third level of the spacing condition: sp3
            var currentConditionText        = blockFonts[i] + '_' + linkLabels[blockSpacings[j]];
            var currentConditionParameters  = [blockFonts[i], linkLabels[j]];
            
            blockConditionsForRegistry_temp.push(currentConditionText);
            blockConditionsForDisplay_temp.push(currentConditionParameters);
            // initialize fit-clash storage for interactions of font and spacing conditions
            getFitClash_all[currentConditionText] = { "setid": [], "wpm": [], "accuracy": [] };
            //console.log("getFitClash_all[" + currentConditionText + "]:", getFitClash_all[currentConditionText]);
        }
    }
    
    console.log({blockConditionsForRegistry_temp, blockConditionsForDisplay_temp})
    
    // reproduce conditions lists to match test trial count
    // if there are 6 test trials, 1 font, and 3 spacings
    //      • 1 x 3 has to be repeated twice to match test count
    //      • conds = ['roboto_sp1','roboto_sp2','roboto_sp3']
    //      • reproduced_conds =  ['roboto_sp1','roboto_sp2','roboto_sp3','roboto_sp1','roboto_sp2','roboto_sp3']
    
    // counterbalance order of font weights
    // ["arial", "helvetica", "arial", "helvetica"]
    // ["arial", "arial", "helvetica", "helvetica"] = (group 'A') = (PID = 0)
    // ["arial","helvetica", "helvetica", "arial"] = (group 'B') = (PID = 1) etc. 
    //if (repFontTrials > 1){
    blockConditionsForDisplay = [] // parameters of a trial is stored in this variable
    blockConditionsForRegistry = []  // parameters are registered as strings for registering fit-clashes
    for (var i = 0; i < repFontTrials; i++) {
        
        if (randomization_scheme === 'randomized') { 
            // randomize the order of conditions 
            blockConditionsForDisplay = blockConditionsForDisplay.concat(randomArrayShuffle(blockConditionsForDisplay_temp));
            blockConditionsForRegistry = blockConditionsForRegistry.concat(randomArrayShuffle(blockConditionsForRegistry_temp));        
            } else if (randomization_scheme  === 'counterbalanced'){ 
                // apply latin square counterbalancing to conditions
                                switch (cb_index) {
                      case 0:
                        blockConditionsForDisplay = [['Times','Link'], ['Times','NoLink'], ['Roboto','Link'], ['Roboto','NoLink'], ['Georgia','Link'], ['Georgia','NoLink']]
                        break;
                      case 1:
                        blockConditionsForDisplay = [['Times','NoLink'], ['Times','Link'], ['Roboto','NoLink'], ['Roboto','Link'], ['Georgia','NoLink'], ['Georgia','Link']]
                        break;
                      case 2:
                        blockConditionsForDisplay = [['Georgia','Link'],  ['Georgia','NoLink'],  ['Times','NoLink'],['Times','Link'], ['Roboto','Link'], ['Roboto','NoLink']]
                        break;
                      case 3:
                        blockConditionsForDisplay = [['Georgia','NoLink'],['Georgia','Link'], ['Times','Link'], ['Times','NoLink'],  ['Roboto','NoLink'], ['Roboto','Link']]
                        break;
                      case 4:
                        blockConditionsForDisplay = [['Roboto','Link'], ['Roboto','NoLink'],['Georgia','Link'], ['Georgia','NoLink'],  ['Times','NoLink'],['Times','Link' ]]
                        break;
                      case 5:
                        blockConditionsForDisplay = [['Roboto','NoLink'],['Roboto','Link'], ['Georgia','NoLink'],['Georgia','Link'],['Times','Link'], ['Times','NoLink']]
                        break;
                      default:
                        throw new Error(`Got invalid option ${cb_index}`);
                    }
    //            blockConditionsForDisplay = blockConditionsForDisplay.concat(balancedLatinSquare(blockConditionsForDisplay_temp,cb_index));
                blockConditionsForRegistry = blockConditionsForRegistry.concat(balancedLatinSquare(blockConditionsForRegistry_temp,cb_index));
    
                }
            
    }
    
    console.log({blockConditionsForDisplay, blockConditionsForRegistry})
    
    if (practiceCount >= 1) {
        // if there is a practice trial
        //console.log('practiceSpacings: ',practiceSpacings)
        //console.log('practiceSpacings type: ',typeof practiceSpacings)
        //console.log('spacingLabels: ',spacingLabels)
        //console.log('spacingLabels['+practiceSpacings.toString()+']: ',spacingLabels[practiceSpacings.toString()])
    
        // add the practice font to the beginning of the counterbalanced font order
        blockConditionsForDisplay.unshift([practiceFonts,practiceLink[0]]);
        blockConditionsForRegistry.unshift(practiceFonts+"_"+practiceLink[0])
    
        // counterbalance order of passage sets
        passageSetIndices = range(1,testCount);
        passageSetOrder   = passageSetIndices //randomArrayShuffle(passageSetIndices)
    //    if (randomization_scheme === 'randomized') { 
    //        // randomize passage order
    //        passageSetOrder   = randomArrayShuffle(passageSetIndices)
    //        } else if (randomization_scheme  === 'counterbalanced'){ 
    //            // apply latin square counterbalancing to passage order
    //            passageSetOrder   = balancedLatinSquare(passageSetIndices,PID);
    //            } 
        // always show the practice trial (0 index) the first, so we concatenate the latin-square
        // balanced/randomized array to 0. 
        passageSetOrder.unshift(0);
    
        } else {        
            // Order passage sets according to counterbalance groups
            // counterbalance order of passage sets
            passageSetIndices = range(0,testCount);
            passageSetOrder   = randomArrayShuffle(passageSetIndices)
    //    if (randomization_scheme === 'randomized') { 
    //        // randomize passage order
    //        passageSetOrder   = randomArrayShuffle(passageSetIndices)
    //        } else if (randomization_scheme  === 'counterbalanced'){ 
    //            // apply latin square counterbalancing to passage order
    //            passageSetOrder   = balancedLatinSquare(passageSetIndices,cb_index);
    //            } 
    
        }
    // initiate/reset trial iteration index
    trialIteration = -1;
    
    // block iteration index
    blockIteration = thisBlock.thisN;
    
    
    console.log('finished block preparation')
    
    
    // keep track of which components have finished
    setBlockParametersComponents = [];
    
    for (const thisComponent of setBlockParametersComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function setBlockParametersRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'setBlockParameters' ---
    // get current time
    t = setBlockParametersClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of setBlockParametersComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function setBlockParametersRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'setBlockParameters' ---
    for (const thisComponent of setBlockParametersComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // the Routine "setBlockParameters" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var passageCount;
var questionCount;
var proxyCount;
var feedbackCount;
var randomizePassages;
var rand_po;
var rand_qo;
var rand_proxyo;
var rand_fo;
var wordN;
var loopCount;
var articleid;
var currentArticle;
var linksheet;
var enableLinkClick;
var setTrialParametersComponents;
function setTrialParametersRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'setTrialParameters' ---
    t = 0;
    setTrialParametersClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // setup trial parameters
    trialproperties         = thisStimulus_list["trialproperties"] // cell that indicates the number of passages and questions
    trialproperties         = trialproperties.split(";") 
    
    //passage counts
    passageCount            = trialproperties[0]
    passageCount            = getItemCount(passageCount)
    //passageCount = Number(passageCount[passageCount.length-1]) // get the last element (count)
    
    //question counts
    questionCount           = trialproperties[1]
    questionCount           = getItemCount(questionCount)
    
    //questionCount = Number(questionCount[questionCount.length-1]) // get the last element (count)
    // proxy count
    proxyCount              = trialproperties[2]
    proxyCount              = getItemCount(proxyCount)
    
    //mini survey count
    feedbackCount           = trialproperties[3]
    feedbackCount           = getItemCount(feedbackCount)
    
    //feedbackSurveyCount = Number(feedbackSurveyCount[feedbackSurveyCount.length-1]) // get the last element (count)
    //randomization of passages within a set (1= yes, 0=no)
    randomizePassages       = trialproperties[3]
    randomizePassages       = Number(randomizePassages[randomizePassages.length-1]) // get the last element (count)
    //randomization of questions within a set (1= yes, 0=no)
    randomizeQuestions      = trialproperties[4]
    randomizeQuestions      = Number(randomizeQuestions[randomizeQuestions.length-1]) // get the last element (count)
    
    // create passage index array
    rand_po = [];
    for (var i = 0; i < passageCount; i++){
        rand_po.push(i+1);
    }
    
    // create question index array
    rand_qo = [];
    for (var i = 0; i < questionCount; i++){
        rand_qo.push(i+1);
    }
    
    // create proxy survey index array
    rand_proxyo = [];
    for (var i = 0; i < proxyCount; i++){
        rand_proxyo.push(i+1);
    }
    
    // create mini survey index array
    rand_fo = [];
    for (var i = 0; i < feedbackCount; i++){
        rand_fo.push(i+1);
    }
    
    //randomize passage and question orders
    if (randomizePassages === 1) {
        rand_po             = randomArrayShuffle(rand_po);
        
    }
    
    if (randomizeQuestions === 1) {
         rand_qo            = randomArrayShuffle(rand_qo);
         rand_fo            = randomArrayShuffle(rand_fo);
         rand_proxyo        = randomArrayShuffle(rand_proxyo);
    }
    
    // what is this trial: practice or test?
    trialType               = thisStimulus_list['trialType'];
    // increase trial iteration index for each iteration of stimulus list
    trialIteration          = trialIteration +1;
    totalTrialIterationIndex = totalTrialIterationIndex+1;
    
    //console.log('trialIteration: ',trialIteration)
    //console.log('leftTrialIndex: ',trialIteration + leftPassageTrial)
    //console.log('blockConditionsForRegistry',blockConditionsForRegistry)
    //console.log('blockConditionsForRegistry['+trialIteration+']',blockConditionsForRegistry[trialIteration])
    popupN = []
    
    popupN  = 0
    wordN   = 0
    
    loopCount = 999
    
    articleid               = thisStimulus_list["setID"];
    
    currentFont             = blockConditionsForDisplay[trialIteration][0];   
    currentLink             = blockConditionsForDisplay[trialIteration][1];
    
    currentArticle          = "stimuli/article_images/"+articleid + "_" + currentFont +"_"+currentLink + ".jpg"
    
    
    console.log('current font', currentFont)
    console.log('current link', currentLink)
    
    if (currentLink === "NoLink"){
        // assign a dummy sheet to prevent error in popup_selection loop when 
        // there is no links in the article. 
        linksheet               = "stimuli/link_sheets/article1_Times_links.xlsx";
        enableLinkClick         = 0
        } else {
            // assign the current article's link sheet if this article has linked words (blue words for popups)
              enableLinkClick         = 1
              linksheet               = "stimuli/link_sheets/"+articleid + "_"+ currentFont + "_links.xlsx";
            }
    
    console.log('current linksheet', linksheet)
    // keep track of which components have finished
    setTrialParametersComponents = [];
    
    for (const thisComponent of setTrialParametersComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function setTrialParametersRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'setTrialParameters' ---
    // get current time
    t = setTrialParametersClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of setTrialParametersComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function setTrialParametersRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'setTrialParameters' ---
    for (const thisComponent of setTrialParametersComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // the Routine "setTrialParameters" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var getWordsComponents;
function getWordsRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'getWords' ---
    t = 0;
    getWordsClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    console.log('current word from sheet ', thisWord_list_loop["text"])
    
    // create backup for word list
    init_temp_list = thisWord_list_loop
    
    wordN = wordN + 1
    // initialize dictionary for underlined word positions
    if (wordN === 1){    
        underlined_words = {}          
        }
    // initialize the key for this word
    underlined_words[thisWord_list_loop["text"]] = {}
    
    // process coordinates for screen alignment of words etc.
    underlined_words[thisWord_list_loop["text"]] = convertToNumber(init_temp_list,imagesize,vsize,y_scale)
    
    // print out for debugging
    console.log('all underlined words: ', underlined_words)
    console.log('current word ['+init_temp_list["text"]+']', underlined_words[init_temp_list["text"]])
    
    // keep track of which components have finished
    getWordsComponents = [];
    
    for (const thisComponent of getWordsComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function getWordsRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'getWords' ---
    // get current time
    t = getWordsClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of getWordsComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function getWordsRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'getWords' ---
    for (const thisComponent of getWordsComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // the Routine "getWords" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var instruction_proxyComponents;
function instruction_proxyRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'instruction_proxy' ---
    t = 0;
    instruction_proxyClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    text_5.setColor(new util.Color(textColor));
    text_5.setPos([xAxisCenter, 0]);
    text_5.setFont(textFont);
    text_5.setHeight(instructionTextSize*y_scale);
    text_5.setAlignHoriz("left");
    nextButton_questionInstructions_2.setPos([buttonX, buttonY]);
    nextButton_questionInstructions_2.setSize([buttonWidth, buttonHeight]);
    // setup some python lists for storing info about the mouseQuestionInstructions_2
    // current position of the mouse:
    mouseQuestionInstructions_2.x = [];
    mouseQuestionInstructions_2.y = [];
    mouseQuestionInstructions_2.leftButton = [];
    mouseQuestionInstructions_2.midButton = [];
    mouseQuestionInstructions_2.rightButton = [];
    mouseQuestionInstructions_2.time = [];
    mouseQuestionInstructions_2.clicked_name = [];
    gotValidClick = false; // until a click is received
    // keep track of which components have finished
    instruction_proxyComponents = [];
    instruction_proxyComponents.push(text_5);
    instruction_proxyComponents.push(nextButton_questionInstructions_2);
    instruction_proxyComponents.push(mouseQuestionInstructions_2);
    
    for (const thisComponent of instruction_proxyComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function instruction_proxyRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'instruction_proxy' ---
    // get current time
    t = instruction_proxyClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_5* updates
    if (t >= 0.0 && text_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_5.tStart = t;  // (not accounting for frame time here)
      text_5.frameNStart = frameN;  // exact frame index
      
      text_5.setAutoDraw(true);
    }

    
    // *nextButton_questionInstructions_2* updates
    if (t >= 0.2 && nextButton_questionInstructions_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      nextButton_questionInstructions_2.tStart = t;  // (not accounting for frame time here)
      nextButton_questionInstructions_2.frameNStart = frameN;  // exact frame index
      
      nextButton_questionInstructions_2.setAutoDraw(true);
    }

    // *mouseQuestionInstructions_2* updates
    if (t >= mouseDelayOther && mouseQuestionInstructions_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouseQuestionInstructions_2.tStart = t;  // (not accounting for frame time here)
      mouseQuestionInstructions_2.frameNStart = frameN;  // exact frame index
      
      mouseQuestionInstructions_2.status = PsychoJS.Status.STARTED;
      mouseQuestionInstructions_2.mouseClock.reset();
      prevButtonState = mouseQuestionInstructions_2.getPressed();  // if button is down already this ISN'T a new click
      }
    if (mouseQuestionInstructions_2.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = mouseQuestionInstructions_2.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          for (const obj of [nextButton_questionInstructions_2]) {
            if (obj.contains(mouseQuestionInstructions_2)) {
              gotValidClick = true;
              mouseQuestionInstructions_2.clicked_name.push(obj.name)
            }
          }
          if (gotValidClick === true) { 
            _mouseXYs = mouseQuestionInstructions_2.getPos();
            mouseQuestionInstructions_2.x.push(_mouseXYs[0]);
            mouseQuestionInstructions_2.y.push(_mouseXYs[1]);
            mouseQuestionInstructions_2.leftButton.push(_mouseButtons[0]);
            mouseQuestionInstructions_2.midButton.push(_mouseButtons[1]);
            mouseQuestionInstructions_2.rightButton.push(_mouseButtons[2]);
            mouseQuestionInstructions_2.time.push(mouseQuestionInstructions_2.mouseClock.getTime());
          }
          if (gotValidClick === true) { // abort routine on response
            continueRoutine = false;
          }
        }
      }
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of instruction_proxyComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function instruction_proxyRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'instruction_proxy' ---
    for (const thisComponent of instruction_proxyComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // store data for psychoJS.experiment (ExperimentHandler)
    if (mouseQuestionInstructions_2.x) {  psychoJS.experiment.addData('mouseQuestionInstructions_2.x', mouseQuestionInstructions_2.x[0])};
    if (mouseQuestionInstructions_2.y) {  psychoJS.experiment.addData('mouseQuestionInstructions_2.y', mouseQuestionInstructions_2.y[0])};
    if (mouseQuestionInstructions_2.leftButton) {  psychoJS.experiment.addData('mouseQuestionInstructions_2.leftButton', mouseQuestionInstructions_2.leftButton[0])};
    if (mouseQuestionInstructions_2.midButton) {  psychoJS.experiment.addData('mouseQuestionInstructions_2.midButton', mouseQuestionInstructions_2.midButton[0])};
    if (mouseQuestionInstructions_2.rightButton) {  psychoJS.experiment.addData('mouseQuestionInstructions_2.rightButton', mouseQuestionInstructions_2.rightButton[0])};
    if (mouseQuestionInstructions_2.time) {  psychoJS.experiment.addData('mouseQuestionInstructions_2.time', mouseQuestionInstructions_2.time[0])};
    if (mouseQuestionInstructions_2.clicked_name) {  psychoJS.experiment.addData('mouseQuestionInstructions_2.clicked_name', mouseQuestionInstructions_2.clicked_name[0])};
    
    // the Routine "instruction_proxy" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var trial_textboxComponents;
function trial_textboxRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'trial_textbox' ---
    t = 0;
    trial_textboxClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // create the excel column name that represents the current question text
    questionIdentifier              = ('proxy'+((rand_proxyo[first_textbox_trials.thisN]).toString())+'text')
    itemIDIdentifier                = ('proxy'+((rand_proxyo[first_textbox_trials.thisN]).toString())+'ID')
    // call the question text 
    currentTextboxItem              = thisStimulus_list[questionIdentifier];
    currentTextboxItem              = currentTextboxItem.split(";") 
    currentTextboxDescription       = currentTextboxItem[0] // label for this question, used for registry
    currentTextboxTextDemographic   = currentTextboxItem[1] // question text itself
    //console.log("text box items",currentTextboxItem);
    
    // what is the item type (passage, comp question, mini survey?)
    itemID                          = thisStimulus_list[itemIDIdentifier]+currentTextboxDescription;
    
    //what is the set ID
    setID                           = thisStimulus_list["setID"];
    
    // determine which of the text box question is about to be displayed
    // this is done to change the instructions regarding how to fill out 
    // the textbox depending on the question. 
    isMail                          = currentTextboxDescription === "email";
    isAge                           = currentTextboxDescription === "Age";
    isOtherText                     = (isAge || isMail) === false;
    //console.log("ismail",isMail,"isAge",isAge,"isOtherText",isOtherText);
    
    // change additional question text's centering and weight
    pressSpaceTextTextbox_2.bold      = true;
    question_textbox_2.bold           = true;
    
    pressSpaceTextTextbox_2.setAlignHoriz('left')
    question_textbox_2.setAlignHoriz('left')
    // start Timer for 500 ms periods to scan for the text 
    myClock.reset(); // reset the timer
    startTime                       = myClock.getTime();
    
    
    // conditional instructions on how to fill out the text box 
    if (isMail === true) {
            // how to fill the mail textbox
            textBoxFill = "";
            pressSpaceTextFill = "Do not use spaces, enter a valid email format: example@gmail.com\n\n";
        }
    if (isAge === true) {
            // how to fill the age textbox
            textBoxFill = "";
            pressSpaceTextFill ="Do not use spaces, enter your age in numbers; example: 31\n\n";
        }
    if (isOtherText === true) {
            // how to fill other textboxes
            textBoxFill = "";
            pressSpaceTextFill = "Do not use paragraph breaks at the start or end of your response \n\n";
        }
    fill_textbox_2.setText('');
    fill_textbox_2.refresh();
    fill_textbox_2.setPos(textboxPosition);
    fill_textbox_2.setSize(textboxSize);
    fill_textbox_2.setText(textBoxFill);
    fill_textbox_2.setFont(textFont);
    
    psychoJS.eventManager.clearEvents();
    clearEventAfterChoice = 1;
    fill_textbox_2.refresh()
    
    
    // start Timer for question reaction time
    myClock.reset(); // reset the timer
    startTime = myClock.getTime();
    question_textbox_2.setColor(new util.Color(textColor));
    question_textbox_2.setPos([xAxisCenter, questionsTopYaxis]);
    question_textbox_2.setText((currentTextboxTextDemographic + " (enter the text into the box below)"));
    question_textbox_2.setFont(textFont);
    question_textbox_2.setHeight(questionTextSize*y_scale);
    pressSpaceTextTextbox_2.setColor(new util.Color(textColor));
    pressSpaceTextTextbox_2.setPos([xAxisCenter, questionsBottomYaxis]);
    pressSpaceTextTextbox_2.setText((pressSpaceTextFill + "Please press the ENTER to advance to the next page after you type in."));
    pressSpaceTextTextbox_2.setFont(textFont);
    pressSpaceTextTextbox_2.setHeight(questionTextSize*y_scale);
    // keep track of which components have finished
    trial_textboxComponents = [];
    trial_textboxComponents.push(fill_textbox_2);
    trial_textboxComponents.push(question_textbox_2);
    trial_textboxComponents.push(pressSpaceTextTextbox_2);
    
    for (const thisComponent of trial_textboxComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function trial_textboxRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'trial_textbox' ---
    // get current time
    t = trial_textboxClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *fill_textbox_2* updates
    if (t >= 0.0 && fill_textbox_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      fill_textbox_2.tStart = t;  // (not accounting for frame time here)
      fill_textbox_2.frameNStart = frameN;  // exact frame index
      
      fill_textbox_2.setAutoDraw(true);
    }

    // get the text inside the text box
    textInput = fill_textbox_2._pixi.text;
    textInput = textInput.trim();
    // check if text input contains "@" and "." for mail input and not SPACES
    //containsSpace = (textInput.indexOf(' ') === -1);
    containsMail = ((textInput.indexOf('@') > -1) && (textInput.indexOf('.') > -1) &&  (textInput.indexOf("example") === -1));
    containsMail = containsMail;
    //console.log('contains mail')
    //console.log(containsMail);
    // allow continue only if age input consists of two characters, does not check for number type
    validAge = (textInput.length >= 2); 
    anyCharacterTyped = (textInput.length >= 1); 
    isNumber = isNaN(textInput) === false; //this condition returns true when input is a number
    validAge = validAge && isNumber; 
    
    if (clearEventAfterChoice === 1){
        psychoJS.eventManager.clearEvents();    // clears keypress events
                                                // does not terminate the loop prematurely        
        }
    
    currentTime = myClock.getTime();
    twoSecondElapsed = currentTime-startTime >=keyboardPauseDuration;
    if (twoSecondElapsed===true){
        if ((isMail && containsMail) || (isAge && validAge) || (isOtherText && anyCharacterTyped)) {
            //fill_textbox.borderColor= [0, 1, 0];
            if (clearEventAfterChoice === 1){
                psychoJS.eventManager.clearEvents(); // clears keypress events after choice so that previous unrelated space 
                clearEventAfterChoice=0;             // does not terminate the loop prematurely        
                }
            var _pj;
            function _pj_snippets(container) {
                function in_es6(left, right) {
                    if (((right instanceof Array) || ((typeof right) === "string"))) {
                        return (right.indexOf(left) > (- 1));
                    } else {
                        if (((right instanceof Map) || (right instanceof Set) || (right instanceof WeakMap) || (right instanceof WeakSet))) {
                            return right.has(left);
                        } else {
                            return (left in right);
                        }
                    }
                }
                container["in_es6"] = in_es6;
                return container;
            }
    
            _pj = {};
            _pj_snippets(_pj);
            keys = psychoJS.eventManager.getKeys();
            console.log(keys);
                if (keys.length) {
                    if (_pj.in_es6("return", keys)) {         
                        continueRoutine = false;            
                    } else {
                            psychoJS.eventManager.clearEvents();
                            questionReactionTime = myClock.getTime()-startTime
                        }
                }
        } else {
                //fill_textbox.borderColor= [1, 0, 0];
                psychoJS.eventManager.clearEvents(); 
            }
    }
    
    // *question_textbox_2* updates
    if (t >= 0.0 && question_textbox_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      question_textbox_2.tStart = t;  // (not accounting for frame time here)
      question_textbox_2.frameNStart = frameN;  // exact frame index
      
      question_textbox_2.setAutoDraw(true);
    }

    
    // *pressSpaceTextTextbox_2* updates
    if (t >= 0.0 && pressSpaceTextTextbox_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      pressSpaceTextTextbox_2.tStart = t;  // (not accounting for frame time here)
      pressSpaceTextTextbox_2.frameNStart = frameN;  // exact frame index
      
      pressSpaceTextTextbox_2.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of trial_textboxComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function trial_textboxRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'trial_textbox' ---
    for (const thisComponent of trial_textboxComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('fill_textbox_2.text',fill_textbox_2.text)
    // Run 'End Routine' code from getTextFill_2
    if (isAge===true) {
            participantAge = textInput;
        }
    
    // get browser zoom
    browserZoom = window.outerWidth*100 / window.innerWidth;
    
    // format date
    registeryDate = util.MonotonicClock.getDateStr()
    registeryDate = formatDateTime(registeryDate)
    
    // register data
    data_setID.push(setID); // type of the set (AI or Human)
    data_itemID.push(itemID); // item ID is the unique ID assigned to each stimulus displayed on the screen
    data_trialType.push(trialType); // is this a test or a practice trial
    data_blockName.push(blockName); // what is the name of this block 
    data_totalTrialIndex.push(totalTrialIterationIndex); // what is the trial number (total across all blocks)
    
    data_dateTime.push(registeryDate); // date and time 
    data_zoomLevel.push(browserZoom);
    data_passageFont.push(currentFont); // what was the font used in this passage
    
    data_passageRT.push([]); // words per minute
    data_passageWPM.push([]); // words per minute
    data_passageWordCount.push([]); 
    data_passageSpacing.push(currentLink); // what was the spacing used in this passage
    data_articleSkipType.push([]) // which button did they press (next or popup link)
    
    data_compAccuracy.push([]); // empty because there is no accuracy during passages 
    data_feedbackRating.push([]) // rating of the likert scale
    
    data_surveyRT.push(questionReactionTime); // time to respond to comprehension question
    data_compChoice.push(textInput) // chosen option is registered as text
    
    // the Routine "trial_textbox" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var instructions_passageComponents;
function instructions_passageRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'instructions_passage' ---
    t = 0;
    instructions_passageClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    readPassageInstructions.setColor(new util.Color(textColor));
    readPassageInstructions.setPos([xAxisCenter, 0]);
    readPassageInstructions.setFont(textFont);
    readPassageInstructions.setHeight(instructionTextSize*y_scale);
    readPassageInstructions.setAlignHoriz("left");
    
    nextButton_readingInstructions.setPos([buttonX, buttonY]);
    nextButton_readingInstructions.setSize([buttonWidth, buttonHeight]);
    // setup some python lists for storing info about the mouseReadingInstructions
    // current position of the mouse:
    mouseReadingInstructions.x = [];
    mouseReadingInstructions.y = [];
    mouseReadingInstructions.leftButton = [];
    mouseReadingInstructions.midButton = [];
    mouseReadingInstructions.rightButton = [];
    mouseReadingInstructions.time = [];
    mouseReadingInstructions.clicked_name = [];
    gotValidClick = false; // until a click is received
    // keep track of which components have finished
    instructions_passageComponents = [];
    instructions_passageComponents.push(readPassageInstructions);
    instructions_passageComponents.push(nextButton_readingInstructions);
    instructions_passageComponents.push(mouseReadingInstructions);
    
    for (const thisComponent of instructions_passageComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function instructions_passageRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'instructions_passage' ---
    // get current time
    t = instructions_passageClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *readPassageInstructions* updates
    if (t >= 0.0 && readPassageInstructions.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      readPassageInstructions.tStart = t;  // (not accounting for frame time here)
      readPassageInstructions.frameNStart = frameN;  // exact frame index
      
      readPassageInstructions.setAutoDraw(true);
    }

    
    // *nextButton_readingInstructions* updates
    if (t >= 0.2 && nextButton_readingInstructions.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      nextButton_readingInstructions.tStart = t;  // (not accounting for frame time here)
      nextButton_readingInstructions.frameNStart = frameN;  // exact frame index
      
      nextButton_readingInstructions.setAutoDraw(true);
    }

    // *mouseReadingInstructions* updates
    if (t >= mouseDelayOther && mouseReadingInstructions.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouseReadingInstructions.tStart = t;  // (not accounting for frame time here)
      mouseReadingInstructions.frameNStart = frameN;  // exact frame index
      
      mouseReadingInstructions.status = PsychoJS.Status.STARTED;
      mouseReadingInstructions.mouseClock.reset();
      prevButtonState = mouseReadingInstructions.getPressed();  // if button is down already this ISN'T a new click
      }
    if (mouseReadingInstructions.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = mouseReadingInstructions.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          for (const obj of [nextButton_readingInstructions]) {
            if (obj.contains(mouseReadingInstructions)) {
              gotValidClick = true;
              mouseReadingInstructions.clicked_name.push(obj.name)
            }
          }
          if (gotValidClick === true) { 
            _mouseXYs = mouseReadingInstructions.getPos();
            mouseReadingInstructions.x.push(_mouseXYs[0]);
            mouseReadingInstructions.y.push(_mouseXYs[1]);
            mouseReadingInstructions.leftButton.push(_mouseButtons[0]);
            mouseReadingInstructions.midButton.push(_mouseButtons[1]);
            mouseReadingInstructions.rightButton.push(_mouseButtons[2]);
            mouseReadingInstructions.time.push(mouseReadingInstructions.mouseClock.getTime());
          }
          if (gotValidClick === true) { // abort routine on response
            continueRoutine = false;
          }
        }
      }
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of instructions_passageComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function instructions_passageRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'instructions_passage' ---
    for (const thisComponent of instructions_passageComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // store data for psychoJS.experiment (ExperimentHandler)
    if (mouseReadingInstructions.x) {  psychoJS.experiment.addData('mouseReadingInstructions.x', mouseReadingInstructions.x[0])};
    if (mouseReadingInstructions.y) {  psychoJS.experiment.addData('mouseReadingInstructions.y', mouseReadingInstructions.y[0])};
    if (mouseReadingInstructions.leftButton) {  psychoJS.experiment.addData('mouseReadingInstructions.leftButton', mouseReadingInstructions.leftButton[0])};
    if (mouseReadingInstructions.midButton) {  psychoJS.experiment.addData('mouseReadingInstructions.midButton', mouseReadingInstructions.midButton[0])};
    if (mouseReadingInstructions.rightButton) {  psychoJS.experiment.addData('mouseReadingInstructions.rightButton', mouseReadingInstructions.rightButton[0])};
    if (mouseReadingInstructions.time) {  psychoJS.experiment.addData('mouseReadingInstructions.time', mouseReadingInstructions.time[0])};
    if (mouseReadingInstructions.clicked_name) {  psychoJS.experiment.addData('mouseReadingInstructions.clicked_name', mouseReadingInstructions.clicked_name[0])};
    
    // the Routine "instructions_passage" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var stdSpacing;
var currentConditions;
var articleIdentifier;
var currentArticleImage;
var wordCount;
var enablePopup;
var linkText;
var _scrolling_keyboard_allKeys;
var displayArticleComponents;
function displayArticleRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'displayArticle' ---
    t = 0;
    displayArticleClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // call font to be displayed in this trial
    stdSpacing              = spacingLabels[currentSpacing];
    currentConditions       = blockConditionsForRegistry[trialIteration];
    
    // create the excel column name that represents the current article's text
    articleIdentifier       = 'art1text'
    itemIDIdentifier        = 'art1ID'
    
    //what is the set ID
    setID                   = thisStimulus_list["setID"]
    
    // what is the passage ID (RX00001a etc.)
    itemID                  = thisStimulus_list[itemIDIdentifier];
    
    if(blockSpacingCount === 1){
        // omit spacing level name for the image file if there is only one spacing    
        currentArticleImage     = 'stimuli/article_images/'+setID+'_'+currentFont+'_'+currentLink+'.jpg'
    } else {
        // add spacing level name if there are multiple spacing levels which will be written in image file names
        currentArticleImage     = 'stimuli/article_images/'+setID+'_'+currentFont+'_'+currentLink+'_'+stdSpacing+'.jpg'
        }
    
    
    
    // call the passage text 
    currentArticle          = thisStimulus_list[articleIdentifier];
    console.log('current article text: ', currentArticle)
    currentArticle          = currentArticle.split(':').join("")
    currentArticle          = currentArticle.split('.').join("")
    // count how many words there are in this passage
    wordCount               = currentArticle;
    wordCount               = wordCount.replace(/'+/g, ''); // remove apostrophes
    wordCount               = wordCount.replace(/-+/g, ' '); // turn dashes into sapce
    wordCount               = wordCount.replace(/\s+/g, ' '); // turn more than one space into one space
    wordCount               = wordCount.replace(/\n\n/g," "); // turn line breaks into space
    wordCount               = wordCount.replace(/[\W_]+/g," "); // turn all non alphanumericals into space
    wordCount               = wordCount.trim(); // remove spaces at the beginning and end 
    wordCount               = wordCount.split(" "); // split the text by spaces
    wordCount               = wordCount.length // count how many words there are
    
    
    popupN = popupN + 1
    
    ydifference = (vsize - imagesize[1])/2
    xdifference = (hsize - imagesize[0])/2
    
    // at first display, setup the article such that its borders 
    // meet screen's vertical size, then continue with the scrolled position
    if (popupN === 1){
        imageY = ydifference;
        }
    console.log('vertical size: ',vsize)
    console.log('difference   : ',ydifference)
    enablePopup = 0
    linkText = ""
    
    // start Timer for question reaction time
    myClock.reset(); // reset the timer
    startTime = myClock.getTime();
    article_image.setPos([0, imageY]);
    article_image.setSize(imagesize);
    article_image.setImage(currentArticleImage);
    articleNextButton.setPos([buttonX, buttonY]);
    articleNextButton.setSize([buttonWidth, buttonHeight]);
    // setup some python lists for storing info about the article_mouse
    // current position of the mouse:
    article_mouse.x = [];
    article_mouse.y = [];
    article_mouse.leftButton = [];
    article_mouse.midButton = [];
    article_mouse.rightButton = [];
    article_mouse.time = [];
    article_mouse.clicked_name = [];
    gotValidClick = false; // until a click is received
    scrolling_keyboard.keys = undefined;
    scrolling_keyboard.rt = undefined;
    _scrolling_keyboard_allKeys = [];
    // keep track of which components have finished
    displayArticleComponents = [];
    displayArticleComponents.push(article_image);
    displayArticleComponents.push(articleNextButton);
    displayArticleComponents.push(article_mouse);
    displayArticleComponents.push(scrolling_keyboard);
    
    for (const thisComponent of displayArticleComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


var checkTime;
var scrolling_amount;
function displayArticleRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'displayArticle' ---
    // get current time
    t = displayArticleClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    document.body.style.zoom = "100%";
    
    
    // register current Y position
    oldY = article_image.pos[1];
    // estimate change in Y
    deltaY = (article_mouse.getWheelRel()[1]);
    // add to image position
    imageY = (oldY + deltaY);
    
    if (imageY != oldY) {
        // print coordinates and bounds for debugging
    //    console.log('new y, y difference, condition :', imageY, ydifference, imageY>=ydifference*2)
    //    console.log('abs(newy-oldy), abs(ydiff*2), condition :', Math.abs(imageY-oldY), Math.abs(ydifference*3), (Math.abs(imageY - oldY) < (Math.abs(ydifference*2))))
        // change img position if 1) it does not exceed the upper limit, 2) lower limit of image
        if ((imageY >= ydifference*3) && (Math.abs(imageY - ydifference) <= (Math.abs(ydifference*4)))) {
            console.log('old y, new y: ',oldY,imageY)
            // change image position
            article_image.pos = [0, imageY];
            // change position of clickable area of every underlined word after scrolling up/down
            underlined_words = changeWordPosition(deltaY,underlined_words)
            }  
    }
    
    
    
    if (enableLinkClick){
        
        
        
    //    console.log('popup click enabled')
        // register current Y position
        oldY = article_image.pos[1];
        // estimate change in Y
        mousePressed = article_mouse.getPressed()[0]
    
        // debug
        if (mousePressed){
            clickPosition = article_mouse.getPos()         
            checkTime = myClock.getTime();
            
            if (checkTime - startTime > 1){
                startTime = myClock.getTime();
                checkClick = rectangleClickCheck(clickPosition,underlined_words)  
                console.log('click position', clickPosition)
                console.log('check click - article var: ', checkClick)
                
                
                if (checkClick[0]) {        
                    enablePopup = 1
                    linkText = checkClick[1];
                    continueRoutine = false;
                }
                
            }
    
            }
    }
    // Run 'Each Frame' code from button_scrolling
    let scrolling_amount = 0;
    let skEvents = scrolling_keyboard.getEvents()
    if(isKeyPressed(skEvents, 'up')) {
         scrolling_amount = -25;
    }
    
    if(isKeyPressed(skEvents, 'down')) {
         scrolling_amount = 25;
    }
    
    if (scrolling_amount != 0) {
        const newY = scrolling_amount + article_image.pos[1]
        
        if ((newY >= ydifference*3) && (Math.abs(newY - ydifference) <= (Math.abs(ydifference*4)))) {
            console.log('old y, new y: ',article_image.pos[1],newY)
             article_image.pos = [0, newY];
            underlined_words = changeWordPosition(scrolling_amount,underlined_words);
        }  
       
    }
    
    scrolling_keyboard.clearEvents()
    
    // Check if left mouse button is pressed
    //if (scrolling_mouse.getPressed()[0]) {
    //    const [result, clicked_button] = rectangleClickCheckImage(scrolling_mouse.getPos(),scrolling_buttons)
    //    let deltaY = 0;
    //    console.error(result, clicked_button)
    //    if (result) {
    //        if (clicked_button === 'up_button') {
    //                console.error('scrolling up')
    //                deltaY = 10
    //        }
    //        else if( clicked_button === 'down_button') {
    //                console.error('scrolling down')
    //                deltaY = -10
    //        } else {
    //                console.error('uknown button')
    //
    //        }
    //    
    //        article_image.pos = [0, article_image.pos[1] + deltaY];
    //        underlined_words = changeWordPosition(deltaY,underlined_words)
    //    }
    //    
    //}
    //
    //
    
    // *article_image* updates
    if (t >= 0.0 && article_image.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      article_image.tStart = t;  // (not accounting for frame time here)
      article_image.frameNStart = frameN;  // exact frame index
      
      article_image.setAutoDraw(true);
    }

    
    // *articleNextButton* updates
    if (t >= 0.3 && articleNextButton.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      articleNextButton.tStart = t;  // (not accounting for frame time here)
      articleNextButton.frameNStart = frameN;  // exact frame index
      
      articleNextButton.setAutoDraw(true);
    }

    // *article_mouse* updates
    if (t >= mouseDelay && article_mouse.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      article_mouse.tStart = t;  // (not accounting for frame time here)
      article_mouse.frameNStart = frameN;  // exact frame index
      
      article_mouse.status = PsychoJS.Status.STARTED;
      article_mouse.mouseClock.reset();
      prevButtonState = article_mouse.getPressed();  // if button is down already this ISN'T a new click
      }
    if (article_mouse.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = article_mouse.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          for (const obj of [articleNextButton]) {
            if (obj.contains(article_mouse)) {
              gotValidClick = true;
              article_mouse.clicked_name.push(obj.name)
            }
          }
          _mouseXYs = article_mouse.getPos();
          article_mouse.x.push(_mouseXYs[0]);
          article_mouse.y.push(_mouseXYs[1]);
          article_mouse.leftButton.push(_mouseButtons[0]);
          article_mouse.midButton.push(_mouseButtons[1]);
          article_mouse.rightButton.push(_mouseButtons[2]);
          article_mouse.time.push(article_mouse.mouseClock.getTime());
          if (gotValidClick === true) { // abort routine on response
            continueRoutine = false;
          }
        }
      }
    }
    
    // *scrolling_keyboard* updates
    if (t >= 0.0 && scrolling_keyboard.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      scrolling_keyboard.tStart = t;  // (not accounting for frame time here)
      scrolling_keyboard.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { scrolling_keyboard.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { scrolling_keyboard.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { scrolling_keyboard.clearEvents(); });
    }

    if (scrolling_keyboard.status === PsychoJS.Status.STARTED) {
      let theseKeys = scrolling_keyboard.getKeys({keyList: [], waitRelease: false});
      _scrolling_keyboard_allKeys = _scrolling_keyboard_allKeys.concat(theseKeys);
      if (_scrolling_keyboard_allKeys.length > 0) {
        scrolling_keyboard.keys = _scrolling_keyboard_allKeys[_scrolling_keyboard_allKeys.length - 1].name;  // just the last key pressed
        scrolling_keyboard.rt = _scrolling_keyboard_allKeys[_scrolling_keyboard_allKeys.length - 1].rt;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of displayArticleComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


var currentKeys;
var popupIndex;
var pressedButtonArticle;
var passageReactionTime;
var currentWPM;
function displayArticleRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'displayArticle' ---
    for (const thisComponent of displayArticleComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    if (enablePopup) {    
        currentKeys = Object.keys(underlined_words)
    
        popupIndex  = currentKeys.indexOf(checkClick[1])
        
        console.log('currentKeys', currentKeys)
        console.log('clicked', checkClick[1])
        console.log('popupIndex', popupIndex)
    
        // adjust back button and text Y axis based on paragraph length
        popup_buttons.back_text.y           = underlined_words[checkClick[1]].backY 
        popup_buttons.back_button.y         = underlined_words[checkClick[1]].backY 
        // register what the participant clicked
        pressedButtonArticle = "toPopup"
        
        console.log('popup buttons',popup_buttons)
    } else {
        pressedButtonArticle = "articleCompleted"
        popup_loop.finished = true 
        }
    // get reaction time from psychopy's mouse component 
    mouselength             = article_mouse.time.length
    // get the mouse component's starting second
    mouse_tStart            = article_mouse.tStart; 
    // get 'next button's starting second
    button_tStart           = articleNextButton.tStart 
    // get the latest mouse click-- which terminates the loop    
    validClick              = article_mouse.time[mouselength-1] || 0; 
     // add mouse's and button's starting seconds to the click RT, because it starts to count RT after these are displayed
    passageReactionTime     = validClick + mouse_tStart - button_tStart;
    
    // console.log('mouse time',validClick)
    // console.log('mouse rt', validClickTime)    
    
    
    // calculate words per minute
    currentWPM              = wordCount/(passageReactionTime/60);
    
    // get browser zoom
    browserZoom             = window.outerWidth*100 / window.innerWidth;
    
    // format date
    registeryDate           = util.MonotonicClock.getDateStr()
    registeryDate           = formatDateTime(registeryDate)
    
    // register data
    data_setID.push(setID); // type of the set (AI or Human)
    data_itemID.push(itemID); // item ID is the unique ID assigned to each stimulus displayed on the screen
    data_trialType.push(trialType); // is this a test or a practice trial
    data_blockName.push(blockName); // what is the name of this block 
    data_totalTrialIndex.push(totalTrialIterationIndex); // what is the trial number (total across all blocks)
    
    data_dateTime.push(registeryDate); // date and time 
    data_zoomLevel.push(browserZoom);
    
    data_passageFont.push(currentFont); // what was the font used in this passage
    data_passageSpacing.push(currentLink); // what was the spacing used in this passage
    data_passageRT.push(passageReactionTime); // reaction time
    data_passageWPM.push(currentWPM); // words per minute
    data_passageWordCount.push(wordCount); // how many words in this passage?
    data_passageType.push([]);// what is the type of this set (informative, narrative)?
    data_passageLevel.push([]); // what is the grade level (2nd, 3rd)
    data_articleSkipType.push(pressedButtonArticle) // which button did they press (next or popup link)
    
    
    data_feedbackRating.push([])        // rating of the likert scale
    data_compChoice.push(linkText);           // chosen option is registered as text
    data_surveyRT.push([]); // time to respond to comprehension question
    data_compAccuracy.push([]); // empty because there is no accuracy during passages
    
    
    /* words per minute registery for fit-clash  */ 
    if (trialType != "practice"){
    
        // console.log('getFitClash_spacing: ', getFitClash_spacing)
        // console.log('getFitClash_spacing['+stdSpacing+']: ', getFitClash_spacing[stdSpacing])
        // console.log('getFitClash_spacing['+stdSpacing+'][wpm]: ', getFitClash_spacing[stdSpacing]["wpm"])
    
        // console.log('getFitClashAll: ', getFitClash_all)
        // console.log('getFitClashAll['+currentConditions+']: ', getFitClash_all[currentConditions])
        // console.log('getFitClashAll['+currentConditions+'][wpm]: ', getFitClash_all[currentConditions]["wpm"])
    
        // console.log('getFitClash_font: ', getFitClash_font)
        // console.log('getFitClash_font['+currentFont+']: ', getFitClash_font[currentFont])
        // console.log('getFitClash_font['+currentFont+'][wpm]: ', getFitClash_font[currentFont]["wpm"])    
            
        
        
        // enable registery for test trials, exclude practice trials
        getFitClash_all[currentConditions].wpm.push(currentWPM) // push current wpm for cond interaction registry    
        getFitClash_spacing[currentLink].wpm.push(currentWPM) // push wpm only for spacing conditions
        getFitClash_font[currentFont].wpm.push(currentWPM) // push wpm for only font conditions 
        
        // register set ids
        getFitClash_all[currentConditions].setid.push(setID) // push SET ID for cond interaction registry
        getFitClash_spacing[currentLink].setid.push(setID) // push SET ID only for spacing conditions
        getFitClash_font[currentFont].setid.push(setID) // push SET ID for only font conditions 
    
    }
    // store data for psychoJS.experiment (ExperimentHandler)
    if (article_mouse.x) {  psychoJS.experiment.addData('article_mouse.x', article_mouse.x[0])};
    if (article_mouse.y) {  psychoJS.experiment.addData('article_mouse.y', article_mouse.y[0])};
    if (article_mouse.leftButton) {  psychoJS.experiment.addData('article_mouse.leftButton', article_mouse.leftButton[0])};
    if (article_mouse.midButton) {  psychoJS.experiment.addData('article_mouse.midButton', article_mouse.midButton[0])};
    if (article_mouse.rightButton) {  psychoJS.experiment.addData('article_mouse.rightButton', article_mouse.rightButton[0])};
    if (article_mouse.time) {  psychoJS.experiment.addData('article_mouse.time', article_mouse.time[0])};
    if (article_mouse.clicked_name) {  psychoJS.experiment.addData('article_mouse.clicked_name', article_mouse.clicked_name[0])};
    
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(scrolling_keyboard.corr, level);
    }
    psychoJS.experiment.addData('scrolling_keyboard.keys', scrolling_keyboard.keys);
    if (typeof scrolling_keyboard.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('scrolling_keyboard.rt', scrolling_keyboard.rt);
        }
    
    scrolling_keyboard.stop();
    // the Routine "displayArticle" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var ydifference_pop;
var xdifference_pop;
var imageY_pop;
var popupImageName;
var displayPopupComponents;
function displayPopupRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'displayPopup' ---
    t = 0;
    displayPopupClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    ydifference_pop = (vsize - popupsize[1])/2
    xdifference_pop = (hsize - popupsize[0])/2
    
    // at first display, setup the article such that its borders 
    // meet screen's vertical size, then continue with the scrolled position
    if (popupN === 1){
        imageY_pop = ydifference_pop;
        }
    
    
    itemID = articleid + "_" + "popup" + (popupIndex+1).toString()
    popupImageName = "stimuli/popup_images/" +itemID+"_"+currentFont+ ".jpg"
    
    console.log('popupimage: ',popupImageName)
    // start Timer for question reaction time
    myClock.reset(); // reset the timer
    startTime = myClock.getTime();
    popup_image.setPos([0, imageY_pop]);
    popup_image.setSize(popupsize);
    popup_image.setImage(popupImageName);
    close_button.setPos([popup_buttons.close_button.x, popup_buttons.close_button.y]);
    close_button.setSize([popup_buttons.close_button.width, popup_buttons.close_button.height]);
    back_button.setPos([popup_buttons.back_button.x, popup_buttons.back_button.y]);
    back_button.setSize([popup_buttons.back_button.width, popup_buttons.back_button.height]);
    back_text.setPos([popup_buttons.back_text.x, popup_buttons.back_text.y]);
    back_text.setSize([popup_buttons.back_text.width, popup_buttons.back_text.height]);
    // setup some python lists for storing info about the popup_mouse
    // current position of the mouse:
    popup_mouse.x = [];
    popup_mouse.y = [];
    popup_mouse.leftButton = [];
    popup_mouse.midButton = [];
    popup_mouse.rightButton = [];
    popup_mouse.time = [];
    gotValidClick = false; // until a click is received
    // keep track of which components have finished
    displayPopupComponents = [];
    displayPopupComponents.push(popup_image);
    displayPopupComponents.push(close_button);
    displayPopupComponents.push(back_button);
    displayPopupComponents.push(back_text);
    displayPopupComponents.push(popup_mouse);
    
    for (const thisComponent of displayPopupComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function displayPopupRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'displayPopup' ---
    // get current time
    t = displayPopupClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    document.body.style.zoom = "100%";
    // estimate change in Y
    mousePressed = popup_mouse.getPressed()[0]
    
    
    // enable pressing buttons after 1 s 
    currentTime = myClock.getTime();
    
    if (currentTime - startTime > 1){
        if (mousePressed){
            clickPosition = popup_mouse.getPos()
            checkClick = rectangleClickCheckImage(clickPosition,popup_buttons)    
            console.log('check click - popup var: ', checkClick)
            if (checkClick[0]) {
                continueRoutine = false;
                }
            }
    }
    
    
    
    // *popup_image* updates
    if (t >= 0.0 && popup_image.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      popup_image.tStart = t;  // (not accounting for frame time here)
      popup_image.frameNStart = frameN;  // exact frame index
      
      popup_image.setAutoDraw(true);
    }

    
    // *close_button* updates
    if (t >= 0.0 && close_button.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      close_button.tStart = t;  // (not accounting for frame time here)
      close_button.frameNStart = frameN;  // exact frame index
      
      close_button.setAutoDraw(true);
    }

    
    // *back_button* updates
    if (t >= 0.0 && back_button.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      back_button.tStart = t;  // (not accounting for frame time here)
      back_button.frameNStart = frameN;  // exact frame index
      
      back_button.setAutoDraw(true);
    }

    
    // *back_text* updates
    if (t >= 0.0 && back_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      back_text.tStart = t;  // (not accounting for frame time here)
      back_text.frameNStart = frameN;  // exact frame index
      
      back_text.setAutoDraw(true);
    }

    // *popup_mouse* updates
    if (t >= 0 && popup_mouse.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      popup_mouse.tStart = t;  // (not accounting for frame time here)
      popup_mouse.frameNStart = frameN;  // exact frame index
      
      popup_mouse.status = PsychoJS.Status.STARTED;
      popup_mouse.mouseClock.reset();
      prevButtonState = popup_mouse.getPressed();  // if button is down already this ISN'T a new click
      }
    if (popup_mouse.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = popup_mouse.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          _mouseXYs = popup_mouse.getPos();
          popup_mouse.x.push(_mouseXYs[0]);
          popup_mouse.y.push(_mouseXYs[1]);
          popup_mouse.leftButton.push(_mouseButtons[0]);
          popup_mouse.midButton.push(_mouseButtons[1]);
          popup_mouse.rightButton.push(_mouseButtons[2]);
          popup_mouse.time.push(popup_mouse.mouseClock.getTime());
        }
      }
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of displayPopupComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


var popupReactionTime;
var pressedButtonPopup;
function displayPopupRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'displayPopup' ---
    for (const thisComponent of displayPopupComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // get reaction time from psychopy's mouse component 
    mouselength             = popup_mouse.time.length
    // get the mouse component's starting second
    mouse_tStart            = popup_mouse.tStart; 
    // get 'next button's starting second
    button_tStart           = back_button.tStart 
    // get the latest mouse click-- which terminates the loop    
    validClick              = popup_mouse.time[mouselength-1] || 0; 
     // add mouse's and button's starting seconds to the click RT, because it starts to count RT after these are displayed
    popupReactionTime       = validClick + mouse_tStart - button_tStart;
    
    // console.log('mouse time',validClick)
    // console.log('mouse rt', validClickTime)    
    
    // register which button they have pressed 
    pressedButtonPopup      = checkClick[1]
    
    // calculate words per minute
    currentWPM              = (wordCount/(popupReactionTime/60));
    
    // get browser zoom
    browserZoom             = window.outerWidth*100 / window.innerWidth;
    
    // format date
    registeryDate           = util.MonotonicClock.getDateStr()
    registeryDate           = formatDateTime(registeryDate)
    
    // register data
    data_setID.push(setID); // type of the set (AI or Human)
    data_itemID.push(itemID); // item ID is the unique ID assigned to each stimulus displayed on the screen
    data_trialType.push(trialType); // is this a test or a practice trial
    data_blockName.push(blockName); // what is the name of this block 
    data_totalTrialIndex.push(totalTrialIterationIndex); // what is the trial number (total across all blocks)
    
    data_dateTime.push(registeryDate); // date and time 
    data_zoomLevel.push(browserZoom);
    
    data_passageFont.push(currentFont); // what was the font used in this passage
    data_passageSpacing.push(currentLink); // what was the spacing used in this passage
    data_passageRT.push(popupReactionTime); // reaction time
    data_passageWPM.push(currentWPM); // words per minute
    data_passageWordCount.push(wordCount); // how many words in this passage?
    data_passageType.push([]);// what is the type of this set (informative, narrative)?
    data_passageLevel.push([]); // what is the grade level (2nd, 3rd)
    data_articleSkipType.push(pressedButtonPopup) // which button did they press (next or popup link)
    
    
    data_feedbackRating.push([])        // rating of the likert scale
    data_compChoice.push([]);           // chosen option is registered as text
    data_surveyRT.push([]); // time to respond to comprehension question
    data_compAccuracy.push([]); // empty because there is no accuracy during passages
    
    /* words per minute registery for fit-clash  */ 
    if (trialType != "practice"){
    
        // console.log('getFitClash_spacing: ', getFitClash_spacing)
        // console.log('getFitClash_spacing['+stdSpacing+']: ', getFitClash_spacing[stdSpacing])
        // console.log('getFitClash_spacing['+stdSpacing+'][wpm]: ', getFitClash_spacing[stdSpacing]["wpm"])
    
        // console.log('getFitClashAll: ', getFitClash_all)
        // console.log('getFitClashAll['+currentConditions+']: ', getFitClash_all[currentConditions])
        // console.log('getFitClashAll['+currentConditions+'][wpm]: ', getFitClash_all[currentConditions]["wpm"])
    
        // console.log('getFitClash_font: ', getFitClash_font)
        // console.log('getFitClash_font['+currentFont+']: ', getFitClash_font[currentFont])
        // console.log('getFitClash_font['+currentFont+'][wpm]: ', getFitClash_font[currentFont]["wpm"])    
            
        
        
        // enable registery for test trials, exclude practice trials
        getFitClash_all[currentConditions].wpm.push(currentWPM) // push current wpm for cond interaction registry    
        getFitClash_spacing[currentLink].wpm.push(currentWPM) // push wpm only for spacing conditions
        getFitClash_font[currentFont].wpm.push(currentWPM) // push wpm for only font conditions 
        
        // register set ids
        getFitClash_all[currentConditions].setid.push(setID) // push SET ID for cond interaction registry
        getFitClash_spacing[currentLink].setid.push(setID) // push SET ID only for spacing conditions
        getFitClash_font[currentFont].setid.push(setID) // push SET ID for only font conditions 
    
    }
    // store data for psychoJS.experiment (ExperimentHandler)
    psychoJS.experiment.addData('popup_mouse.x', popup_mouse.x);
    psychoJS.experiment.addData('popup_mouse.y', popup_mouse.y);
    psychoJS.experiment.addData('popup_mouse.leftButton', popup_mouse.leftButton);
    psychoJS.experiment.addData('popup_mouse.midButton', popup_mouse.midButton);
    psychoJS.experiment.addData('popup_mouse.rightButton', popup_mouse.rightButton);
    psychoJS.experiment.addData('popup_mouse.time', popup_mouse.time);
    
    // the Routine "displayPopup" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var instructions_questionsComponents;
function instructions_questionsRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'instructions_questions' ---
    t = 0;
    instructions_questionsClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    text_2.setColor(new util.Color(textColor));
    text_2.setPos([xAxisCenter, 0]);
    text_2.setFont(textFont);
    text_2.setHeight(instructionTextSize*y_scale);
    text_2.setAlignHoriz("left");
    nextButton_questionInstructions.setPos([buttonX, buttonY]);
    nextButton_questionInstructions.setSize([buttonWidth, buttonHeight]);
    // setup some python lists for storing info about the mouseQuestionInstructions
    // current position of the mouse:
    mouseQuestionInstructions.x = [];
    mouseQuestionInstructions.y = [];
    mouseQuestionInstructions.leftButton = [];
    mouseQuestionInstructions.midButton = [];
    mouseQuestionInstructions.rightButton = [];
    mouseQuestionInstructions.time = [];
    mouseQuestionInstructions.clicked_name = [];
    gotValidClick = false; // until a click is received
    // keep track of which components have finished
    instructions_questionsComponents = [];
    instructions_questionsComponents.push(text_2);
    instructions_questionsComponents.push(nextButton_questionInstructions);
    instructions_questionsComponents.push(mouseQuestionInstructions);
    
    for (const thisComponent of instructions_questionsComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function instructions_questionsRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'instructions_questions' ---
    // get current time
    t = instructions_questionsClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_2* updates
    if (t >= 0.0 && text_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_2.tStart = t;  // (not accounting for frame time here)
      text_2.frameNStart = frameN;  // exact frame index
      
      text_2.setAutoDraw(true);
    }

    
    // *nextButton_questionInstructions* updates
    if (t >= 0.2 && nextButton_questionInstructions.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      nextButton_questionInstructions.tStart = t;  // (not accounting for frame time here)
      nextButton_questionInstructions.frameNStart = frameN;  // exact frame index
      
      nextButton_questionInstructions.setAutoDraw(true);
    }

    // *mouseQuestionInstructions* updates
    if (t >= mouseDelayOther && mouseQuestionInstructions.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouseQuestionInstructions.tStart = t;  // (not accounting for frame time here)
      mouseQuestionInstructions.frameNStart = frameN;  // exact frame index
      
      mouseQuestionInstructions.status = PsychoJS.Status.STARTED;
      mouseQuestionInstructions.mouseClock.reset();
      prevButtonState = mouseQuestionInstructions.getPressed();  // if button is down already this ISN'T a new click
      }
    if (mouseQuestionInstructions.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = mouseQuestionInstructions.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          for (const obj of [nextButton_questionInstructions]) {
            if (obj.contains(mouseQuestionInstructions)) {
              gotValidClick = true;
              mouseQuestionInstructions.clicked_name.push(obj.name)
            }
          }
          if (gotValidClick === true) { 
            _mouseXYs = mouseQuestionInstructions.getPos();
            mouseQuestionInstructions.x.push(_mouseXYs[0]);
            mouseQuestionInstructions.y.push(_mouseXYs[1]);
            mouseQuestionInstructions.leftButton.push(_mouseButtons[0]);
            mouseQuestionInstructions.midButton.push(_mouseButtons[1]);
            mouseQuestionInstructions.rightButton.push(_mouseButtons[2]);
            mouseQuestionInstructions.time.push(mouseQuestionInstructions.mouseClock.getTime());
          }
          if (gotValidClick === true) { // abort routine on response
            continueRoutine = false;
          }
        }
      }
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of instructions_questionsComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function instructions_questionsRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'instructions_questions' ---
    for (const thisComponent of instructions_questionsComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // store data for psychoJS.experiment (ExperimentHandler)
    if (mouseQuestionInstructions.x) {  psychoJS.experiment.addData('mouseQuestionInstructions.x', mouseQuestionInstructions.x[0])};
    if (mouseQuestionInstructions.y) {  psychoJS.experiment.addData('mouseQuestionInstructions.y', mouseQuestionInstructions.y[0])};
    if (mouseQuestionInstructions.leftButton) {  psychoJS.experiment.addData('mouseQuestionInstructions.leftButton', mouseQuestionInstructions.leftButton[0])};
    if (mouseQuestionInstructions.midButton) {  psychoJS.experiment.addData('mouseQuestionInstructions.midButton', mouseQuestionInstructions.midButton[0])};
    if (mouseQuestionInstructions.rightButton) {  psychoJS.experiment.addData('mouseQuestionInstructions.rightButton', mouseQuestionInstructions.rightButton[0])};
    if (mouseQuestionInstructions.time) {  psychoJS.experiment.addData('mouseQuestionInstructions.time', mouseQuestionInstructions.time[0])};
    if (mouseQuestionInstructions.clicked_name) {  psychoJS.experiment.addData('mouseQuestionInstructions.clicked_name', mouseQuestionInstructions.clicked_name[0])};
    
    // the Routine "instructions_questions" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var labelIdentifier;
var correctLabelIdentifier;
var currentQuestion;
var currentlabel;
var sliderLabels;
var correctLabelNo;
var tickMarks;
var correctAnswer;
var shuffledLabels;
var maxLabels;
var evenLabelCount;
var displayQuestionsComponents;
function displayQuestionsRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'displayQuestions' ---
    t = 0;
    displayQuestionsClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // create the excel column name that represents the current question text
    questionIdentifier              = ('ques'+((rand_qo[question_trials.thisN]).toString())+'text')
    labelIdentifier                 = ('ques'+((rand_qo[question_trials.thisN]).toString())+'label')
    itemIDIdentifier                = ('ques'+((rand_qo[question_trials.thisN]).toString())+'ID')
    correctLabelIdentifier          = ('ques'+((rand_qo[question_trials.thisN]).toString())+'correct')
    
    console.log('current question ID: ',questionIdentifier)
    
    // call the question text 
    currentQuestion                 = thisStimulus_list[questionIdentifier];
    currentlabel                    = thisStimulus_list[labelIdentifier];
    
    // what is the item type (passage, comp question, mini survey?)
    itemID                          = thisStimulus_list[itemIDIdentifier];
    
    //what is the set ID
    setID                           = thisStimulus_list["setID"]
    
    // change additional question text's centering and style
    questionText.setAlignHoriz('left')
    questionText.bold = true;
    questionPressInstruction.setAlignHoriz('left')
    questionPressInstruction.bold = true;
    
    // adjust slider vertical size depending on the number of options 
    // get slider labels from the excel file
    
    sliderLabels                    = thisStimulus_list[labelIdentifier];
    sliderLabels                    = sliderLabels.split(";"); 
    
    if (sliderLabels.length > 2) {
        sliderLabels.push("I don't know");
    }
    //sliderLabels.unshift("Prefer not to answer");
    // how many labels?
    labelCount                      = sliderLabels.length;
    
    // call correct label no 
    correctLabelNo                  = thisStimulus_list[correctLabelIdentifier]
    
    if (correctLabelNo === undefined){
        // if there is no correct answer cell in the sheet, accept last label as correct
        correctLabelNo              = labelCount - 1 // (last label will be correct)
        
        
        }else {
            // if there is a cell that indicate correct answer for comp questions
            if (isNaN(correctLabelNo)){
                // if label number is a string, convert it to number
                correctLabelNo      = Number(correctLabelNo);
            }
            // subtract one from the label number because javascript starts to read from 0 
            correctLabelNo          = correctLabelNo -1;
            
            if (sliderLabels.length > 2) {
                correctLabelNo -= 1;
            }
            
    }
    
    // console.log('correct label indx: ',correctLabelNo)
    
    // if there are less then 3 options on the slider, 
    // decrease the vertical size of the slider by half
    if (labelCount < 3){ 
            sliderSize[1] = (vsize*26/100)/2.5  
        } else {
             sliderSize[1] = vsize*26/100;
            }
    
    
    // console.log('slider labels: ',sliderLabels)
    // console.log('slider size: ',sliderSize)
    questionText.setColor(new util.Color(textColor));
    questionText.setPos([questionsXaxis, questionsTopYaxis]);
    questionText.setText(currentQuestion);
    questionText.setFont('Arial');
    questionText.setHeight(questionTextSize*y_scale);
    questionPressInstruction.setColor(new util.Color(textColor));
    questionPressInstruction.setPos([questionsXaxis, questionsBottomYaxis]);
    questionPressInstruction.setText('Click on the dot to the left of the correct answer\n\nPlease press the button on the right hand corner to continue after your choice');
    questionPressInstruction.setFont('Arial');
    questionPressInstruction.setHeight(questionTextSize*y_scale);
    radiobutton_1.setPos([0, 0]);
    radiobutton_1.setSize([radiobutton_size, radiobutton_size]);
    radiobutton_2.setPos([0, 0]);
    radiobutton_2.setSize([radiobutton_size, radiobutton_size]);
    radiobutton_3.setPos([0, 0]);
    radiobutton_3.setSize([radiobutton_size, radiobutton_size]);
    radiobutton_4.setPos([0, 0]);
    radiobutton_4.setSize([radiobutton_size, radiobutton_size]);
    radiobutton_5.setPos([0, 0]);
    radiobutton_5.setSize([radiobutton_size, radiobutton_size]);
    radiobutton_6.setPos([0, 0]);
    radiobutton_6.setSize([radiobutton_size, radiobutton_size]);
    radiobutton_7.setPos([0, 0]);
    radiobutton_7.setSize([radiobutton_size, radiobutton_size]);
    radiobutton_8.setPos([0, 0]);
    radiobutton_8.setSize([radiobutton_size, radiobutton_size]);
    radiobutton_9.setPos([0, 0]);
    radiobutton_9.setSize([radiobutton_size, radiobutton_size]);
    questionSlider.reset()
    // Run 'Begin Routine' code from updateAndRegister
    
    ////////////////////////////////////////////////
    //// UPDATE SLIDER LABELS, SIZE, COLOR ETC. ////
    ////////////////////////////////////////////////
    
    // get slider labels from the excel file
    sliderLabels                    = thisStimulus_list[labelIdentifier];
    sliderLabels                    = [...sliderLabels.split(";"), "I don't know"];
    
    if (sliderLabels.length == 3 ) {
        sliderLabels.pop()
    }
    
    //sliderLabels.unshift("Prefer not to answer");
    labelCount                      = sliderLabels.length;
    
    // create tick marks so that data registry makes sense in terms of scores of each 
    // label: start from 1 not 0.
    tickMarks                       = range(1,labelCount);
    
    
    // get the correct answer which is indexed by correct question headers from the excel file
    correctAnswer                   = sliderLabels[sliderLabels.length - 2]; // -1 because index starts with 0
    
    // print correct label
    //console.log('correct answer: ',correctAnswer)
    // shuffle slider labels after you get the correct answer
    if (sliderLabels.length > 2 ) {
        sliderLabels.pop()
    }
    shuffledLabels                  = randomArrayShuffle(sliderLabels)
    
    if (sliderLabels.length > 2 ) {
        shuffledLabels = ["I don't know", ...shuffledLabels]
    }
    
    // display shuffled labels as tick marks 
    // console.log('slider labels shuffled', shuffledLabels)
    questionSlider.setLabels(shuffledLabels);
    
    // change ticks of the slider
    questionSlider.setTicks(tickMarks);    
    
    // change font of the slider text
    // console.log('slider font size', labelTextSize*y_scale)
    questionSlider.setFontSize(labelTextSize*y_scale);
    
    // adjust slider's position and size
    questionSlider._pos             = sliderPosition;
    questionSlider._size            = sliderSize;
    // change slider's color and marker properties
    questionSlider._lineColor       = col_white; // color of static circle ;
    
    labelPosition_y                 = Math.abs(sliderSize[1] / (labelCount-1));
    positions                       = [];
    
    // what are the maximum amount of radio buttons of this slider
    // count radiobutton_# components, now it is 9.
    maxLabels                       = 9;
    
    radiobutton_size                = [sliderSize[0]* 1.15, sliderSize[0]* 1.15];
    
    evenLabelCount                  = ((labelCount % 2) === 0);
    // name of radio components
    radioComponentName              = 'radiobutton_'
    
    if (evenLabelCount) {
        // console.log('here even label')
        // there is no middle label, so get the half of the distance
        // of labels and move on from there while positioning the radio buttons 
        labelPosition_y = labelPosition_y / 2;
    
        // initialize label position coordinate multiplier
        positionMultiplier = 1;
    
        // loop over number of labels
        for (var k = 0; k < labelCount; k++){
            
            // initialize label number index
            var buttonNo = k + 1;
    
            if ((k % 2) === 0) {
                // increase the position multipler at every odd number 
                // this increases the distance from the middle label every third label
                if (k > 1) {
    
                    positionMultiplier = positionMultiplier+2; 
                }  
                positions[k] = [sliderPosition[0], sliderPosition[1]+(positionMultiplier*labelPosition_y)];
    
            } else{
    
                positions[k] = [sliderPosition[0], sliderPosition[1]-(positionMultiplier*labelPosition_y)];
                
            }
            // enter the position and size values into individual label radio buttons  
            // position
            eval(radioComponentName + buttonNo + '._pos' +'= ['+positions[k][0] +', '+positions[k][1]+'];' );
            // size
            eval(radioComponentName + buttonNo + '._size' +'= ['+sliderSize[0]* 1.15+', '+sliderSize[0]* 1.15+'];' );
            // draw the changes 
            eval(radioComponentName + buttonNo + '._autoDraw' +'='+true+';');
            console.log('comprehension radio button'+buttonNo.toString(),eval(radioComponentName + buttonNo + '._pos' +'= ['+positions[k][0] +', '+positions[k][1]+'];' ));
        }    
        
    } else {
            // if there are odd number of labels
            
            // there will be a middle label which should be placed at the 
            // default position of the slider
            radiobutton_1._pos      = [sliderPosition[0], sliderPosition[1]];
            radiobutton_1._size     = radiobutton_size;
            eval(radioComponentName + 1 + '._pos' +'= ['+ sliderPosition[0] +','+ sliderPosition[1]+'];' );
            
            // size
            eval(radioComponentName + 1 + '._size' +'= ['+sliderSize[0]* 1.15+', '+sliderSize[0]* 1.15+'];' );        
            // initialize label position coordinate multiplier
            positionMultiplier = 0;
            // loop over labels
            for (var k = 1; k < labelCount; k++){            
                // initialize label number index
                var buttonNo = k + 1;
                
                if ((k % 2) === 0) {
    
                    positions[k] = [sliderPosition[0], sliderPosition[1]+(positionMultiplier*labelPosition_y)]; 
    
                } else{
                    // increase the position multipler at every odd number 
                    // this increases the distance from the middle label every third label
                    positionMultiplier =positionMultiplier+1 
                    positions[k] = [sliderPosition[0], sliderPosition[1]-(positionMultiplier*labelPosition_y)];   
                    
                }
                console.log('uneven k',k)
                console.log('uneven positionMultiplier',positionMultiplier)
                // enter the position and size values into individual label radio buttons  
                // position
                eval(radioComponentName + buttonNo + '._pos' +'= ['+ positions[k][0] +','+ positions[k][1]+'];' );
                // size
                eval(radioComponentName + buttonNo + '._size' +'= ['+sliderSize[0]* 1.15+', '+sliderSize[0]* 1.15+'];' );
                // draw the changes 
                eval(radioComponentName + buttonNo + '._autoDraw' +'='+true+';');
    
                console.log('comprehension radio button'+buttonNo.toString(),eval(radioComponentName + buttonNo + '._pos' +'= ['+positions[k][0] +', '+positions[k][1]+'];' ));
            }
        
        }
    
    
    
    // remove radio buttons of slider labels that do not exist
    for (var i = labelCount; i <= maxLabels-1 ; i++){
        console.log(i);
        var buttonNo = i + 1;
        positions[i] = [sliderPosition[0], sliderPosition[1]+labelPosition_y];
        eval(radioComponentName + buttonNo + '._pos'+'= ['+ 0 +','+ 0+'];' );
        eval(radioComponentName + buttonNo + '._size'+'='+1+';' );    
        eval(radioComponentName + buttonNo + '._autoDraw' +'='+true+';');
        
    }
    
    
    // console.log('comprehension slider', questionSlider)
    //////////////////////////////////////////////////////////////////
    // initiate input monitoring for conditional next-page command 
    // (next page command does not work unless participant chose one of 
    // the labels. 
    psychoJS.eventManager.clearEvents();
    clearEventAfterChoice = 1;
    
    // start Timer for question reaction time
    myClock.reset(); // reset the timer
    startTime = myClock.getTime();
    comprehensionButton.setPos([buttonX, buttonY]);
    comprehensionButton.setSize([buttonWidth, buttonHeight]);
    // setup some python lists for storing info about the comprehensionMouse
    // current position of the mouse:
    comprehensionMouse.x = [];
    comprehensionMouse.y = [];
    comprehensionMouse.leftButton = [];
    comprehensionMouse.midButton = [];
    comprehensionMouse.rightButton = [];
    comprehensionMouse.time = [];
    comprehensionMouse.clicked_name = [];
    gotValidClick = false; // until a click is received
    // keep track of which components have finished
    displayQuestionsComponents = [];
    displayQuestionsComponents.push(questionText);
    displayQuestionsComponents.push(questionPressInstruction);
    displayQuestionsComponents.push(radiobutton_1);
    displayQuestionsComponents.push(radiobutton_2);
    displayQuestionsComponents.push(radiobutton_3);
    displayQuestionsComponents.push(radiobutton_4);
    displayQuestionsComponents.push(radiobutton_5);
    displayQuestionsComponents.push(radiobutton_6);
    displayQuestionsComponents.push(radiobutton_7);
    displayQuestionsComponents.push(radiobutton_8);
    displayQuestionsComponents.push(radiobutton_9);
    displayQuestionsComponents.push(questionSlider);
    displayQuestionsComponents.push(comprehensionButton);
    displayQuestionsComponents.push(comprehensionMouse);
    
    for (const thisComponent of displayQuestionsComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


var compChoice;
function displayQuestionsRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'displayQuestions' ---
    // get current time
    t = displayQuestionsClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *questionText* updates
    if (t >= 0.0 && questionText.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      questionText.tStart = t;  // (not accounting for frame time here)
      questionText.frameNStart = frameN;  // exact frame index
      
      questionText.setAutoDraw(true);
    }

    
    // *questionPressInstruction* updates
    if (t >= 0.0 && questionPressInstruction.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      questionPressInstruction.tStart = t;  // (not accounting for frame time here)
      questionPressInstruction.frameNStart = frameN;  // exact frame index
      
      questionPressInstruction.setAutoDraw(true);
    }

    
    // *radiobutton_1* updates
    if (t >= 0.0 && radiobutton_1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      radiobutton_1.tStart = t;  // (not accounting for frame time here)
      radiobutton_1.frameNStart = frameN;  // exact frame index
      
      radiobutton_1.setAutoDraw(true);
    }

    
    // *radiobutton_2* updates
    if (t >= 0.0 && radiobutton_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      radiobutton_2.tStart = t;  // (not accounting for frame time here)
      radiobutton_2.frameNStart = frameN;  // exact frame index
      
      radiobutton_2.setAutoDraw(true);
    }

    
    // *radiobutton_3* updates
    if (t >= 0.0 && radiobutton_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      radiobutton_3.tStart = t;  // (not accounting for frame time here)
      radiobutton_3.frameNStart = frameN;  // exact frame index
      
      radiobutton_3.setAutoDraw(true);
    }

    
    // *radiobutton_4* updates
    if (t >= 0.0 && radiobutton_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      radiobutton_4.tStart = t;  // (not accounting for frame time here)
      radiobutton_4.frameNStart = frameN;  // exact frame index
      
      radiobutton_4.setAutoDraw(true);
    }

    
    // *radiobutton_5* updates
    if (t >= 0.0 && radiobutton_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      radiobutton_5.tStart = t;  // (not accounting for frame time here)
      radiobutton_5.frameNStart = frameN;  // exact frame index
      
      radiobutton_5.setAutoDraw(true);
    }

    
    // *radiobutton_6* updates
    if (t >= 0.0 && radiobutton_6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      radiobutton_6.tStart = t;  // (not accounting for frame time here)
      radiobutton_6.frameNStart = frameN;  // exact frame index
      
      radiobutton_6.setAutoDraw(true);
    }

    
    // *radiobutton_7* updates
    if (t >= 0.0 && radiobutton_7.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      radiobutton_7.tStart = t;  // (not accounting for frame time here)
      radiobutton_7.frameNStart = frameN;  // exact frame index
      
      radiobutton_7.setAutoDraw(true);
    }

    
    // *radiobutton_8* updates
    if (t >= 0.0 && radiobutton_8.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      radiobutton_8.tStart = t;  // (not accounting for frame time here)
      radiobutton_8.frameNStart = frameN;  // exact frame index
      
      radiobutton_8.setAutoDraw(true);
    }

    
    // *radiobutton_9* updates
    if (t >= 0.0 && radiobutton_9.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      radiobutton_9.tStart = t;  // (not accounting for frame time here)
      radiobutton_9.frameNStart = frameN;  // exact frame index
      
      radiobutton_9.setAutoDraw(true);
    }

    
    // *questionSlider* updates
    if (t >= 0.0 && questionSlider.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      questionSlider.tStart = t;  // (not accounting for frame time here)
      questionSlider.frameNStart = frameN;  // exact frame index
      
      questionSlider.setAutoDraw(true);
    }

    compChoice = questionSlider.getRating();
    
    // create a for loop using length of labels and update these like that
    for (let i = 0; i < labelCount; i++) {
        //console.log('current label for wrapwidth',i)
        //console.log('type of I',typeof i.toString())
        questionSlider._pixiLabels[i.toString()]._style._wordWrap = true
        questionSlider._pixiLabels[i.toString()]._style._wordWrapWidth = wrapWidthText    
        questionSlider._pixiLabels[i.toString()]._style._align = "left"
    }
    
    // *comprehensionButton* updates
    if ((questionSlider.rating) && comprehensionButton.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      comprehensionButton.tStart = t;  // (not accounting for frame time here)
      comprehensionButton.frameNStart = frameN;  // exact frame index
      
      comprehensionButton.setAutoDraw(true);
    }

    // *comprehensionMouse* updates
    if ((questionSlider.rating) && comprehensionMouse.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      comprehensionMouse.tStart = t;  // (not accounting for frame time here)
      comprehensionMouse.frameNStart = frameN;  // exact frame index
      
      comprehensionMouse.status = PsychoJS.Status.STARTED;
      comprehensionMouse.mouseClock.reset();
      prevButtonState = comprehensionMouse.getPressed();  // if button is down already this ISN'T a new click
      }
    if (comprehensionMouse.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = comprehensionMouse.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          for (const obj of [comprehensionButton]) {
            if (obj.contains(comprehensionMouse)) {
              gotValidClick = true;
              comprehensionMouse.clicked_name.push(obj.name)
            }
          }
          if (gotValidClick === true) { 
            _mouseXYs = comprehensionMouse.getPos();
            comprehensionMouse.x.push(_mouseXYs[0]);
            comprehensionMouse.y.push(_mouseXYs[1]);
            comprehensionMouse.leftButton.push(_mouseButtons[0]);
            comprehensionMouse.midButton.push(_mouseButtons[1]);
            comprehensionMouse.rightButton.push(_mouseButtons[2]);
            comprehensionMouse.time.push(comprehensionMouse.mouseClock.getTime());
          }
          if (gotValidClick === true) { // abort routine on response
            continueRoutine = false;
          }
        }
      }
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of displayQuestionsComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


var compChoiceText;
var compAccuracy;
function displayQuestionsRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'displayQuestions' ---
    for (const thisComponent of displayQuestionsComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('questionSlider.response', questionSlider.getRating());
    psychoJS.experiment.addData('questionSlider.rt', questionSlider.getRT());
    
    // get the selected option among the labels
    compChoiceText = shuffledLabels[compChoice-1]; // -1 because label index starts with 0, tick mark starts with 1. 
    // check if selected answer matches the correct answer
    if (correctAnswer === compChoiceText) {
            compAccuracy = 1;
            // console.log("CORRECT ANSWER TO COMP")
            
        } else {
            compAccuracy = 0;
            // console.log("WRONG ANSWER TO COMP")
        }
    
    
    
    // console.log('mouse-comp: ',mouseComprehension)
    // console.log('mouse-comp-time: ',mouseComprehension.time)
    
    
    // get reaction time from psychopy's mouse component 
    
    // get the amount of mouse clicks
    mouselength         = comprehensionMouse.time.length
    // get the start time of mouse click component
    mouse_tStart        = comprehensionMouse.tStart; 
    // get 'next button's starting second
    button_tStart       = questionText.tStart 
    // get the latest mouse click-- which terminates the loop    
    validClick          = comprehensionMouse.time[mouselength-1]; 
    // add mouse's and button's starting seconds to the click RT, because it starts to count RT after these are displayed
    compRT              = validClick + mouse_tStart - button_tStart; 
    
    // console.log('mouse time',validClick)
    // console.log('mouse rt', compRT)    
    
    
    // get browser zoom
    browserZoom         = window.outerWidth*100 / window.innerWidth;
    // format date
    registeryDate       = util.MonotonicClock.getDateStr()
    registeryDate       = formatDateTime(registeryDate)
    
    // register data into lists
    data_setID.push(setID); // type of the set (AI or Human)
    data_itemID.push(itemID); // item ID is the unique ID assigned to each stimulus displayed on the screen
    data_trialType.push(trialType); // is this a test or a practice trial
    data_blockName.push(blockName); // what is the name of this block 
    data_totalTrialIndex.push(totalTrialIterationIndex); // what is the trial number (total across all blocks)
    
    data_dateTime.push(registeryDate); // date and time 
    data_zoomLevel.push(browserZoom);
    data_passageFont.push(currentFont); // what was the font used in this passage
    data_passageSpacing.push(currentLink); // what was spacing used in this passage
    data_passageType.push([]);// what is the type of this set (informative, narrative)?
    data_passageLevel.push([]); // what is the grade level (2nd, 3rd)
    data_articleSkipType.push([]) // which button did they press (next or popup link)
    
    
    
    data_passageRT.push([]); // words per minute
    data_passageWPM.push([]); // words per minute
    data_passageWordCount.push([]); 
    data_feedbackRating.push([]) // rating of the likert scale
    
    data_compChoice.push(compChoiceText); // chosen option is registered as text
    data_surveyRT.push(compRT); // time to respond to comprehension question
    data_compAccuracy.push(compAccuracy); // empty because there is no accuracy during passages 
    
    /* accuracy registery for fit-clash  */ 
    if (trialType != "practice"){
        
        // enable registery for test trials, exclude practice trials
        getFitClash_all[currentConditions].accuracy.push(compAccuracy) // push current accuracy for cond interaction registry
        getFitClash_spacing[currentLink].accuracy.push(compAccuracy) // push accuracy only for spacing conditions
        getFitClash_font[currentFont].accuracy.push(compAccuracy) // push accuracy for only font conditions 
    
    }
    
    // remove radio buttons so that they won't appear at the center in next trial
    for (var i = 0; i < maxLabels; i++) {
        var buttonNo = i + 1;
        eval(radioComponentName + buttonNo + '._pos'+'= ['+ 0 +','+ 0+'];' );
        eval(radioComponentName + buttonNo + '._size'+'='+1+';' );    
        
        }
    // store data for psychoJS.experiment (ExperimentHandler)
    if (comprehensionMouse.x) {  psychoJS.experiment.addData('comprehensionMouse.x', comprehensionMouse.x[0])};
    if (comprehensionMouse.y) {  psychoJS.experiment.addData('comprehensionMouse.y', comprehensionMouse.y[0])};
    if (comprehensionMouse.leftButton) {  psychoJS.experiment.addData('comprehensionMouse.leftButton', comprehensionMouse.leftButton[0])};
    if (comprehensionMouse.midButton) {  psychoJS.experiment.addData('comprehensionMouse.midButton', comprehensionMouse.midButton[0])};
    if (comprehensionMouse.rightButton) {  psychoJS.experiment.addData('comprehensionMouse.rightButton', comprehensionMouse.rightButton[0])};
    if (comprehensionMouse.time) {  psychoJS.experiment.addData('comprehensionMouse.time', comprehensionMouse.time[0])};
    if (comprehensionMouse.clicked_name) {  psychoJS.experiment.addData('comprehensionMouse.clicked_name', comprehensionMouse.clicked_name[0])};
    
    // the Routine "displayQuestions" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var feedbackSurveyIdentifier;
var currentMiniQuestion;
var currentMiniLabel;
var displayFeedbackSurveyComponents;
function displayFeedbackSurveyRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'displayFeedbackSurvey' ---
    t = 0;
    displayFeedbackSurveyClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // create the excel column name that represents the current question text
    feedbackSurveyIdentifier    = ('feedback'+((rand_fo[feedback_trials.thisN]).toString())+'text')
    labelIdentifier             = ('feedback'+((rand_fo[feedback_trials.thisN]).toString())+'label')
    itemIDIdentifier            = ('feedback'+((rand_fo[feedback_trials.thisN]).toString())+'ID')
    
    // console.log('rand_fo',rand_fo)
    // console.log('feedback this N',feedback_trials.thisN)
    // console.log('feedback survey identifier', feedbackSurveyIdentifier)
    // console.log('feedback label identifier', labelIdentifier)
    // console.log('feedback ID identifier', itemIDIdentifier)
    
    // call the question text 
    currentMiniQuestion         = thisStimulus_list[feedbackSurveyIdentifier];
    currentMiniLabel            = thisStimulus_list[labelIdentifier];
    // what is the item type (passage, comp question, mini survey?)
    itemID                      = thisStimulus_list[itemIDIdentifier];
    //what is the set ID
    setID                       = thisStimulus_list["setID"]
    // change additional question text's centering and style
    feedbackSurveyText.setAlignHoriz('left')
    feedbackSurveyText.bold     = true;
    pressFeedbackSpaceText.setAlignHoriz('left')
    pressFeedbackSpaceText.bold = true;
    
    // adjust slider vertical size depending on the number of options 
    // get slider labels from the excel file
    sliderLabels                = thisStimulus_list[labelIdentifier];
    sliderLabels                = sliderLabels.split(";");
    //sliderLabels.unshift("Prefer not to answer");
    labelCount                  = (sliderLabels.length);
    // if there are less then 3 options on the slider, 
    // decrease the vertical size of the slider by half
    if (labelCount < 3){ 
            sliderSize[1] = (vsize*26/100)/2.5  
        } else {
             sliderSize[1] = vsize*26/100;
            }
    
    feedbackSurveyText.setColor(new util.Color(textColor));
    feedbackSurveyText.setPos([questionsXaxis, questionsTopYaxis]);
    feedbackSurveyText.setText(currentMiniQuestion);
    feedbackSurveyText.setFont(textFont);
    feedbackSurveyText.setHeight(questionTextSize*y_scale);
    pressFeedbackSpaceText.setColor(new util.Color(textColor));
    pressFeedbackSpaceText.setPos([questionsXaxis, questionsBottomYaxis]);
    pressFeedbackSpaceText.setText('Please press the button on the right hand corner to continue after your choice.');
    pressFeedbackSpaceText.setFont(textFont);
    pressFeedbackSpaceText.setHeight(questionTextSize*y_scale);
    fradiobutton_1.setPos([0, 0]);
    fradiobutton_1.setSize([radiobutton_size, radiobutton_size]);
    fradiobutton_2.setPos([0, 0]);
    fradiobutton_2.setSize([radiobutton_size, radiobutton_size]);
    fradiobutton_3.setPos([0, 0]);
    fradiobutton_3.setSize([radiobutton_size, radiobutton_size]);
    fradiobutton_4.setPos([0, 0]);
    fradiobutton_4.setSize([radiobutton_size, radiobutton_size]);
    fradiobutton_5.setPos([0, 0]);
    fradiobutton_5.setSize([radiobutton_size, radiobutton_size]);
    fradiobutton_6.setPos([0, 0]);
    fradiobutton_6.setSize([radiobutton_size, radiobutton_size]);
    fradiobutton_7.setPos([0, 0]);
    fradiobutton_7.setSize([radiobutton_size, radiobutton_size]);
    fradiobutton_8.setPos([0, 0]);
    fradiobutton_8.setSize([radiobutton_size, radiobutton_size]);
    fradiobutton_9.setPos([0, 0]);
    fradiobutton_9.setSize([radiobutton_size, radiobutton_size]);
    feedbackSurveySlider.reset()
    // Run 'Begin Routine' code from updateAndRegisterFeedback
    ////////////////////////////////////////////////
    //// UPDATE SLIDER LABELS, SIZE, COLOR ETC. ////
    ////////////////////////////////////////////////
    
    // get slider labels from the excel file
    sliderLabels = thisStimulus_list[labelIdentifier];
    sliderLabels = sliderLabels.split(";");
    //sliderLabels.unshift("Prefer not to answer");
    labelCount = (sliderLabels.length);
    sliderLabels = sliderLabels.reverse();
    // create tick marks so that data registry makes sense in terms of scores of each 
    // label: start from 1 not 0.
    tickMarks = range(1,labelCount);
    
    // display shuffled labels as tick marks 
    feedbackSurveySlider.setLabels(sliderLabels);
    // change ticks of the slider
    feedbackSurveySlider.setTicks(tickMarks);    
    // change font of the slider text
    feedbackSurveySlider.setFontSize(labelTextSize*y_scale);
    // adjust slider's position and size
    feedbackSurveySlider._pos = sliderPosition;
    feedbackSurveySlider._size = sliderSize;
    
    // change slider's color and marker properties
    feedbackSurveySlider._lineColor = col_white; // color of static circle ;
    
    labelPosition_y  = Math.abs(sliderSize[1] / (labelCount-1));
    positions = [];
    
    // what are the maximum amount of radio buttons of this slider
    // count radiobutton_# components, now it is 9.
    maxLabels = 9;
    
    radiobutton_size = [sliderSize[0]* 1.15, sliderSize[0]* 1.15];
    
    evenLabelCount = ((labelCount % 2) === 0);
    // name of radio components
    radioComponentName = 'fradiobutton_'
    
    if (evenLabelCount) {
        console.log('here even label')
        // there is no middle label, so get the half of the distance
        // of labels and move on from there while positioning the radio buttons 
        labelPosition_y = labelPosition_y / 2;
    
        // initialize label position coordinate multiplier
        positionMultiplier = 1;
    
        // loop over number of labels
        for (var k = 0; k < labelCount; k++){
            
            // initialize label number index
            var buttonNo = k + 1;                  
    
            if ((k % 2) === 0) {
                // increase the position multipler at every odd number 
                // this increases the distance from the middle label every third label
                if (k > 1) {
    
                    positionMultiplier =positionMultiplier+2; 
                }  
                positions[k] = [sliderPosition[0], sliderPosition[1]+(positionMultiplier*labelPosition_y)];
    
            } else{
    
                positions[k] = [sliderPosition[0], sliderPosition[1]-(positionMultiplier*labelPosition_y)];
                
            }
            // enter the position and size values into individual label radio buttons  
            // position
            eval(radioComponentName + buttonNo + '._pos' +'= ['+positions[k][0] +', '+positions[k][1]+'];' );
            // size
            eval(radioComponentName + buttonNo + '._size' +'= ['+sliderSize[0]* 1.15+', '+sliderSize[0]* 1.15+'];' );
            // draw the changes 
            eval(radioComponentName + buttonNo + '._autoDraw' +'='+true+';');
            console.log('comprehension radio button'+buttonNo.toString(),eval(radioComponentName + buttonNo + '._pos' +'= ['+positions[k][0] +', '+positions[k][1]+'];' ));
        }    
        
    } else {
            // if there are odd number of labels
            
            // there will be a middle label which should be placed at the 
            // default position of the slider
            fradiobutton_1._pos      = [sliderPosition[0], sliderPosition[1]];
            fradiobutton_1._size     = radiobutton_size;
            eval(radioComponentName + 1 + '._pos' +'= ['+ sliderPosition[0] +','+ sliderPosition[1]+'];' );
            // size
            eval(radioComponentName + 1 + '._size' +'= ['+sliderSize[0]* 1.15+', '+sliderSize[0]* 1.15+'];' );        
            // initialize label position coordinate multiplier
            positionMultiplier = 0;
            // loop over labels
            for (var k = 1; k < labelCount; k++){            
                // initialize label number index
                var buttonNo = k + 1;
                
                if ((k % 2) === 0) {
    
                    positions[k] = [sliderPosition[0], sliderPosition[1]+(positionMultiplier*labelPosition_y)]; 
    
                } else{
                    // increase the position multipler at every odd number 
                    // this increases the distance from the middle label every third label
                    positionMultiplier =positionMultiplier+1 
                    positions[k] = [sliderPosition[0], sliderPosition[1]-(positionMultiplier*labelPosition_y)];   
                    
                }
                console.log('uneven k',k)
                console.log('uneven positionMultiplier',positionMultiplier)
                // enter the position and size values into individual label radio buttons  
                // position
                eval(radioComponentName + buttonNo + '._pos' +'= ['+ positions[k][0] +','+ positions[k][1]+'];' );
                // size
                eval(radioComponentName + buttonNo + '._size' +'= ['+sliderSize[0]* 1.15+', '+sliderSize[0]* 1.15+'];' );
                // draw the changes 
                eval(radioComponentName + buttonNo + '._autoDraw' +'='+true+';');
    
                console.log('comprehension radio button'+buttonNo.toString(),eval(radioComponentName + buttonNo + '._pos' +'= ['+positions[k][0] +', '+positions[k][1]+'];' ));
            }
        
        }
    
    
    // remove radio buttons of slider labels that do not exist
    for (var i = labelCount; i <= maxLabels - 1 ; i++){
        console.log(i);
        var buttonNo = i + 1;
        positions[i] = [sliderPosition[0], sliderPosition[1]+labelPosition_y];
        eval(radioComponentName + buttonNo + '._pos'+'= ['+ 0 +','+ 0+'];' );
        eval(radioComponentName + buttonNo + '._size'+'='+1+';' );    
        eval(radioComponentName + buttonNo + '._autoDraw' +'='+true+';');
    }
    //////////////////////////////////////////////////////////////////
    // initiate input monitoring for conditional next-page command 
    // (next page command does not work unless participant chose one of 
    // the labels. 
    psychoJS.eventManager.clearEvents();
    clearEventAfterChoice = 1;
    
    // start Timer for question reaction time
    myClock.reset(); // reset the timer
    startTime = myClock.getTime();
    feedbackButton.setPos([buttonX, buttonY]);
    feedbackButton.setSize([buttonWidth, buttonHeight]);
    // setup some python lists for storing info about the feedbackMouse
    // current position of the mouse:
    feedbackMouse.x = [];
    feedbackMouse.y = [];
    feedbackMouse.leftButton = [];
    feedbackMouse.midButton = [];
    feedbackMouse.rightButton = [];
    feedbackMouse.time = [];
    feedbackMouse.clicked_name = [];
    gotValidClick = false; // until a click is received
    // keep track of which components have finished
    displayFeedbackSurveyComponents = [];
    displayFeedbackSurveyComponents.push(feedbackSurveyText);
    displayFeedbackSurveyComponents.push(pressFeedbackSpaceText);
    displayFeedbackSurveyComponents.push(fradiobutton_1);
    displayFeedbackSurveyComponents.push(fradiobutton_2);
    displayFeedbackSurveyComponents.push(fradiobutton_3);
    displayFeedbackSurveyComponents.push(fradiobutton_4);
    displayFeedbackSurveyComponents.push(fradiobutton_5);
    displayFeedbackSurveyComponents.push(fradiobutton_6);
    displayFeedbackSurveyComponents.push(fradiobutton_7);
    displayFeedbackSurveyComponents.push(fradiobutton_8);
    displayFeedbackSurveyComponents.push(fradiobutton_9);
    displayFeedbackSurveyComponents.push(feedbackSurveySlider);
    displayFeedbackSurveyComponents.push(feedbackButton);
    displayFeedbackSurveyComponents.push(feedbackMouse);
    
    for (const thisComponent of displayFeedbackSurveyComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


var feedbackChoice;
function displayFeedbackSurveyRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'displayFeedbackSurvey' ---
    // get current time
    t = displayFeedbackSurveyClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *feedbackSurveyText* updates
    if (t >= 0.0 && feedbackSurveyText.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      feedbackSurveyText.tStart = t;  // (not accounting for frame time here)
      feedbackSurveyText.frameNStart = frameN;  // exact frame index
      
      feedbackSurveyText.setAutoDraw(true);
    }

    
    // *pressFeedbackSpaceText* updates
    if (t >= 0.0 && pressFeedbackSpaceText.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      pressFeedbackSpaceText.tStart = t;  // (not accounting for frame time here)
      pressFeedbackSpaceText.frameNStart = frameN;  // exact frame index
      
      pressFeedbackSpaceText.setAutoDraw(true);
    }

    
    // *fradiobutton_1* updates
    if (t >= 0.0 && fradiobutton_1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      fradiobutton_1.tStart = t;  // (not accounting for frame time here)
      fradiobutton_1.frameNStart = frameN;  // exact frame index
      
      fradiobutton_1.setAutoDraw(true);
    }

    
    // *fradiobutton_2* updates
    if (t >= 0.0 && fradiobutton_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      fradiobutton_2.tStart = t;  // (not accounting for frame time here)
      fradiobutton_2.frameNStart = frameN;  // exact frame index
      
      fradiobutton_2.setAutoDraw(true);
    }

    
    // *fradiobutton_3* updates
    if (t >= 0.0 && fradiobutton_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      fradiobutton_3.tStart = t;  // (not accounting for frame time here)
      fradiobutton_3.frameNStart = frameN;  // exact frame index
      
      fradiobutton_3.setAutoDraw(true);
    }

    
    // *fradiobutton_4* updates
    if (t >= 0.0 && fradiobutton_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      fradiobutton_4.tStart = t;  // (not accounting for frame time here)
      fradiobutton_4.frameNStart = frameN;  // exact frame index
      
      fradiobutton_4.setAutoDraw(true);
    }

    
    // *fradiobutton_5* updates
    if (t >= 0.0 && fradiobutton_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      fradiobutton_5.tStart = t;  // (not accounting for frame time here)
      fradiobutton_5.frameNStart = frameN;  // exact frame index
      
      fradiobutton_5.setAutoDraw(true);
    }

    
    // *fradiobutton_6* updates
    if (t >= 0.0 && fradiobutton_6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      fradiobutton_6.tStart = t;  // (not accounting for frame time here)
      fradiobutton_6.frameNStart = frameN;  // exact frame index
      
      fradiobutton_6.setAutoDraw(true);
    }

    
    // *fradiobutton_7* updates
    if (t >= 0.0 && fradiobutton_7.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      fradiobutton_7.tStart = t;  // (not accounting for frame time here)
      fradiobutton_7.frameNStart = frameN;  // exact frame index
      
      fradiobutton_7.setAutoDraw(true);
    }

    
    // *fradiobutton_8* updates
    if (t >= 0.0 && fradiobutton_8.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      fradiobutton_8.tStart = t;  // (not accounting for frame time here)
      fradiobutton_8.frameNStart = frameN;  // exact frame index
      
      fradiobutton_8.setAutoDraw(true);
    }

    
    // *fradiobutton_9* updates
    if (t >= 0.0 && fradiobutton_9.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      fradiobutton_9.tStart = t;  // (not accounting for frame time here)
      fradiobutton_9.frameNStart = frameN;  // exact frame index
      
      fradiobutton_9.setAutoDraw(true);
    }

    
    // *feedbackSurveySlider* updates
    if (t >= 0.0 && feedbackSurveySlider.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      feedbackSurveySlider.tStart = t;  // (not accounting for frame time here)
      feedbackSurveySlider.frameNStart = frameN;  // exact frame index
      
      feedbackSurveySlider.setAutoDraw(true);
    }

    feedbackChoice = feedbackSurveySlider.getRating();
    
    // create a for loop using length of labels and update wrap width of these labels
    for (let i = 0; i < labelCount; i++) {
        //console.log('current label for wrapwidth',i)
        //console.log('type of I',typeof i.toString())
        feedbackSurveySlider._pixiLabels[i.toString()]._style._wordWrap = true
        feedbackSurveySlider._pixiLabels[i.toString()]._style._wordWrapWidth = wrapWidthText    
    }
    
    // *feedbackButton* updates
    if ((feedbackSurveySlider.rating) && feedbackButton.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      feedbackButton.tStart = t;  // (not accounting for frame time here)
      feedbackButton.frameNStart = frameN;  // exact frame index
      
      feedbackButton.setAutoDraw(true);
    }

    // *feedbackMouse* updates
    if ((feedbackSurveySlider.rating) && feedbackMouse.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      feedbackMouse.tStart = t;  // (not accounting for frame time here)
      feedbackMouse.frameNStart = frameN;  // exact frame index
      
      feedbackMouse.status = PsychoJS.Status.STARTED;
      feedbackMouse.mouseClock.reset();
      prevButtonState = feedbackMouse.getPressed();  // if button is down already this ISN'T a new click
      }
    if (feedbackMouse.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = feedbackMouse.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          for (const obj of [feedbackButton]) {
            if (obj.contains(feedbackMouse)) {
              gotValidClick = true;
              feedbackMouse.clicked_name.push(obj.name)
            }
          }
          if (gotValidClick === true) { 
            _mouseXYs = feedbackMouse.getPos();
            feedbackMouse.x.push(_mouseXYs[0]);
            feedbackMouse.y.push(_mouseXYs[1]);
            feedbackMouse.leftButton.push(_mouseButtons[0]);
            feedbackMouse.midButton.push(_mouseButtons[1]);
            feedbackMouse.rightButton.push(_mouseButtons[2]);
            feedbackMouse.time.push(feedbackMouse.mouseClock.getTime());
          }
          if (gotValidClick === true) { // abort routine on response
            continueRoutine = false;
          }
        }
      }
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of displayFeedbackSurveyComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


var feedbackChoiceText;
var feedbackRT;
function displayFeedbackSurveyRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'displayFeedbackSurvey' ---
    for (const thisComponent of displayFeedbackSurveyComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('feedbackSurveySlider.response', feedbackSurveySlider.getRating());
    psychoJS.experiment.addData('feedbackSurveySlider.rt', feedbackSurveySlider.getRT());
    
    // get the selected option among the labels
    feedbackChoiceText = sliderLabels[feedbackChoice-1]; // -1 because label index starts with 0, tick mark starts with 1. 
    
    // console.log('mouse-feedback: ',     mouseFeedback)
    // console.log('mouse-feedback-time: ',mouseFeedback.time)
    
    // get reaction time from psychopy's mouse component 
    mouselength             = feedbackMouse.time.length;
    // get the mouse component's starting second
    mouse_tStart            = feedbackMouse.tStart; 
    // get 'next button's starting second
    button_tStart           = feedbackSurveyText.tStart; 
    // get the latest mouse click-- which terminates the loop    
    validClick              = feedbackMouse.time[mouselength-1]; 
    // add mouse's and button's starting seconds to the click RT, because it starts to count RT after these are displayed
    feedbackRT          = validClick + mouse_tStart - button_tStart; 
    
    
    // console.log('mouse time',validClick)
    // console.log('mouse rt', feedbackRT)    
    
    
    // get browser zoom
    browserZoom             = window.outerWidth*100 / window.innerWidth;
    
    // format date
    registeryDate           = util.MonotonicClock.getDateStr()
    registeryDate           = formatDateTime(registeryDate)
    
    // register data
    data_setID.push(setID); // type of the set (AI or Human)
    data_itemID.push(itemID); // item ID is the unique ID assigned to each stimulus displayed on the screen
    data_trialType.push(trialType); // is this a test or a practice trial
    data_blockName.push(blockName); // what is the name of this block 
    data_totalTrialIndex.push(totalTrialIterationIndex); // what is the trial number (total across all blocks)
    
    data_dateTime.push(registeryDate); // date and time 
    data_zoomLevel.push(browserZoom);
    data_passageFont.push(currentFont); // what was the font used in this passage
    data_passageSpacing.push(currentLink); // what was spacing used in this passage
    data_passageType.push([]);// what is the type of this set (informative, narrative)?
    data_passageLevel.push([]); // what is the grade level (2nd, 3rd)
    data_articleSkipType.push([]) // which button did they press (next or popup link)
    
    data_passageRT.push([]); // words per minute
    data_passageWPM.push([]); // words per minute
    data_passageWordCount.push([]); 
    data_compAccuracy.push([]); // empty because there is no accuracy during passages 
    
    data_surveyRT.push(feedbackRT); // time to respond to comprehension question
    data_compChoice.push(feedbackChoiceText) // chosen option is registered as text
    data_feedbackRating.push(feedbackChoice) // rating of the likert scale
    
    
    // remove radio buttons so that they won't appear at the center in next trial
    for (var i = 0; i < maxLabels; i++) {
        var buttonNo = i + 1;
        eval(radioComponentName + buttonNo + '._pos'+'= ['+ 0 +','+ 0+'];' );
        eval(radioComponentName + buttonNo + '._size'+'='+1+';' );    
        
        }
    // store data for psychoJS.experiment (ExperimentHandler)
    if (feedbackMouse.x) {  psychoJS.experiment.addData('feedbackMouse.x', feedbackMouse.x[0])};
    if (feedbackMouse.y) {  psychoJS.experiment.addData('feedbackMouse.y', feedbackMouse.y[0])};
    if (feedbackMouse.leftButton) {  psychoJS.experiment.addData('feedbackMouse.leftButton', feedbackMouse.leftButton[0])};
    if (feedbackMouse.midButton) {  psychoJS.experiment.addData('feedbackMouse.midButton', feedbackMouse.midButton[0])};
    if (feedbackMouse.rightButton) {  psychoJS.experiment.addData('feedbackMouse.rightButton', feedbackMouse.rightButton[0])};
    if (feedbackMouse.time) {  psychoJS.experiment.addData('feedbackMouse.time', feedbackMouse.time[0])};
    if (feedbackMouse.clicked_name) {  psychoJS.experiment.addData('feedbackMouse.clicked_name', feedbackMouse.clicked_name[0])};
    
    // the Routine "displayFeedbackSurvey" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var endOfTest;
var performanceConditions;
var fitClashArray;
var conditionArray;
var typeIndex;
var sortedObject;
var fitParameters;
var clashParameters;
var disp_fitCondition;
var disp_fitWpm;
var disp_fitAcc;
var disp_clashCondition;
var disp_clashWpm;
var disp_clashAcc;
var findFastestComponents;
function findFastestRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'findFastest' ---
    t = 0;
    findFastestClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    /* Register WPM of the fonts to the database */ 
    // console.log('getFitClash_spacing',getFitClash_spacing)
    
    endOfTest = passageSetOrder.length    // get the trial number of the last test trials
    
    if (trialIteration+1 === endOfTest) {
    // initiate estimation of FIT-CLASH conditions at THE LAST TEST trial
         performanceConditions = blockConditionsForRegistry
         
         // remove the practice conditions from the fit-clash estimation conditions
         for (var i = 0; i < practiceCount; i++){
            performanceConditions.shift()
            }
        
        // console.log('performanceConditions: ',performanceConditions)
        // store all fit-clash dictionaries into an array 
        fitClashArray = []
        fitClashArray.push(getFitClash_all)
        fitClashArray.push(getFitClash_spacing)
        fitClashArray.push(getFitClash_font)
        // console.log('fitClashArray: ',fitClashArray)
        // store all conditions of individual fit-clash arrays into another array 
        conditionArray = []
        conditionArray.push(performanceConditions)
        conditionArray.push(Object.values(spacingLabels)) // actual spacing levels ("0","0.05",...) disrupt sorting algorithm, therefore we use std labels (sp1, sp2, ..., spN)
        conditionArray.push(blockFonts)
        // console.log('conditionArray: ',conditionArray)
    
        // get average of all fit-clash dictionaries for estimation 
        fitClashArray       = loopAverage(fitClashArray,conditionArray)    
        
        // sort conditions by accuracy ratings 
        if (experimentType === 'all'){
            typeIndex = 0
            } else if (experimentType === 'spacing'){
                typeIndex = 1
                } else if (experimentType === 'font'){
                    typeIndex = 2
                    
                    }
    
        sortedObject        = sortObjects(fitClashArray[typeIndex],Object.keys(fitClashArray[typeIndex]).length,"accuracy")    
        
        // estimate fit: first by accuracy (highest) then wpm (fastest)
        fitParameters       = getFit(sortedObject,"wpm")
        // estimate clash: first by accuracy (lowest) then wpm (slowest)
        clashParameters     = getClash(sortedObject,"wpm")
        
        disp_fitCondition   = fitParameters[0]
        disp_fitWpm         = Math.round(fitParameters[1]).toString()
        disp_fitAcc         = Math.round(fitParameters[2] * 100).toString()
        disp_clashCondition = clashParameters[0]
        disp_clashWpm       = Math.round(clashParameters[1]).toString()
        disp_clashAcc       = Math.round(clashParameters[2] * 100).toString()
    }
    
    
    
    // keep track of which components have finished
    findFastestComponents = [];
    
    for (const thisComponent of findFastestComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function findFastestRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'findFastest' ---
    // get current time
    t = findFastestClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of findFastestComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function findFastestRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'findFastest' ---
    for (const thisComponent of findFastestComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // the Routine "findFastest" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var preferenceInstructionsRoutineComponents;
function preferenceInstructionsRoutineRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'preferenceInstructionsRoutine' ---
    t = 0;
    preferenceInstructionsRoutineClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    text_3.setColor(new util.Color(textColor));
    text_3.setPos([xAxisCenter, 0]);
    text_3.setFont(textFont);
    text_3.setHeight(instructionTextSize*y_scale);
    text_3.setAlignHoriz('left')
    
    nextButtonDemographicInstructions.setPos([buttonX, buttonY]);
    nextButtonDemographicInstructions.setSize([buttonWidth, buttonHeight]);
    // setup some python lists for storing info about the mouseDemographicInstructions
    // current position of the mouse:
    mouseDemographicInstructions.x = [];
    mouseDemographicInstructions.y = [];
    mouseDemographicInstructions.leftButton = [];
    mouseDemographicInstructions.midButton = [];
    mouseDemographicInstructions.rightButton = [];
    mouseDemographicInstructions.time = [];
    mouseDemographicInstructions.clicked_name = [];
    gotValidClick = false; // until a click is received
    // keep track of which components have finished
    preferenceInstructionsRoutineComponents = [];
    preferenceInstructionsRoutineComponents.push(text_3);
    preferenceInstructionsRoutineComponents.push(nextButtonDemographicInstructions);
    preferenceInstructionsRoutineComponents.push(mouseDemographicInstructions);
    
    for (const thisComponent of preferenceInstructionsRoutineComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function preferenceInstructionsRoutineRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'preferenceInstructionsRoutine' ---
    // get current time
    t = preferenceInstructionsRoutineClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_3* updates
    if (t >= 0.0 && text_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_3.tStart = t;  // (not accounting for frame time here)
      text_3.frameNStart = frameN;  // exact frame index
      
      text_3.setAutoDraw(true);
    }

    
    // *nextButtonDemographicInstructions* updates
    if (t >= 0.2 && nextButtonDemographicInstructions.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      nextButtonDemographicInstructions.tStart = t;  // (not accounting for frame time here)
      nextButtonDemographicInstructions.frameNStart = frameN;  // exact frame index
      
      nextButtonDemographicInstructions.setAutoDraw(true);
    }

    // *mouseDemographicInstructions* updates
    if (t >= mouseDelayOther && mouseDemographicInstructions.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouseDemographicInstructions.tStart = t;  // (not accounting for frame time here)
      mouseDemographicInstructions.frameNStart = frameN;  // exact frame index
      
      mouseDemographicInstructions.status = PsychoJS.Status.STARTED;
      mouseDemographicInstructions.mouseClock.reset();
      prevButtonState = mouseDemographicInstructions.getPressed();  // if button is down already this ISN'T a new click
      }
    if (mouseDemographicInstructions.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = mouseDemographicInstructions.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          for (const obj of [nextButtonDemographicInstructions]) {
            if (obj.contains(mouseDemographicInstructions)) {
              gotValidClick = true;
              mouseDemographicInstructions.clicked_name.push(obj.name)
            }
          }
          if (gotValidClick === true) { 
            _mouseXYs = mouseDemographicInstructions.getPos();
            mouseDemographicInstructions.x.push(_mouseXYs[0]);
            mouseDemographicInstructions.y.push(_mouseXYs[1]);
            mouseDemographicInstructions.leftButton.push(_mouseButtons[0]);
            mouseDemographicInstructions.midButton.push(_mouseButtons[1]);
            mouseDemographicInstructions.rightButton.push(_mouseButtons[2]);
            mouseDemographicInstructions.time.push(mouseDemographicInstructions.mouseClock.getTime());
          }
          if (gotValidClick === true) { // abort routine on response
            continueRoutine = false;
          }
        }
      }
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of preferenceInstructionsRoutineComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function preferenceInstructionsRoutineRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'preferenceInstructionsRoutine' ---
    for (const thisComponent of preferenceInstructionsRoutineComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // store data for psychoJS.experiment (ExperimentHandler)
    if (mouseDemographicInstructions.x) {  psychoJS.experiment.addData('mouseDemographicInstructions.x', mouseDemographicInstructions.x[0])};
    if (mouseDemographicInstructions.y) {  psychoJS.experiment.addData('mouseDemographicInstructions.y', mouseDemographicInstructions.y[0])};
    if (mouseDemographicInstructions.leftButton) {  psychoJS.experiment.addData('mouseDemographicInstructions.leftButton', mouseDemographicInstructions.leftButton[0])};
    if (mouseDemographicInstructions.midButton) {  psychoJS.experiment.addData('mouseDemographicInstructions.midButton', mouseDemographicInstructions.midButton[0])};
    if (mouseDemographicInstructions.rightButton) {  psychoJS.experiment.addData('mouseDemographicInstructions.rightButton', mouseDemographicInstructions.rightButton[0])};
    if (mouseDemographicInstructions.time) {  psychoJS.experiment.addData('mouseDemographicInstructions.time', mouseDemographicInstructions.time[0])};
    if (mouseDemographicInstructions.clicked_name) {  psychoJS.experiment.addData('mouseDemographicInstructions.clicked_name', mouseDemographicInstructions.clicked_name[0])};
    
    // the Routine "preferenceInstructionsRoutine" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var pradiobutton_size;
var font_preferenceComponents;
function font_preferenceRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'font_preference' ---
    t = 0;
    font_preferenceClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // change additional question text's centering and style
    preferenceText.setAlignHoriz('left')
    preferenceText.bold     = true;
    
    // adjust slider vertical size depending on the number of options 
    // get slider labels from the excel file
    sliderLabels                = ["I strongly prefer A","I prefer A", "I strongly prefer B","I prefer B","I strongly prefer C","I prefer C","I don't prefer any of the font options"]
    sliderLabels                = sliderLabels.reverse();
    //sliderLabels.unshift("Prefer not to answer");
    labelCount                  = (sliderLabels.length);
    
    
    
    blockName = "post_survey"
    setID = "post_survey"
    itemID = "fontPreference"
    preference_image.setPos([0, (preference_y + 100)]);
    preference_image.setSize(preferencesize);
    preference_image.setImage('stimuli/preference_images/alltogether.jpg');
    preferenceText.setColor(new util.Color(textColor));
    preferenceText.setPos([questionsXaxis, preference_question_y]);
    preferenceText.setFont(textFont);
    preferenceText.setHeight(questionTextSize*y_scale);
    pradiobutton_1.setPos([0, 0]);
    pradiobutton_1.setSize([radiobutton_size, radiobutton_size]);
    pradiobutton_2.setPos([0, 0]);
    pradiobutton_2.setSize([radiobutton_size, radiobutton_size]);
    pradiobutton_3.setPos([0, 0]);
    pradiobutton_3.setSize([radiobutton_size, radiobutton_size]);
    pradiobutton_4.setPos([0, 0]);
    pradiobutton_4.setSize([radiobutton_size, radiobutton_size]);
    pradiobutton_5.setPos([0, 0]);
    pradiobutton_5.setSize([radiobutton_size, radiobutton_size]);
    pradiobutton_6.setPos([0, 0]);
    pradiobutton_6.setSize([radiobutton_size, radiobutton_size]);
    pradiobutton_7.setPos([0, 0]);
    pradiobutton_7.setSize([radiobutton_size, radiobutton_size]);
    pradiobutton_8.setPos([0, 0]);
    pradiobutton_8.setSize([radiobutton_size, radiobutton_size]);
    pradiobutton_9.setPos([0, 0]);
    pradiobutton_9.setSize([radiobutton_size, radiobutton_size]);
    preferenceSlider.reset()
    // create tick marks so that data registry makes sense in terms of scores of each 
    // label: start from 1 not 0.
    tickMarks = range(1,labelCount);
    
    // display shuffled labels as tick marks 
    preferenceSlider.setLabels(sliderLabels);
    // change ticks of the slider
    preferenceSlider.setTicks(tickMarks);    
    // change font of the slider text
    preferenceSlider.setFontSize(labelTextSize*y_scale);
    // adjust slider's position and size
    preferenceSlider._pos  = sliderPositionPreference
    preferenceSlider._size = sliderSize;
    
    
    console.log('slider size font pref: ', sliderSize)
    // change slider's color and marker properties
    preferenceSlider._lineColor = col_white; // color of static circle ;
    
    labelPosition_y  = Math.abs(sliderSize[1] / (labelCount-1));
    positions = [];
    
    // what are the maximum amount of radio buttons of this slider
    // count radiobutton_# components, now it is 9.
    maxLabels = 9;
    
    pradiobutton_size = [sliderSize[0]* 1.15, sliderSize[0]* 1.15];
    
    evenLabelCount = ((labelCount % 2) === 0);
    // name of radio components
    radioComponentName = 'pradiobutton_'
    
    if (evenLabelCount) {
        console.log('here even label')
        // there is no middle label, so get the half of the distance
        // of labels and move on from there while positioning the radio buttons 
        labelPosition_y = labelPosition_y / 2;
    
        // initialize label position coordinate multiplier
        positionMultiplier = 1;
    
        // loop over number of labels
        for (var k = 0; k < labelCount; k++){
            
            // initialize label number index
            var buttonNo = k + 1;                  
    
            if ((k % 2) === 0) {
                // increase the position multipler at every odd number 
                // this increases the distance from the middle label every third label
                if (k > 1) {
    
                    positionMultiplier =positionMultiplier+2; 
                }  
                positions[k] = [sliderPositionPreference[0], sliderPositionPreference[1]+(positionMultiplier*labelPosition_y)];
    
            } else{
    
                positions[k] = [sliderPositionPreference[0], sliderPositionPreference[1]-(positionMultiplier*labelPosition_y)];
                
            }
            // enter the position and size values into individual label radio buttons  
            // position
            eval(radioComponentName + buttonNo + '._pos' +'= ['+positions[k][0] +', '+positions[k][1]+'];' );
            // size
            eval(radioComponentName + buttonNo + '._size' +'= ['+sliderSize[0]* 1.15+', '+sliderSize[0]* 1.15+'];' );
            // draw the changes 
            eval(radioComponentName + buttonNo + '._autoDraw' +'='+true+';');
            console.log('comprehension radio button'+buttonNo.toString(),eval(radioComponentName + buttonNo + '._pos' +'= ['+positions[k][0] +', '+positions[k][1]+'];' ));
        }    
        
    } else {
            // if there are odd number of labels
            
            // there will be a middle label which should be placed at the 
            // default position of the slider
            pradiobutton_1._pos      = [sliderPositionPreference[0], sliderPositionPreference[1]];
            pradiobutton_1._size     = pradiobutton_size;
            eval(radioComponentName + 1 + '._pos' +'= ['+ sliderPositionPreference[0] +','+ sliderPositionPreference[1]+'];' );
            // size
            eval(radioComponentName + 1 + '._size' +'= ['+sliderSize[0]* 1.15+', '+sliderSize[0]* 1.15+'];' );        
            // initialize label position coordinate multiplier
            positionMultiplier = 0;
            // loop over labels
            for (var k = 1; k < labelCount; k++){            
                // initialize label number index
                var buttonNo = k + 1;
                
                if ((k % 2) === 0) {
    
                    positions[k] = [sliderPositionPreference[0], sliderPositionPreference[1]+(positionMultiplier*labelPosition_y)]; 
    
                } else{
                    // increase the position multipler at every odd number 
                    // this increases the distance from the middle label every third label
                    positionMultiplier =positionMultiplier+1 
                    positions[k] = [sliderPositionPreference[0], sliderPositionPreference[1]-(positionMultiplier*labelPosition_y)];   
                    
                }
                console.log('uneven k',k)
                console.log('uneven positionMultiplier',positionMultiplier)
                // enter the position and size values into individual label radio buttons  
                // position
                eval(radioComponentName + buttonNo + '._pos' +'= ['+ positions[k][0] +','+ positions[k][1]+'];' );
                // size
                eval(radioComponentName + buttonNo + '._size' +'= ['+sliderSize[0]* 1.15+', '+sliderSize[0]* 1.15+'];' );
                // draw the changes 
                eval(radioComponentName + buttonNo + '._autoDraw' +'='+true+';');
    
                console.log('comprehension radio button'+buttonNo.toString(),eval(radioComponentName + buttonNo + '._pos' +'= ['+positions[k][0] +', '+positions[k][1]+'];' ));
            }
        
        }
    
    
    // remove radio buttons of slider labels that do not exist
    for (var i = labelCount; i <= maxLabels - 1 ; i++){
        console.log(i);
        var buttonNo = i + 1;
        positions[i] = [sliderPositionPreference[0], sliderPositionPreference[1]+labelPosition_y];
        eval(radioComponentName + buttonNo + '._pos'+'= ['+ 0 +','+ 0+'];' );
        eval(radioComponentName + buttonNo + '._size'+'='+1+';' );    
        eval(radioComponentName + buttonNo + '._autoDraw' +'='+true+';');
    }
    //////////////////////////////////////////////////////////////////
    // initiate input monitoring for conditional next-page command 
    // (next page command does not work unless participant chose one of 
    // the labels. 
    psychoJS.eventManager.clearEvents();
    clearEventAfterChoice = 1;
    
    // start Timer for question reaction time
    myClock.reset(); // reset the timer
    startTime = myClock.getTime();
    preferenceButton.setPos([buttonX, buttonY]);
    preferenceButton.setSize([buttonWidth, buttonHeight]);
    // setup some python lists for storing info about the mousePreference
    // current position of the mouse:
    mousePreference.x = [];
    mousePreference.y = [];
    mousePreference.leftButton = [];
    mousePreference.midButton = [];
    mousePreference.rightButton = [];
    mousePreference.time = [];
    mousePreference.clicked_name = [];
    gotValidClick = false; // until a click is received
    // keep track of which components have finished
    font_preferenceComponents = [];
    font_preferenceComponents.push(preference_image);
    font_preferenceComponents.push(preferenceText);
    font_preferenceComponents.push(pradiobutton_1);
    font_preferenceComponents.push(pradiobutton_2);
    font_preferenceComponents.push(pradiobutton_3);
    font_preferenceComponents.push(pradiobutton_4);
    font_preferenceComponents.push(pradiobutton_5);
    font_preferenceComponents.push(pradiobutton_6);
    font_preferenceComponents.push(pradiobutton_7);
    font_preferenceComponents.push(pradiobutton_8);
    font_preferenceComponents.push(pradiobutton_9);
    font_preferenceComponents.push(preferenceSlider);
    font_preferenceComponents.push(preferenceButton);
    font_preferenceComponents.push(mousePreference);
    
    for (const thisComponent of font_preferenceComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


var preferenceChoice;
function font_preferenceRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'font_preference' ---
    // get current time
    t = font_preferenceClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *preference_image* updates
    if (t >= 0.0 && preference_image.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      preference_image.tStart = t;  // (not accounting for frame time here)
      preference_image.frameNStart = frameN;  // exact frame index
      
      preference_image.setAutoDraw(true);
    }

    
    // *preferenceText* updates
    if (t >= 0.0 && preferenceText.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      preferenceText.tStart = t;  // (not accounting for frame time here)
      preferenceText.frameNStart = frameN;  // exact frame index
      
      preferenceText.setAutoDraw(true);
    }

    
    // *pradiobutton_1* updates
    if (t >= 0.0 && pradiobutton_1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      pradiobutton_1.tStart = t;  // (not accounting for frame time here)
      pradiobutton_1.frameNStart = frameN;  // exact frame index
      
      pradiobutton_1.setAutoDraw(true);
    }

    
    // *pradiobutton_2* updates
    if (t >= 0.0 && pradiobutton_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      pradiobutton_2.tStart = t;  // (not accounting for frame time here)
      pradiobutton_2.frameNStart = frameN;  // exact frame index
      
      pradiobutton_2.setAutoDraw(true);
    }

    
    // *pradiobutton_3* updates
    if (t >= 0.0 && pradiobutton_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      pradiobutton_3.tStart = t;  // (not accounting for frame time here)
      pradiobutton_3.frameNStart = frameN;  // exact frame index
      
      pradiobutton_3.setAutoDraw(true);
    }

    
    // *pradiobutton_4* updates
    if (t >= 0.0 && pradiobutton_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      pradiobutton_4.tStart = t;  // (not accounting for frame time here)
      pradiobutton_4.frameNStart = frameN;  // exact frame index
      
      pradiobutton_4.setAutoDraw(true);
    }

    
    // *pradiobutton_5* updates
    if (t >= 0.0 && pradiobutton_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      pradiobutton_5.tStart = t;  // (not accounting for frame time here)
      pradiobutton_5.frameNStart = frameN;  // exact frame index
      
      pradiobutton_5.setAutoDraw(true);
    }

    
    // *pradiobutton_6* updates
    if (t >= 0.0 && pradiobutton_6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      pradiobutton_6.tStart = t;  // (not accounting for frame time here)
      pradiobutton_6.frameNStart = frameN;  // exact frame index
      
      pradiobutton_6.setAutoDraw(true);
    }

    
    // *pradiobutton_7* updates
    if (t >= 0.0 && pradiobutton_7.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      pradiobutton_7.tStart = t;  // (not accounting for frame time here)
      pradiobutton_7.frameNStart = frameN;  // exact frame index
      
      pradiobutton_7.setAutoDraw(true);
    }

    
    // *pradiobutton_8* updates
    if (t >= 0.0 && pradiobutton_8.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      pradiobutton_8.tStart = t;  // (not accounting for frame time here)
      pradiobutton_8.frameNStart = frameN;  // exact frame index
      
      pradiobutton_8.setAutoDraw(true);
    }

    
    // *pradiobutton_9* updates
    if (t >= 0.0 && pradiobutton_9.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      pradiobutton_9.tStart = t;  // (not accounting for frame time here)
      pradiobutton_9.frameNStart = frameN;  // exact frame index
      
      pradiobutton_9.setAutoDraw(true);
    }

    
    // *preferenceSlider* updates
    if (t >= 0.0 && preferenceSlider.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      preferenceSlider.tStart = t;  // (not accounting for frame time here)
      preferenceSlider.frameNStart = frameN;  // exact frame index
      
      preferenceSlider.setAutoDraw(true);
    }

    preferenceChoice = preferenceSlider.getRating();
    
    // create a for loop using length of labels and update wrap width of these labels
    for (let i = 0; i < labelCount; i++) {
        //console.log('current label for wrapwidth',i)
        //console.log('type of I',typeof i.toString())
        preferenceSlider._pixiLabels[i.toString()]._style._wordWrap = true
        preferenceSlider._pixiLabels[i.toString()]._style._wordWrapWidth = wrapWidthText    
    }
    
    // *preferenceButton* updates
    if ((preferenceSlider.rating) && preferenceButton.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      preferenceButton.tStart = t;  // (not accounting for frame time here)
      preferenceButton.frameNStart = frameN;  // exact frame index
      
      preferenceButton.setAutoDraw(true);
    }

    // *mousePreference* updates
    if ((preferenceSlider.rating) && mousePreference.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mousePreference.tStart = t;  // (not accounting for frame time here)
      mousePreference.frameNStart = frameN;  // exact frame index
      
      mousePreference.status = PsychoJS.Status.STARTED;
      mousePreference.mouseClock.reset();
      prevButtonState = mousePreference.getPressed();  // if button is down already this ISN'T a new click
      }
    if (mousePreference.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = mousePreference.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          for (const obj of [preferenceButton]) {
            if (obj.contains(mousePreference)) {
              gotValidClick = true;
              mousePreference.clicked_name.push(obj.name)
            }
          }
          if (gotValidClick === true) { 
            _mouseXYs = mousePreference.getPos();
            mousePreference.x.push(_mouseXYs[0]);
            mousePreference.y.push(_mouseXYs[1]);
            mousePreference.leftButton.push(_mouseButtons[0]);
            mousePreference.midButton.push(_mouseButtons[1]);
            mousePreference.rightButton.push(_mouseButtons[2]);
            mousePreference.time.push(mousePreference.mouseClock.getTime());
          }
          if (gotValidClick === true) { // abort routine on response
            continueRoutine = false;
          }
        }
      }
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of font_preferenceComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


var preferenceChoiceText;
var preferenceRT;
function font_preferenceRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'font_preference' ---
    for (const thisComponent of font_preferenceComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('preferenceSlider.response', preferenceSlider.getRating());
    psychoJS.experiment.addData('preferenceSlider.rt', preferenceSlider.getRT());
    
    // get the selected option among the labels
    preferenceChoiceText = sliderLabels[preferenceChoice-1]; // -1 because label index starts with 0, tick mark starts with 1. 
    
    // console.log('mouse-feedback: ',     mouseFeedback)
    // console.log('mouse-feedback-time: ',mouseFeedback.time)
    
    // get reaction time from psychopy's mouse component 
    mouselength             = mousePreference.time.length;
    // get the mouse component's starting second
    mouse_tStart            = mousePreference.tStart; 
    // get 'next button's starting second
    button_tStart           = preferenceText.tStart; 
    // get the latest mouse click-- which terminates the loop    
    validClick              = mousePreference.time[mouselength-1]; 
    // add mouse's and button's starting seconds to the click RT, because it starts to count RT after these are displayed
    preferenceRT          = validClick + mouse_tStart - button_tStart; 
    
    
    // console.log('mouse time',validClick)
    // console.log('mouse rt', feedbackRT)    
    
    
    // get browser zoom
    browserZoom             = window.outerWidth*100 / window.innerWidth;
    
    // format date
    registeryDate           = util.MonotonicClock.getDateStr()
    registeryDate           = formatDateTime(registeryDate)
    
    // register data
    data_setID.push(setID); // type of the set (AI or Human)
    data_itemID.push(itemID); // item ID is the unique ID assigned to each stimulus displayed on the screen
    data_trialType.push(trialType); // is this a test or a practice trial
    data_blockName.push(blockName); // what is the name of this block 
    data_totalTrialIndex.push(totalTrialIterationIndex); // what is the trial number (total across all blocks)
    
    data_dateTime.push(registeryDate); // date and time 
    data_zoomLevel.push(browserZoom);
    data_passageFont.push(currentFont); // what was the font used in this passage
    data_passageSpacing.push([]); // what was spacing used in this passage
    data_passageType.push([]);// what is the type of this set (informative, narrative)?
    data_passageLevel.push([]); // what is the grade level (2nd, 3rd)
    data_articleSkipType.push([]) // which button did they press (next or popup link)
    
    data_passageRT.push([]); // words per minute
    data_passageWPM.push([]); // words per minute
    data_passageWordCount.push([]); 
    data_compAccuracy.push([]); // empty because there is no accuracy during passages 
    
    data_surveyRT.push(preferenceRT); // time to respond to comprehension question
    data_compChoice.push(preferenceChoiceText) // chosen option is registered as text
    data_feedbackRating.push(preferenceChoice) // rating of the likert scale
    
    
    // remove radio buttons so that they won't appear at the center in next trial
    for (var i = 0; i < maxLabels; i++) {
        var buttonNo = i + 1;
        eval(radioComponentName + buttonNo + '._pos'+'= ['+ 0 +','+ 0+'];' );
        eval(radioComponentName + buttonNo + '._size'+'='+1+';' );    
        
        }
    // store data for psychoJS.experiment (ExperimentHandler)
    if (mousePreference.x) {  psychoJS.experiment.addData('mousePreference.x', mousePreference.x[0])};
    if (mousePreference.y) {  psychoJS.experiment.addData('mousePreference.y', mousePreference.y[0])};
    if (mousePreference.leftButton) {  psychoJS.experiment.addData('mousePreference.leftButton', mousePreference.leftButton[0])};
    if (mousePreference.midButton) {  psychoJS.experiment.addData('mousePreference.midButton', mousePreference.midButton[0])};
    if (mousePreference.rightButton) {  psychoJS.experiment.addData('mousePreference.rightButton', mousePreference.rightButton[0])};
    if (mousePreference.time) {  psychoJS.experiment.addData('mousePreference.time', mousePreference.time[0])};
    if (mousePreference.clicked_name) {  psychoJS.experiment.addData('mousePreference.clicked_name', mousePreference.clicked_name[0])};
    
    // the Routine "font_preference" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var currenHyperlinkPrefernceQuestion;
var hyperlink_preferenceComponents;
function hyperlink_preferenceRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'hyperlink_preference' ---
    t = 0;
    hyperlink_preferenceClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    currenHyperlinkPrefernceQuestion = "My hyperlink preference is..."
    
    sliderLabels = hyperlink_preference_answers.join(";")
    
    // what is the item type (passage, comp question, mini survey?)
    itemID                          = currenHyperlinkPrefernceQuestion;
    
    //what is the set ID
    setID = "hyperlink_preference"
    
    // change additional question text's centering and style
    questionTextHyperlinkPreference.setAlignHoriz('left')
    questionTextHyperlinkPreference.bold = true;
    pressSpaceHyperlinkPreference.setAlignHoriz('left')
    pressSpaceHyperlinkPreference.bold = true;
    
    // adjust slider vertical size depending on the number of options 
    // get slider labels from the excel file
    console.log('slider size hyper pref before: ', sliderSize)
    
    //sliderLabels.unshift("Prefer not to answer");
    labelCount = sliderLabels.length;
    // if there are less then 3 options on the slider, 
    // decrease the vertical size of the slider by half
    if (labelCount < 3){ 
        sliderSize[1] = (vsize*26/100)/2.5  
    } else {
        sliderSize[1] = vsize*26/100;
    }
      
    questionTextHyperlinkPreference.setColor(new util.Color(textColor));
    questionTextHyperlinkPreference.setPos([questionsXaxis, questionsTopYaxis]);
    questionTextHyperlinkPreference.setText(currenHyperlinkPrefernceQuestion);
    questionTextHyperlinkPreference.setFont(textFont);
    questionTextHyperlinkPreference.setHeight(questionTextSize*y_scale);
    pressSpaceHyperlinkPreference.setColor(new util.Color(textColor));
    pressSpaceHyperlinkPreference.setPos([questionsXaxis, questionsBottomYaxis]);
    pressSpaceHyperlinkPreference.setText('Please press the button below to proceed after your choice.');
    pressSpaceHyperlinkPreference.setFont(textFont);
    pressSpaceHyperlinkPreference.setHeight(questionTextSize*y_scale);
    hpbutton_1.setPos([0, 0]);
    hpbutton_1.setSize([radiobutton_size, radiobutton_size]);
    hpbutton_2.setPos([0, 0]);
    hpbutton_2.setSize([radiobutton_size, radiobutton_size]);
    hpbutton_3.setPos([0, 0]);
    hpbutton_3.setSize([radiobutton_size, radiobutton_size]);
    hpbutton_4.setPos([0, 0]);
    hpbutton_4.setSize([radiobutton_size, radiobutton_size]);
    hpbutton_5.setPos([0, 0]);
    hpbutton_5.setSize([radiobutton_size, radiobutton_size]);
    questionsSliderHyperlinkPreference.reset()
    // Run 'Begin Routine' code from updateAndRegisterHyperlinkPreference
    ////////////////////////////////////////////////
    //// UPDATE SLIDER LABELS, SIZE, COLOR ETC. ////
    ////////////////////////////////////////////////
    
    // get slider labels from the excel file
    sliderLabels                        = sliderLabels.split(";");
    //sliderLabels.unshift("Prefer not to answer");
    labelCount                          = sliderLabels.length;
    sliderLabels                        = sliderLabels.reverse();
    
    // create tick marks so that data registry makes sense in terms of scores of each 
    // label: start from 1 not 0.
    tickMarks                           = range(1,labelCount);
    
    // display shuffled labels as tick marks 
    questionsSliderHyperlinkPreference.setLabels(sliderLabels);
    
    // change ticks of the slider
    questionsSliderHyperlinkPreference.setTicks(tickMarks);    
    
    // change font of the slider text
    questionsSliderHyperlinkPreference.setFontSize(labelTextSize*y_scale);
    
    // adjust slider's position and size
    questionsSliderHyperlinkPreference._pos      = sliderPosition;
    questionsSliderHyperlinkPreference._size     = sliderSize;
    
    // change slider's color and marker properties
    questionsSliderHyperlinkPreference._lineColor = col_white // color of static circle ;
    
    // what are the maximum amount of radio buttons of this slider
    // count radiobutton_# components, now it is 9.
    labelPosition_y                     = Math.abs(sliderSize[1] / (labelCount-1));
    
    positions                           = [];
    
    maxLabels                           = 9;
    
    radiobutton_size                    = [sliderSize[0]* 1.15, sliderSize[0]* 1.15];
    
    evenLabelCount                      = ((labelCount % 2) === 0);
    // name of radio components
    radioComponentName                  = 'hpbutton_';
    
    if (evenLabelCount) {
        console.log('here even label')
        // there is no middle label, so get the half of the distance
        // of labels and move on from there while positioning the radio buttons 
        labelPosition_y                 = labelPosition_y / 2;
    
        // initialize label position coordinate multiplier
        positionMultiplier              = 1;
    
        // loop over number of labels
        for (var k = 0; k < labelCount; k++){
            
            // initialize label number index
            var buttonNo                = k + 1;                  
    
            if ((k % 2) === 0) {
                // increase the position multipler at every odd number 
                // this increases the distance from the middle label every third label
                if (k > 1) {
    
                    positionMultiplier  = positionMultiplier+2; 
                }  
                positions[k]            = [sliderPosition[0], sliderPosition[1]+(positionMultiplier*labelPosition_y)];
    
            } else{
    
                positions[k]            = [sliderPosition[0], sliderPosition[1]-(positionMultiplier*labelPosition_y)];
                
            }
            // enter the position and size values into individual label radio buttons  
            // position
            eval(radioComponentName + buttonNo + '._pos' +'= ['+positions[k][0] +', '+positions[k][1]+'];' );
            // size
            eval(radioComponentName + buttonNo + '._size' +'= ['+sliderSize[0]* 1.15+', '+sliderSize[0]* 1.15+'];' );
            // draw the changes 
            eval(radioComponentName + buttonNo + '._autoDraw' +'='+true+';');
            // console.log('comprehension radio button'+buttonNo.toString(),eval(radioComponentName + buttonNo + '._pos' +'= ['+positions[k][0] +', '+positions[k][1]+'];' ));
        }    
        
    } else {
            // if there are odd number of labels
            
            // there will be a middle label which should be placed at the 
            // default position of the slider
            peradiobutton_1._pos         = [sliderPosition[0], sliderPosition[1]];
            peradiobutton_1._size        = radiobutton_size;
    
            eval(radioComponentName + 1 + '._pos' +'= ['+ sliderPosition[0] +','+ sliderPosition[1]+'];' );
            // size
            eval(radioComponentName + 1 + '._size' +'= ['+sliderSize[0]* 1.15+', '+sliderSize[0]* 1.15+'];' );
    
            // initialize label position coordinate multiplier
            positionMultiplier          = 0;
    
            // loop over labels
            console.error("label count", {labelCount})
            for (var k = 1; k < labelCount; k++){            
                // initialize label number index
                var buttonNo = k + 1;
                
                if ((k % 2) === 0) {
    
                    positions[k]        = [sliderPosition[0], sliderPosition[1]+(positionMultiplier*labelPosition_y)]; 
    
                } else{
                    // increase the position multipler at every odd number 
                    // this increases the distance from the middle label every third label
                    positionMultiplier  = positionMultiplier+1;
                    positions[k]        = [sliderPosition[0], sliderPosition[1]-(positionMultiplier*labelPosition_y)];   
                    
                }
                // console.log('uneven k',k);
                // console.log('uneven positionMultiplier',positionMultiplier);
                // enter the position and size values into individual label radio buttons  
                // position
                eval(radioComponentName + buttonNo + '._pos' +'= ['+ positions[k][0] +','+ positions[k][1]+'];' );
                // size
                eval(radioComponentName + buttonNo + '._size' +'= ['+sliderSize[0]* 1.15+', '+sliderSize[0]* 1.15+'];' );
                // draw the changes 
                eval(radioComponentName + buttonNo + '._autoDraw' +'='+true+';');
    
                // console.log('comprehension radio button'+buttonNo.toString(),eval(radioComponentName + buttonNo + '._pos' +'= ['+positions[k][0] +', '+positions[k][1]+'];' ));
            }
        
        }
    
    
    //////////////////////////////////////////////////////////////////
    // initiate input monitoring for conditional next-page command 
    // (next page command does not work unless participant chose one of 
    // the labels. 
    psychoJS.eventManager.clearEvents();
    clearEventAfterChoice = 1;
    
    
    // start Timer for question reaction time
    myClock.reset(); // reset the timer
    startTime = myClock.getTime();
    nextButton_hyperlinkPreference.setPos([buttonX, buttonY]);
    nextButton_hyperlinkPreference.setSize([buttonWidth, buttonHeight]);
    // setup some python lists for storing info about the mouseHyperlinkPreference
    // current position of the mouse:
    mouseHyperlinkPreference.x = [];
    mouseHyperlinkPreference.y = [];
    mouseHyperlinkPreference.leftButton = [];
    mouseHyperlinkPreference.midButton = [];
    mouseHyperlinkPreference.rightButton = [];
    mouseHyperlinkPreference.time = [];
    mouseHyperlinkPreference.clicked_name = [];
    gotValidClick = false; // until a click is received
    // keep track of which components have finished
    hyperlink_preferenceComponents = [];
    hyperlink_preferenceComponents.push(questionTextHyperlinkPreference);
    hyperlink_preferenceComponents.push(pressSpaceHyperlinkPreference);
    hyperlink_preferenceComponents.push(hpbutton_1);
    hyperlink_preferenceComponents.push(hpbutton_2);
    hyperlink_preferenceComponents.push(hpbutton_3);
    hyperlink_preferenceComponents.push(hpbutton_4);
    hyperlink_preferenceComponents.push(hpbutton_5);
    hyperlink_preferenceComponents.push(questionsSliderHyperlinkPreference);
    hyperlink_preferenceComponents.push(nextButton_hyperlinkPreference);
    hyperlink_preferenceComponents.push(mouseHyperlinkPreference);
    
    for (const thisComponent of hyperlink_preferenceComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function hyperlink_preferenceRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'hyperlink_preference' ---
    // get current time
    t = hyperlink_preferenceClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *questionTextHyperlinkPreference* updates
    if (t >= 0.0 && questionTextHyperlinkPreference.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      questionTextHyperlinkPreference.tStart = t;  // (not accounting for frame time here)
      questionTextHyperlinkPreference.frameNStart = frameN;  // exact frame index
      
      questionTextHyperlinkPreference.setAutoDraw(true);
    }

    
    // *pressSpaceHyperlinkPreference* updates
    if (t >= 0.0 && pressSpaceHyperlinkPreference.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      pressSpaceHyperlinkPreference.tStart = t;  // (not accounting for frame time here)
      pressSpaceHyperlinkPreference.frameNStart = frameN;  // exact frame index
      
      pressSpaceHyperlinkPreference.setAutoDraw(true);
    }

    
    // *hpbutton_1* updates
    if (t >= 0.0 && hpbutton_1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      hpbutton_1.tStart = t;  // (not accounting for frame time here)
      hpbutton_1.frameNStart = frameN;  // exact frame index
      
      hpbutton_1.setAutoDraw(true);
    }

    
    // *hpbutton_2* updates
    if (t >= 0.0 && hpbutton_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      hpbutton_2.tStart = t;  // (not accounting for frame time here)
      hpbutton_2.frameNStart = frameN;  // exact frame index
      
      hpbutton_2.setAutoDraw(true);
    }

    
    // *hpbutton_3* updates
    if (t >= 0.0 && hpbutton_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      hpbutton_3.tStart = t;  // (not accounting for frame time here)
      hpbutton_3.frameNStart = frameN;  // exact frame index
      
      hpbutton_3.setAutoDraw(true);
    }

    
    // *hpbutton_4* updates
    if (t >= 0.0 && hpbutton_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      hpbutton_4.tStart = t;  // (not accounting for frame time here)
      hpbutton_4.frameNStart = frameN;  // exact frame index
      
      hpbutton_4.setAutoDraw(true);
    }

    
    // *hpbutton_5* updates
    if (t >= 0.0 && hpbutton_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      hpbutton_5.tStart = t;  // (not accounting for frame time here)
      hpbutton_5.frameNStart = frameN;  // exact frame index
      
      hpbutton_5.setAutoDraw(true);
    }

    
    // *questionsSliderHyperlinkPreference* updates
    if (t >= 0.0 && questionsSliderHyperlinkPreference.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      questionsSliderHyperlinkPreference.tStart = t;  // (not accounting for frame time here)
      questionsSliderHyperlinkPreference.frameNStart = frameN;  // exact frame index
      
      questionsSliderHyperlinkPreference.setAutoDraw(true);
    }

    compChoice = questionsSliderHyperlinkPreference.getRating();
    
    // create a for loop using length of labels and update these like that
    for (let i = 0; i < labelCount; i++) {
        //console.log('current label for wrapwidth',i)
        //console.log('type of I',typeof i.toString())
        questionsSliderHyperlinkPreference._pixiLabels[i.toString()]._style._wordWrap = true
        questionsSliderHyperlinkPreference._pixiLabels[i.toString()]._style._wordWrapWidth = wrapWidthText    
    }
    
    // *nextButton_hyperlinkPreference* updates
    if ((questionsSliderHyperlinkPreference.rating) && nextButton_hyperlinkPreference.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      nextButton_hyperlinkPreference.tStart = t;  // (not accounting for frame time here)
      nextButton_hyperlinkPreference.frameNStart = frameN;  // exact frame index
      
      nextButton_hyperlinkPreference.setAutoDraw(true);
    }

    // *mouseHyperlinkPreference* updates
    if ((questionsSliderHyperlinkPreference.rating) && mouseHyperlinkPreference.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouseHyperlinkPreference.tStart = t;  // (not accounting for frame time here)
      mouseHyperlinkPreference.frameNStart = frameN;  // exact frame index
      
      mouseHyperlinkPreference.status = PsychoJS.Status.STARTED;
      mouseHyperlinkPreference.mouseClock.reset();
      prevButtonState = mouseHyperlinkPreference.getPressed();  // if button is down already this ISN'T a new click
      }
    if (mouseHyperlinkPreference.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = mouseHyperlinkPreference.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          for (const obj of [nextButton_hyperlinkPreference]) {
            if (obj.contains(mouseHyperlinkPreference)) {
              gotValidClick = true;
              mouseHyperlinkPreference.clicked_name.push(obj.name)
            }
          }
          if (gotValidClick === true) { 
            _mouseXYs = mouseHyperlinkPreference.getPos();
            mouseHyperlinkPreference.x.push(_mouseXYs[0]);
            mouseHyperlinkPreference.y.push(_mouseXYs[1]);
            mouseHyperlinkPreference.leftButton.push(_mouseButtons[0]);
            mouseHyperlinkPreference.midButton.push(_mouseButtons[1]);
            mouseHyperlinkPreference.rightButton.push(_mouseButtons[2]);
            mouseHyperlinkPreference.time.push(mouseHyperlinkPreference.mouseClock.getTime());
          }
          if (gotValidClick === true) { // abort routine on response
            continueRoutine = false;
          }
        }
      }
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of hyperlink_preferenceComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


var demographicRT;
function hyperlink_preferenceRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'hyperlink_preference' ---
    for (const thisComponent of hyperlink_preferenceComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('questionsSliderHyperlinkPreference.response', questionsSliderHyperlinkPreference.getRating());
    psychoJS.experiment.addData('questionsSliderHyperlinkPreference.rt', questionsSliderHyperlinkPreference.getRT());
    // get the selected option among the labels
    compChoiceText = sliderLabels[compChoice-1]; // -1 because label index starts with 0, tick mark starts with 1. 
    
    
    
    // get reaction time from psychopy's mouse component 
    mouselength             = mouseHyperlinkPreference.time.length;
    // get the mouse component's starting second
    mouse_tStart            = mouseHyperlinkPreference.tStart; 
    // get 'next button's starting second
    button_tStart           = questionTextHyperlinkPreference.tStart; 
    // get the latest mouse click-- which terminates the loop    
    validClick              = mouseHyperlinkPreference.time[mouselength-1]; 
    // add mouse's and button's starting seconds to the click RT, because it starts to count RT after these are displayed
    demographicRT           = validClick + mouse_tStart - button_tStart; 
    
    // get the zoom level of browser
    var browserZoom     = window.outerWidth*100 / window.innerWidth;
    // format date
    registeryDate       = util.MonotonicClock.getDateStr();
    registeryDate       = formatDateTime(registeryDate);
    
    // register data
    data_setID.push(setID); // type of the set (AI or Human)
    data_itemID.push(itemID); // item ID is the unique ID assigned to each stimulus displayed on the screen
    data_trialType.push(trialType); // is this a test or a practice trial
    data_blockName.push(setID); // what is the name of this block 
    data_totalTrialIndex.push(totalTrialIterationIndex); // what is the trial number (total across all blocks)
    
    data_dateTime.push(registeryDate); // date and time 
    data_zoomLevel.push(browserZoom);
    data_passageFont.push(currentFont); // what was the font used in this passage
    data_articleSkipType.push([]) // which button did they press (next or popup link)
    data_passageSpacing.push([]); // what was the spacing used in this passage
    
    // reaction time
    data_passageRT.push(demographicRT); 
    // words per minute
    data_passageWPM.push([]); 
    data_passageWordCount.push([]); 
    
    data_compAccuracy.push([]); // empty because there is no accuracy during passages 
    data_feedbackRating.push([]) // rating of the likert scale
    
    data_surveyRT.push(questionReactionTime); // time to respond to comprehension question
    data_compChoice.push(compChoiceText) // chosen option is registered as text
    // remove radio buttons so that they won't appear at the center in next trial
    
    // store data for psychoJS.experiment (ExperimentHandler)
    if (mouseHyperlinkPreference.x) {  psychoJS.experiment.addData('mouseHyperlinkPreference.x', mouseHyperlinkPreference.x[0])};
    if (mouseHyperlinkPreference.y) {  psychoJS.experiment.addData('mouseHyperlinkPreference.y', mouseHyperlinkPreference.y[0])};
    if (mouseHyperlinkPreference.leftButton) {  psychoJS.experiment.addData('mouseHyperlinkPreference.leftButton', mouseHyperlinkPreference.leftButton[0])};
    if (mouseHyperlinkPreference.midButton) {  psychoJS.experiment.addData('mouseHyperlinkPreference.midButton', mouseHyperlinkPreference.midButton[0])};
    if (mouseHyperlinkPreference.rightButton) {  psychoJS.experiment.addData('mouseHyperlinkPreference.rightButton', mouseHyperlinkPreference.rightButton[0])};
    if (mouseHyperlinkPreference.time) {  psychoJS.experiment.addData('mouseHyperlinkPreference.time', mouseHyperlinkPreference.time[0])};
    if (mouseHyperlinkPreference.clicked_name) {  psychoJS.experiment.addData('mouseHyperlinkPreference.clicked_name', mouseHyperlinkPreference.clicked_name[0])};
    
    // the Routine "hyperlink_preference" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var currentPostEngagementQuestion;
var currentPostEngagementType;
var post_engagementComponents;
function post_engagementRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'post_engagement' ---
    t = 0;
    post_engagementClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    var question = post_engagement_questions[post_engagement_loop.thisN]
    currentPostEngagementQuestion = question.text
    currentPostEngagementType = question.type
    sliderLabels = post_engagement_answers.join(";")
    
    // what is the item type (passage, comp question, mini survey?)
    itemID                          = currentPostEngagementQuestion;
    
    //what is the set ID
    setID = "post_engagement"
    
    // change additional question text's centering and style
    questionTextPostEngagement.setAlignHoriz('left')
    questionTextPostEngagement.bold = true;
    pressSpacePostEngagement.setAlignHoriz('left')
    pressSpacePostEngagement.bold = true;
    
    // adjust slider vertical size depending on the number of options 
    // get slider labels from the excel file
    console.log('slider size hyper pref before: ', sliderSize)
    
    //sliderLabels.unshift("Prefer not to answer");
    labelCount = sliderLabels.length;
    // if there are less then 3 options on the slider, 
    // decrease the vertical size of the slider by half
    if (labelCount < 3){ 
        sliderSize[1] = (vsize*26/100)/2.5  
    } else {
        sliderSize[1] = vsize*26/100;
    }
      
    questionTextPostEngagement.setColor(new util.Color(textColor));
    questionTextPostEngagement.setPos([questionsXaxis, questionsTopYaxis]);
    questionTextPostEngagement.setText(currentPostEngagementQuestion);
    questionTextPostEngagement.setFont(textFont);
    questionTextPostEngagement.setHeight(questionTextSize*y_scale);
    pressSpacePostEngagement.setColor(new util.Color(textColor));
    pressSpacePostEngagement.setPos([questionsXaxis, questionsBottomYaxis]);
    pressSpacePostEngagement.setText('Please press the button below to proceed after your choice.');
    pressSpacePostEngagement.setFont(textFont);
    pressSpacePostEngagement.setHeight(questionTextSize*y_scale);
    peradiobutton_1.setPos([0, 0]);
    peradiobutton_1.setSize([radiobutton_size, radiobutton_size]);
    peradiobutton_2.setPos([0, 0]);
    peradiobutton_2.setSize([radiobutton_size, radiobutton_size]);
    peradiobutton_3.setPos([0, 0]);
    peradiobutton_3.setSize([radiobutton_size, radiobutton_size]);
    peradiobutton_4.setPos([0, 0]);
    peradiobutton_4.setSize([radiobutton_size, radiobutton_size]);
    peradiobutton_5.setPos([0, 0]);
    peradiobutton_5.setSize([radiobutton_size, radiobutton_size]);
    questionsSliderPostEngagement.reset()
    // Run 'Begin Routine' code from updateAndRegisterPostEngagement
    ////////////////////////////////////////////////
    //// UPDATE SLIDER LABELS, SIZE, COLOR ETC. ////
    ////////////////////////////////////////////////
    
    // get slider labels from the excel file
    sliderLabels                        = sliderLabels.split(";");
    //sliderLabels.unshift("Prefer not to answer");
    labelCount                          = sliderLabels.length;
    sliderLabels                        = sliderLabels.reverse();
    
    // create tick marks so that data registry makes sense in terms of scores of each 
    // label: start from 1 not 0.
    tickMarks                           = range(1,labelCount);
    
    // display shuffled labels as tick marks 
    questionsSliderPostEngagement.setLabels(sliderLabels);
    
    // change ticks of the slider
    questionsSliderPostEngagement.setTicks(tickMarks);    
    
    // change font of the slider text
    questionsSliderPostEngagement.setFontSize(labelTextSize*y_scale);
    
    // adjust slider's position and size
    questionsSliderPostEngagement._pos      = sliderPosition;
    questionsSliderPostEngagement._size     = sliderSize;
    
    // change slider's color and marker properties
    questionsSliderPostEngagement._lineColor = col_white // color of static circle ;
    
    // what are the maximum amount of radio buttons of this slider
    // count radiobutton_# components, now it is 9.
    labelPosition_y                     = Math.abs(sliderSize[1] / (labelCount-1));
    
    positions                           = [];
    
    maxLabels                           = 9;
    
    radiobutton_size                    = [sliderSize[0]* 1.15, sliderSize[0]* 1.15];
    
    evenLabelCount                      = ((labelCount % 2) === 0);
    // name of radio components
    radioComponentName                  = 'peradiobutton_';
    
    if (evenLabelCount) {
        console.log('here even label')
        // there is no middle label, so get the half of the distance
        // of labels and move on from there while positioning the radio buttons 
        labelPosition_y                 = labelPosition_y / 2;
    
        // initialize label position coordinate multiplier
        positionMultiplier              = 1;
    
        // loop over number of labels
        for (var k = 0; k < labelCount; k++){
            
            // initialize label number index
            var buttonNo                = k + 1;                  
    
            if ((k % 2) === 0) {
                // increase the position multipler at every odd number 
                // this increases the distance from the middle label every third label
                if (k > 1) {
    
                    positionMultiplier  = positionMultiplier+2; 
                }  
                positions[k]            = [sliderPosition[0], sliderPosition[1]+(positionMultiplier*labelPosition_y)];
    
            } else{
    
                positions[k]            = [sliderPosition[0], sliderPosition[1]-(positionMultiplier*labelPosition_y)];
                
            }
            // enter the position and size values into individual label radio buttons  
            // position
            eval(radioComponentName + buttonNo + '._pos' +'= ['+positions[k][0] +', '+positions[k][1]+'];' );
            // size
            eval(radioComponentName + buttonNo + '._size' +'= ['+sliderSize[0]* 1.15+', '+sliderSize[0]* 1.15+'];' );
            // draw the changes 
            eval(radioComponentName + buttonNo + '._autoDraw' +'='+true+';');
            // console.log('comprehension radio button'+buttonNo.toString(),eval(radioComponentName + buttonNo + '._pos' +'= ['+positions[k][0] +', '+positions[k][1]+'];' ));
        }    
        
    } else {
            // if there are odd number of labels
            
            // there will be a middle label which should be placed at the 
            // default position of the slider
            peradiobutton_1._pos         = [sliderPosition[0], sliderPosition[1]];
            peradiobutton_1._size        = radiobutton_size;
    
            eval(radioComponentName + 1 + '._pos' +'= ['+ sliderPosition[0] +','+ sliderPosition[1]+'];' );
            // size
            eval(radioComponentName + 1 + '._size' +'= ['+sliderSize[0]* 1.15+', '+sliderSize[0]* 1.15+'];' );
    
            // initialize label position coordinate multiplier
            positionMultiplier          = 0;
    
            // loop over labels
            console.error("label count", {labelCount})
            for (var k = 1; k < labelCount; k++){            
                // initialize label number index
                var buttonNo = k + 1;
                
                if ((k % 2) === 0) {
    
                    positions[k]        = [sliderPosition[0], sliderPosition[1]+(positionMultiplier*labelPosition_y)]; 
    
                } else{
                    // increase the position multipler at every odd number 
                    // this increases the distance from the middle label every third label
                    positionMultiplier  = positionMultiplier+1;
                    positions[k]        = [sliderPosition[0], sliderPosition[1]-(positionMultiplier*labelPosition_y)];   
                    
                }
                // console.log('uneven k',k);
                // console.log('uneven positionMultiplier',positionMultiplier);
                // enter the position and size values into individual label radio buttons  
                // position
                eval(radioComponentName + buttonNo + '._pos' +'= ['+ positions[k][0] +','+ positions[k][1]+'];' );
                // size
                eval(radioComponentName + buttonNo + '._size' +'= ['+sliderSize[0]* 1.15+', '+sliderSize[0]* 1.15+'];' );
                // draw the changes 
                eval(radioComponentName + buttonNo + '._autoDraw' +'='+true+';');
    
                // console.log('comprehension radio button'+buttonNo.toString(),eval(radioComponentName + buttonNo + '._pos' +'= ['+positions[k][0] +', '+positions[k][1]+'];' ));
            }
        
        }
    
    
    //////////////////////////////////////////////////////////////////
    // initiate input monitoring for conditional next-page command 
    // (next page command does not work unless participant chose one of 
    // the labels. 
    psychoJS.eventManager.clearEvents();
    clearEventAfterChoice = 1;
    
    
    // start Timer for question reaction time
    myClock.reset(); // reset the timer
    startTime = myClock.getTime();
    nextButton_postEngagement.setPos([buttonX, buttonY]);
    nextButton_postEngagement.setSize([buttonWidth, buttonHeight]);
    // setup some python lists for storing info about the mousePostEngagement
    // current position of the mouse:
    mousePostEngagement.x = [];
    mousePostEngagement.y = [];
    mousePostEngagement.leftButton = [];
    mousePostEngagement.midButton = [];
    mousePostEngagement.rightButton = [];
    mousePostEngagement.time = [];
    mousePostEngagement.clicked_name = [];
    gotValidClick = false; // until a click is received
    // keep track of which components have finished
    post_engagementComponents = [];
    post_engagementComponents.push(questionTextPostEngagement);
    post_engagementComponents.push(pressSpacePostEngagement);
    post_engagementComponents.push(peradiobutton_1);
    post_engagementComponents.push(peradiobutton_2);
    post_engagementComponents.push(peradiobutton_3);
    post_engagementComponents.push(peradiobutton_4);
    post_engagementComponents.push(peradiobutton_5);
    post_engagementComponents.push(questionsSliderPostEngagement);
    post_engagementComponents.push(nextButton_postEngagement);
    post_engagementComponents.push(mousePostEngagement);
    
    for (const thisComponent of post_engagementComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function post_engagementRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'post_engagement' ---
    // get current time
    t = post_engagementClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *questionTextPostEngagement* updates
    if (t >= 0.0 && questionTextPostEngagement.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      questionTextPostEngagement.tStart = t;  // (not accounting for frame time here)
      questionTextPostEngagement.frameNStart = frameN;  // exact frame index
      
      questionTextPostEngagement.setAutoDraw(true);
    }

    
    // *pressSpacePostEngagement* updates
    if (t >= 0.0 && pressSpacePostEngagement.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      pressSpacePostEngagement.tStart = t;  // (not accounting for frame time here)
      pressSpacePostEngagement.frameNStart = frameN;  // exact frame index
      
      pressSpacePostEngagement.setAutoDraw(true);
    }

    
    // *peradiobutton_1* updates
    if (t >= 0.0 && peradiobutton_1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      peradiobutton_1.tStart = t;  // (not accounting for frame time here)
      peradiobutton_1.frameNStart = frameN;  // exact frame index
      
      peradiobutton_1.setAutoDraw(true);
    }

    
    // *peradiobutton_2* updates
    if (t >= 0.0 && peradiobutton_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      peradiobutton_2.tStart = t;  // (not accounting for frame time here)
      peradiobutton_2.frameNStart = frameN;  // exact frame index
      
      peradiobutton_2.setAutoDraw(true);
    }

    
    // *peradiobutton_3* updates
    if (t >= 0.0 && peradiobutton_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      peradiobutton_3.tStart = t;  // (not accounting for frame time here)
      peradiobutton_3.frameNStart = frameN;  // exact frame index
      
      peradiobutton_3.setAutoDraw(true);
    }

    
    // *peradiobutton_4* updates
    if (t >= 0.0 && peradiobutton_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      peradiobutton_4.tStart = t;  // (not accounting for frame time here)
      peradiobutton_4.frameNStart = frameN;  // exact frame index
      
      peradiobutton_4.setAutoDraw(true);
    }

    
    // *peradiobutton_5* updates
    if (t >= 0.0 && peradiobutton_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      peradiobutton_5.tStart = t;  // (not accounting for frame time here)
      peradiobutton_5.frameNStart = frameN;  // exact frame index
      
      peradiobutton_5.setAutoDraw(true);
    }

    
    // *questionsSliderPostEngagement* updates
    if (t >= 0.0 && questionsSliderPostEngagement.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      questionsSliderPostEngagement.tStart = t;  // (not accounting for frame time here)
      questionsSliderPostEngagement.frameNStart = frameN;  // exact frame index
      
      questionsSliderPostEngagement.setAutoDraw(true);
    }

    compChoice = questionsSliderPostEngagement.getRating();
    
    // create a for loop using length of labels and update these like that
    for (let i = 0; i < labelCount; i++) {
        //console.log('current label for wrapwidth',i)
        //console.log('type of I',typeof i.toString())
        questionsSliderPostEngagement._pixiLabels[i.toString()]._style._wordWrap = true
        questionsSliderPostEngagement._pixiLabels[i.toString()]._style._wordWrapWidth = wrapWidthText    
    }
    
    // *nextButton_postEngagement* updates
    if ((questionsSliderPostEngagement.rating) && nextButton_postEngagement.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      nextButton_postEngagement.tStart = t;  // (not accounting for frame time here)
      nextButton_postEngagement.frameNStart = frameN;  // exact frame index
      
      nextButton_postEngagement.setAutoDraw(true);
    }

    // *mousePostEngagement* updates
    if ((questionsSliderPostEngagement.rating) && mousePostEngagement.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mousePostEngagement.tStart = t;  // (not accounting for frame time here)
      mousePostEngagement.frameNStart = frameN;  // exact frame index
      
      mousePostEngagement.status = PsychoJS.Status.STARTED;
      mousePostEngagement.mouseClock.reset();
      prevButtonState = mousePostEngagement.getPressed();  // if button is down already this ISN'T a new click
      }
    if (mousePostEngagement.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = mousePostEngagement.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          for (const obj of [nextButton_postEngagement]) {
            if (obj.contains(mousePostEngagement)) {
              gotValidClick = true;
              mousePostEngagement.clicked_name.push(obj.name)
            }
          }
          if (gotValidClick === true) { 
            _mouseXYs = mousePostEngagement.getPos();
            mousePostEngagement.x.push(_mouseXYs[0]);
            mousePostEngagement.y.push(_mouseXYs[1]);
            mousePostEngagement.leftButton.push(_mouseButtons[0]);
            mousePostEngagement.midButton.push(_mouseButtons[1]);
            mousePostEngagement.rightButton.push(_mouseButtons[2]);
            mousePostEngagement.time.push(mousePostEngagement.mouseClock.getTime());
          }
          if (gotValidClick === true) { // abort routine on response
            continueRoutine = false;
          }
        }
      }
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of post_engagementComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function post_engagementRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'post_engagement' ---
    for (const thisComponent of post_engagementComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('questionsSliderPostEngagement.response', questionsSliderPostEngagement.getRating());
    psychoJS.experiment.addData('questionsSliderPostEngagement.rt', questionsSliderPostEngagement.getRT());
    // get the selected option among the labels
    compChoiceText = sliderLabels[compChoice-1]; // -1 because label index starts with 0, tick mark starts with 1. 
    
    
    
    // get reaction time from psychopy's mouse component 
    mouselength             = mousePostEngagement.time.length;
    // get the mouse component's starting second
    mouse_tStart            = mousePostEngagement.tStart; 
    // get 'next button's starting second
    button_tStart           = questionTextPostEngagement.tStart; 
    // get the latest mouse click-- which terminates the loop    
    validClick              = mousePostEngagement.time[mouselength-1]; 
    // add mouse's and button's starting seconds to the click RT, because it starts to count RT after these are displayed
    demographicRT           = validClick + mouse_tStart - button_tStart; 
    
    // get the zoom level of browser
    var browserZoom     = window.outerWidth*100 / window.innerWidth;
    // format date
    registeryDate       = util.MonotonicClock.getDateStr();
    registeryDate       = formatDateTime(registeryDate);
    
    // register data
    data_setID.push(setID); // type of the set (AI or Human)
    data_itemID.push(itemID); // item ID is the unique ID assigned to each stimulus displayed on the screen
    data_trialType.push(trialType); // is this a test or a practice trial
    data_blockName.push(currentPostEngagementType); // what is the name of this block 
    data_totalTrialIndex.push(totalTrialIterationIndex); // what is the trial number (total across all blocks)
    
    data_dateTime.push(registeryDate); // date and time 
    data_zoomLevel.push(browserZoom);
    data_passageFont.push(currentFont); // what was the font used in this passage
    data_articleSkipType.push([]) // which button did they press (next or popup link)
    data_passageSpacing.push([]); // what was the spacing used in this passage
    
    // reaction time
    data_passageRT.push(demographicRT); 
    // words per minute
    data_passageWPM.push([]); 
    data_passageWordCount.push([]); 
    
    data_compAccuracy.push([]); // empty because there is no accuracy during passages 
    data_feedbackRating.push([]) // rating of the likert scale
    
    data_surveyRT.push(questionReactionTime); // time to respond to comprehension question
    data_compChoice.push(compChoiceText) // chosen option is registered as text
    // remove radio buttons so that they won't appear at the center in next trial
    
    // store data for psychoJS.experiment (ExperimentHandler)
    if (mousePostEngagement.x) {  psychoJS.experiment.addData('mousePostEngagement.x', mousePostEngagement.x[0])};
    if (mousePostEngagement.y) {  psychoJS.experiment.addData('mousePostEngagement.y', mousePostEngagement.y[0])};
    if (mousePostEngagement.leftButton) {  psychoJS.experiment.addData('mousePostEngagement.leftButton', mousePostEngagement.leftButton[0])};
    if (mousePostEngagement.midButton) {  psychoJS.experiment.addData('mousePostEngagement.midButton', mousePostEngagement.midButton[0])};
    if (mousePostEngagement.rightButton) {  psychoJS.experiment.addData('mousePostEngagement.rightButton', mousePostEngagement.rightButton[0])};
    if (mousePostEngagement.time) {  psychoJS.experiment.addData('mousePostEngagement.time', mousePostEngagement.time[0])};
    if (mousePostEngagement.clicked_name) {  psychoJS.experiment.addData('mousePostEngagement.clicked_name', mousePostEngagement.clicked_name[0])};
    
    // the Routine "post_engagement" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var currentQuestionDescription;
var currentQuestionDemographic;
var displayDemographicQuestionsComponents;
function displayDemographicQuestionsRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'displayDemographicQuestions' ---
    t = 0;
    displayDemographicQuestionsClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // call the question text 
    let questions = [
      [
        "hyperlkinkAwarenss",
        "Have you heard of the word hyperlinks?",
        "Yes;No"
      ],
      [
        "hyperlkinkKnowledge",
        "Do you know what Hyperlinks are?",
        "Yes;No"
      ],
      [
        "hyperlinkBenefit",
        "If you read information in the hyperlinks, did they help you understand the main article better?",
        "Strongly Agree;Agree;Neutral;Disagree;Strongly Disagree",
      ],
      [
        "postAttention",
        "To what extent did you pay attention to each question and consider your responses before answering?",
        "Extremely attentive;Attentive;Neutral;Inattentive;Extremely Inattentive",
      ],
      [
        "postRandomly",
        "Did you provide responses randomly or without careful consideration during any part of the  experiment?",
        "No all responses were thoughtful;Yes, a few responses were random;Yes, several responses were random;I'm not sure;Prefer not to say.",
      ],
    ];
    
    currentQuestionDescription = questions[post_survey_loop.thisN][0];
    currentQuestionDemographic = questions[post_survey_loop.thisN][1];
    sliderLabels = questions[post_survey_loop.thisN][2];
    
    
    // what is the item type (passage, comp question, mini survey?)
    itemID                          = currentQuestionDescription;
    
    //what is the set ID
    setID = "post_survey"
    
    // change additional question text's centering and style
    questionTextDemographic.setAlignHoriz('left')
    questionTextDemographic.bold = true;
    pressSpaceTextDemographic.setAlignHoriz('left')
    pressSpaceTextDemographic.bold = true;
    
    // adjust slider vertical size depending on the number of options 
    // get slider labels from the excel file
    console.log('slider size hyper pref before: ', sliderSize)
    
    //sliderLabels.unshift("Prefer not to answer");
    labelCount = (sliderLabels.length);
    // if there are less then 3 options on the slider, 
    // decrease the vertical size of the slider by half
    if (labelCount < 3){ 
            sliderSize[1] = (vsize*26/100)/2.5  
        } else {
             sliderSize[1] = vsize*26/100;
            }
        
    console.log('slider size hyper pref after: ', sliderSize)
    
    questionTextDemographic.setColor(new util.Color(textColor));
    questionTextDemographic.setPos([questionsXaxis, questionsTopYaxis]);
    questionTextDemographic.setText(currentQuestionDemographic);
    questionTextDemographic.setFont(textFont);
    questionTextDemographic.setHeight(questionTextSize*y_scale);
    pressSpaceTextDemographic.setColor(new util.Color(textColor));
    pressSpaceTextDemographic.setPos([questionsXaxis, questionsBottomYaxis]);
    pressSpaceTextDemographic.setText('Please press the button below to proceed after your choice.');
    pressSpaceTextDemographic.setFont(textFont);
    pressSpaceTextDemographic.setHeight(questionTextSize*y_scale);
    dradiobutton_1.setPos([0, 0]);
    dradiobutton_1.setSize([radiobutton_size, radiobutton_size]);
    dradiobutton_2.setPos([0, 0]);
    dradiobutton_2.setSize([radiobutton_size, radiobutton_size]);
    dradiobutton_3.setPos([0, 0]);
    dradiobutton_3.setSize([radiobutton_size, radiobutton_size]);
    dradiobutton_4.setPos([0, 0]);
    dradiobutton_4.setSize([radiobutton_size, radiobutton_size]);
    dradiobutton_5.setPos([0, 0]);
    dradiobutton_5.setSize([radiobutton_size, radiobutton_size]);
    dradiobutton_6.setPos([0, 0]);
    dradiobutton_6.setSize([radiobutton_size, radiobutton_size]);
    dradiobutton_7.setPos([0, 0]);
    dradiobutton_7.setSize([radiobutton_size, radiobutton_size]);
    dradiobutton_8.setPos([0, 0]);
    dradiobutton_8.setSize([radiobutton_size, radiobutton_size]);
    dradiobutton_9.setPos([0, 0]);
    dradiobutton_9.setSize([radiobutton_size, radiobutton_size]);
    questionSliderDemographic.reset()
    // Run 'Begin Routine' code from updateAndRegisterDemographic
    ////////////////////////////////////////////////
    //// UPDATE SLIDER LABELS, SIZE, COLOR ETC. ////
    ////////////////////////////////////////////////
    
    // get slider labels from the excel file
    sliderLabels                        = sliderLabels.split(";");
    //sliderLabels.unshift("Prefer not to answer");
    labelCount                          = (sliderLabels.length);
    sliderLabels                        = sliderLabels.reverse();
    
    // create tick marks so that data registry makes sense in terms of scores of each 
    // label: start from 1 not 0.
    tickMarks                           = range(1,labelCount);
    
    // display shuffled labels as tick marks 
    questionSliderDemographic.setLabels(sliderLabels);
    
    // change ticks of the slider
    questionSliderDemographic.setTicks(tickMarks);    
    
    // change font of the slider text
    questionSliderDemographic.setFontSize(labelTextSize*y_scale);
    
    // adjust slider's position and size
    questionSliderDemographic._pos      = sliderPosition;
    questionSliderDemographic._size     = sliderSize;
    
    // change slider's color and marker properties
    questionSliderDemographic._lineColor = col_white // color of static circle ;
    
    // what are the maximum amount of radio buttons of this slider
    // count radiobutton_# components, now it is 9.
    labelPosition_y                     = Math.abs(sliderSize[1] / (labelCount-1));
    
    positions                           = [];
    
    maxLabels                           = 9;
    
    radiobutton_size                    = [sliderSize[0]* 1.15, sliderSize[0]* 1.15];
    
    evenLabelCount                      = ((labelCount % 2) === 0);
    // name of radio components
    radioComponentName                  = 'dradiobutton_';
    
    if (evenLabelCount) {
        console.log('here even label')
        // there is no middle label, so get the half of the distance
        // of labels and move on from there while positioning the radio buttons 
        labelPosition_y                 = labelPosition_y / 2;
    
        // initialize label position coordinate multiplier
        positionMultiplier              = 1;
    
        // loop over number of labels
        for (var k = 0; k < labelCount; k++){
            
            // initialize label number index
            var buttonNo                = k + 1;                  
    
            if ((k % 2) === 0) {
                // increase the position multipler at every odd number 
                // this increases the distance from the middle label every third label
                if (k > 1) {
    
                    positionMultiplier  = positionMultiplier+2; 
                }  
                positions[k]            = [sliderPosition[0], sliderPosition[1]+(positionMultiplier*labelPosition_y)];
    
            } else{
    
                positions[k]            = [sliderPosition[0], sliderPosition[1]-(positionMultiplier*labelPosition_y)];
                
            }
            // enter the position and size values into individual label radio buttons  
            // position
            eval(radioComponentName + buttonNo + '._pos' +'= ['+positions[k][0] +', '+positions[k][1]+'];' );
            // size
            eval(radioComponentName + buttonNo + '._size' +'= ['+sliderSize[0]* 1.15+', '+sliderSize[0]* 1.15+'];' );
            // draw the changes 
            eval(radioComponentName + buttonNo + '._autoDraw' +'='+true+';');
            // console.log('comprehension radio button'+buttonNo.toString(),eval(radioComponentName + buttonNo + '._pos' +'= ['+positions[k][0] +', '+positions[k][1]+'];' ));
        }    
        
    } else {
            // if there are odd number of labels
            
            // there will be a middle label which should be placed at the 
            // default position of the slider
            dradiobutton_1._pos         = [sliderPosition[0], sliderPosition[1]];
            dradiobutton_1._size        = radiobutton_size;
    
            eval(radioComponentName + 1 + '._pos' +'= ['+ sliderPosition[0] +','+ sliderPosition[1]+'];' );
            // size
            eval(radioComponentName + 1 + '._size' +'= ['+sliderSize[0]* 1.15+', '+sliderSize[0]* 1.15+'];' );
    
            // initialize label position coordinate multiplier
            positionMultiplier          = 0;
    
            // loop over labels
            for (var k = 1; k < labelCount; k++){            
                // initialize label number index
                var buttonNo = k + 1;
                
                if ((k % 2) === 0) {
    
                    positions[k]        = [sliderPosition[0], sliderPosition[1]+(positionMultiplier*labelPosition_y)]; 
    
                } else{
                    // increase the position multipler at every odd number 
                    // this increases the distance from the middle label every third label
                    positionMultiplier  = positionMultiplier+1;
                    positions[k]        = [sliderPosition[0], sliderPosition[1]-(positionMultiplier*labelPosition_y)];   
                    
                }
                // console.log('uneven k',k);
                // console.log('uneven positionMultiplier',positionMultiplier);
                // enter the position and size values into individual label radio buttons  
                // position
                eval(radioComponentName + buttonNo + '._pos' +'= ['+ positions[k][0] +','+ positions[k][1]+'];' );
                // size
                eval(radioComponentName + buttonNo + '._size' +'= ['+sliderSize[0]* 1.15+', '+sliderSize[0]* 1.15+'];' );
                // draw the changes 
                eval(radioComponentName + buttonNo + '._autoDraw' +'='+true+';');
    
                // console.log('comprehension radio button'+buttonNo.toString(),eval(radioComponentName + buttonNo + '._pos' +'= ['+positions[k][0] +', '+positions[k][1]+'];' ));
            }
        
        }
    
    
    // remove radio buttons of slider labels that do not exist
    for (var i = labelCount; i <= maxLabels - 1 ; i++){
        console.log(i);
        var buttonNo = i + 1;
        positions[i] = [sliderPosition[0], sliderPosition[1]+labelPosition_y];
        eval(radioComponentName + buttonNo + '._pos'+'= ['+ 0 +','+ 0+'];' );
        eval(radioComponentName + buttonNo + '._size'+'='+1+';' );    
    }
    
    
    //////////////////////////////////////////////////////////////////
    // initiate input monitoring for conditional next-page command 
    // (next page command does not work unless participant chose one of 
    // the labels. 
    psychoJS.eventManager.clearEvents();
    clearEventAfterChoice = 1;
    
    
    // start Timer for question reaction time
    myClock.reset(); // reset the timer
    startTime = myClock.getTime();
    nextButton_demographic.setPos([buttonX, buttonY]);
    nextButton_demographic.setSize([buttonWidth, buttonHeight]);
    // setup some python lists for storing info about the mouseDemographic
    // current position of the mouse:
    mouseDemographic.x = [];
    mouseDemographic.y = [];
    mouseDemographic.leftButton = [];
    mouseDemographic.midButton = [];
    mouseDemographic.rightButton = [];
    mouseDemographic.time = [];
    mouseDemographic.clicked_name = [];
    gotValidClick = false; // until a click is received
    // keep track of which components have finished
    displayDemographicQuestionsComponents = [];
    displayDemographicQuestionsComponents.push(questionTextDemographic);
    displayDemographicQuestionsComponents.push(pressSpaceTextDemographic);
    displayDemographicQuestionsComponents.push(dradiobutton_1);
    displayDemographicQuestionsComponents.push(dradiobutton_2);
    displayDemographicQuestionsComponents.push(dradiobutton_3);
    displayDemographicQuestionsComponents.push(dradiobutton_4);
    displayDemographicQuestionsComponents.push(dradiobutton_5);
    displayDemographicQuestionsComponents.push(dradiobutton_6);
    displayDemographicQuestionsComponents.push(dradiobutton_7);
    displayDemographicQuestionsComponents.push(dradiobutton_8);
    displayDemographicQuestionsComponents.push(dradiobutton_9);
    displayDemographicQuestionsComponents.push(questionSliderDemographic);
    displayDemographicQuestionsComponents.push(nextButton_demographic);
    displayDemographicQuestionsComponents.push(mouseDemographic);
    
    for (const thisComponent of displayDemographicQuestionsComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function displayDemographicQuestionsRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'displayDemographicQuestions' ---
    // get current time
    t = displayDemographicQuestionsClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *questionTextDemographic* updates
    if (t >= 0.0 && questionTextDemographic.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      questionTextDemographic.tStart = t;  // (not accounting for frame time here)
      questionTextDemographic.frameNStart = frameN;  // exact frame index
      
      questionTextDemographic.setAutoDraw(true);
    }

    
    // *pressSpaceTextDemographic* updates
    if (t >= 0.0 && pressSpaceTextDemographic.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      pressSpaceTextDemographic.tStart = t;  // (not accounting for frame time here)
      pressSpaceTextDemographic.frameNStart = frameN;  // exact frame index
      
      pressSpaceTextDemographic.setAutoDraw(true);
    }

    
    // *dradiobutton_1* updates
    if (t >= 0.0 && dradiobutton_1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      dradiobutton_1.tStart = t;  // (not accounting for frame time here)
      dradiobutton_1.frameNStart = frameN;  // exact frame index
      
      dradiobutton_1.setAutoDraw(true);
    }

    
    // *dradiobutton_2* updates
    if (t >= 0.0 && dradiobutton_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      dradiobutton_2.tStart = t;  // (not accounting for frame time here)
      dradiobutton_2.frameNStart = frameN;  // exact frame index
      
      dradiobutton_2.setAutoDraw(true);
    }

    
    // *dradiobutton_3* updates
    if (t >= 0.0 && dradiobutton_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      dradiobutton_3.tStart = t;  // (not accounting for frame time here)
      dradiobutton_3.frameNStart = frameN;  // exact frame index
      
      dradiobutton_3.setAutoDraw(true);
    }

    
    // *dradiobutton_4* updates
    if (t >= 0.0 && dradiobutton_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      dradiobutton_4.tStart = t;  // (not accounting for frame time here)
      dradiobutton_4.frameNStart = frameN;  // exact frame index
      
      dradiobutton_4.setAutoDraw(true);
    }

    
    // *dradiobutton_5* updates
    if (t >= 0.0 && dradiobutton_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      dradiobutton_5.tStart = t;  // (not accounting for frame time here)
      dradiobutton_5.frameNStart = frameN;  // exact frame index
      
      dradiobutton_5.setAutoDraw(true);
    }

    
    // *dradiobutton_6* updates
    if (t >= 0.0 && dradiobutton_6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      dradiobutton_6.tStart = t;  // (not accounting for frame time here)
      dradiobutton_6.frameNStart = frameN;  // exact frame index
      
      dradiobutton_6.setAutoDraw(true);
    }

    
    // *dradiobutton_7* updates
    if (t >= 0.0 && dradiobutton_7.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      dradiobutton_7.tStart = t;  // (not accounting for frame time here)
      dradiobutton_7.frameNStart = frameN;  // exact frame index
      
      dradiobutton_7.setAutoDraw(true);
    }

    
    // *dradiobutton_8* updates
    if (t >= 0.0 && dradiobutton_8.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      dradiobutton_8.tStart = t;  // (not accounting for frame time here)
      dradiobutton_8.frameNStart = frameN;  // exact frame index
      
      dradiobutton_8.setAutoDraw(true);
    }

    
    // *dradiobutton_9* updates
    if (t >= 0.0 && dradiobutton_9.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      dradiobutton_9.tStart = t;  // (not accounting for frame time here)
      dradiobutton_9.frameNStart = frameN;  // exact frame index
      
      dradiobutton_9.setAutoDraw(true);
    }

    
    // *questionSliderDemographic* updates
    if (t >= 0.0 && questionSliderDemographic.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      questionSliderDemographic.tStart = t;  // (not accounting for frame time here)
      questionSliderDemographic.frameNStart = frameN;  // exact frame index
      
      questionSliderDemographic.setAutoDraw(true);
    }

    compChoice = questionSliderDemographic.getRating();
    
    // create a for loop using length of labels and update these like that
    for (let i = 0; i < labelCount; i++) {
        //console.log('current label for wrapwidth',i)
        //console.log('type of I',typeof i.toString())
        questionSliderDemographic._pixiLabels[i.toString()]._style._wordWrap = true
        questionSliderDemographic._pixiLabels[i.toString()]._style._wordWrapWidth = wrapWidthText    
    }
    
    // *nextButton_demographic* updates
    if ((questionSliderDemographic.rating) && nextButton_demographic.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      nextButton_demographic.tStart = t;  // (not accounting for frame time here)
      nextButton_demographic.frameNStart = frameN;  // exact frame index
      
      nextButton_demographic.setAutoDraw(true);
    }

    // *mouseDemographic* updates
    if ((questionSliderDemographic.rating) && mouseDemographic.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouseDemographic.tStart = t;  // (not accounting for frame time here)
      mouseDemographic.frameNStart = frameN;  // exact frame index
      
      mouseDemographic.status = PsychoJS.Status.STARTED;
      mouseDemographic.mouseClock.reset();
      prevButtonState = mouseDemographic.getPressed();  // if button is down already this ISN'T a new click
      }
    if (mouseDemographic.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = mouseDemographic.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          for (const obj of [nextButton_demographic]) {
            if (obj.contains(mouseDemographic)) {
              gotValidClick = true;
              mouseDemographic.clicked_name.push(obj.name)
            }
          }
          if (gotValidClick === true) { 
            _mouseXYs = mouseDemographic.getPos();
            mouseDemographic.x.push(_mouseXYs[0]);
            mouseDemographic.y.push(_mouseXYs[1]);
            mouseDemographic.leftButton.push(_mouseButtons[0]);
            mouseDemographic.midButton.push(_mouseButtons[1]);
            mouseDemographic.rightButton.push(_mouseButtons[2]);
            mouseDemographic.time.push(mouseDemographic.mouseClock.getTime());
          }
          if (gotValidClick === true) { // abort routine on response
            continueRoutine = false;
          }
        }
      }
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of displayDemographicQuestionsComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


var isGender;
var isVision;
var participantGender;
var participantVision;
function displayDemographicQuestionsRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'displayDemographicQuestions' ---
    for (const thisComponent of displayDemographicQuestionsComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('questionSliderDemographic.response', questionSliderDemographic.getRating());
    psychoJS.experiment.addData('questionSliderDemographic.rt', questionSliderDemographic.getRT());
    // get the selected option among the labels
    compChoiceText = sliderLabels[compChoice-1]; // -1 because label index starts with 0, tick mark starts with 1. 
    
    isGender = currentQuestionDescription === "gender";
    isVision = currentQuestionDescription === "visionCorrection";
    
    if (isGender === true){
            participantGender = (sliderLabels[compChoice-1]);
        }
    
    if (isVision === true) {
            participantVision = (sliderLabels[compChoice-1]);
        }
    
    
    // get reaction time from psychopy's mouse component 
    mouselength             = mouseDemographic.time.length;
    // get the mouse component's starting second
    mouse_tStart            = mouseDemographic.tStart; 
    // get 'next button's starting second
    button_tStart           = questionTextDemographic.tStart; 
    // get the latest mouse click-- which terminates the loop    
    validClick              = mouseDemographic.time[mouselength-1]; 
    // add mouse's and button's starting seconds to the click RT, because it starts to count RT after these are displayed
    demographicRT           = validClick + mouse_tStart - button_tStart; 
    
    // get the zoom level of browser
    var browserZoom     = window.outerWidth*100 / window.innerWidth;
    // format date
    registeryDate       = util.MonotonicClock.getDateStr();
    registeryDate       = formatDateTime(registeryDate);
    
    // register data
    data_setID.push(setID); // type of the set (AI or Human)
    data_itemID.push(itemID); // item ID is the unique ID assigned to each stimulus displayed on the screen
    data_trialType.push(trialType); // is this a test or a practice trial
    data_blockName.push("post_survey"); // what is the name of this block 
    data_totalTrialIndex.push(totalTrialIterationIndex); // what is the trial number (total across all blocks)
    
    data_dateTime.push(registeryDate); // date and time 
    data_zoomLevel.push(browserZoom);
    data_passageFont.push(currentFont); // what was the font used in this passage
    data_articleSkipType.push([]) // which button did they press (next or popup link)
    data_passageSpacing.push([]); // what was the spacing used in this passage
    
    // reaction time
    data_passageRT.push(demographicRT); 
    // words per minute
    data_passageWPM.push([]); 
    data_passageWordCount.push([]); 
    
    data_compAccuracy.push([]); // empty because there is no accuracy during passages 
    data_feedbackRating.push([]) // rating of the likert scale
    
    data_surveyRT.push(questionReactionTime); // time to respond to comprehension question
    data_compChoice.push(compChoiceText) // chosen option is registered as text
    // remove radio buttons so that they won't appear at the center in next trial
    for (var i = 0; i < maxLabels; i++) {
        var buttonNo = i + 1;
        eval(radioComponentName + buttonNo + '._pos'+'= ['+ 0 +','+ 0+'];' );
        eval(radioComponentName + buttonNo + '._size'+'='+1+';' );    
        
        }
    // store data for psychoJS.experiment (ExperimentHandler)
    if (mouseDemographic.x) {  psychoJS.experiment.addData('mouseDemographic.x', mouseDemographic.x[0])};
    if (mouseDemographic.y) {  psychoJS.experiment.addData('mouseDemographic.y', mouseDemographic.y[0])};
    if (mouseDemographic.leftButton) {  psychoJS.experiment.addData('mouseDemographic.leftButton', mouseDemographic.leftButton[0])};
    if (mouseDemographic.midButton) {  psychoJS.experiment.addData('mouseDemographic.midButton', mouseDemographic.midButton[0])};
    if (mouseDemographic.rightButton) {  psychoJS.experiment.addData('mouseDemographic.rightButton', mouseDemographic.rightButton[0])};
    if (mouseDemographic.time) {  psychoJS.experiment.addData('mouseDemographic.time', mouseDemographic.time[0])};
    if (mouseDemographic.clicked_name) {  psychoJS.experiment.addData('mouseDemographic.clicked_name', mouseDemographic.clicked_name[0])};
    
    // the Routine "displayDemographicQuestions" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var trouble_with_testComponents;
function trouble_with_testRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'trouble_with_test' ---
    t = 0;
    trouble_with_testClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    troubleFillBox.setText('');
    troubleFillBox.refresh();
    troubleFillBox.setPos(textboxPosition);
    troubleFillBox.setSize(textboxSize);
    troubleFillBox.setText('');
    troubleFillBox.setFont(textFont);
    
    psychoJS.eventManager.clearEvents();
    clearEventAfterChoice = 1;
    //troubleFillBox.refresh()
    
    troubleWithTest.setAlignHoriz('left')
    pressSpaceTrouble.setAlignHoriz('left')
    
    
    // start Timer for question reaction time
    myClock.reset(); // reset the timer
    startTime = myClock.getTime();
    troubleWithTest.setColor(new util.Color(textColor));
    troubleWithTest.setPos([xAxisCenter, questionsTopYaxis]);
    troubleWithTest.setText('Did you encounter any issues or have any feedback you’d like to share about your experience completing the experiment?');
    troubleWithTest.setFont(textFont);
    troubleWithTest.setHeight(questionTextSize*y_scale);
    pressSpaceTrouble.setColor(new util.Color(textColor));
    pressSpaceTrouble.setPos([xAxisCenter, questionsBottomYaxis]);
    pressSpaceTrouble.setText('"Please press the ENTER to advance to the next page after you type in."');
    pressSpaceTrouble.setFont(textFont);
    pressSpaceTrouble.setHeight(questionTextSize*y_scale);
    // keep track of which components have finished
    trouble_with_testComponents = [];
    trouble_with_testComponents.push(troubleFillBox);
    trouble_with_testComponents.push(troubleWithTest);
    trouble_with_testComponents.push(pressSpaceTrouble);
    
    for (const thisComponent of trouble_with_testComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function trouble_with_testRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'trouble_with_test' ---
    // get current time
    t = trouble_with_testClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *troubleFillBox* updates
    if (t >= 0.0 && troubleFillBox.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      troubleFillBox.tStart = t;  // (not accounting for frame time here)
      troubleFillBox.frameNStart = frameN;  // exact frame index
      
      troubleFillBox.setAutoDraw(true);
    }

    // get the text inside the text box
    textInput = troubleFillBox._pixi.text;
    textInput = textInput.trim();
    
    
    anyCharacterTyped = (textInput.length >= 1);
    
    currentTime = myClock.getTime();
    twoSecondElapsed = currentTime-startTime >=keyboardPauseDuration;
    if (twoSecondElapsed===true){
        if (anyCharacterTyped) {
            var _pj;
            
            function _pj_snippets(container) {
                function in_es6(left, right) {
                    if (((right instanceof Array) || ((typeof right) === "string"))) {
                        return (right.indexOf(left) > (- 1));
                    } else {
                        if (((right instanceof Map) || (right instanceof Set) || (right instanceof WeakMap) || (right instanceof WeakSet))) {
                            return right.has(left);
                        } else {
                            return (left in right);
                        }
                    }
                }
                container["in_es6"] = in_es6;
                return container;
            }
    
            _pj = {};
            _pj_snippets(_pj);
            keys = psychoJS.eventManager.getKeys();
            console.log(keys);
                if (keys.length) {
                    if (_pj.in_es6("return", keys)) {         
                        continueRoutine = false;            
                    } else {
                            psychoJS.eventManager.clearEvents();
                        }
                }
        } else {
                psychoJS.eventManager.clearEvents(); 
            }
    }
    
    // *troubleWithTest* updates
    if (t >= 0.0 && troubleWithTest.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      troubleWithTest.tStart = t;  // (not accounting for frame time here)
      troubleWithTest.frameNStart = frameN;  // exact frame index
      
      troubleWithTest.setAutoDraw(true);
    }

    
    // *pressSpaceTrouble* updates
    if (t >= 0.0 && pressSpaceTrouble.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      pressSpaceTrouble.tStart = t;  // (not accounting for frame time here)
      pressSpaceTrouble.frameNStart = frameN;  // exact frame index
      
      pressSpaceTrouble.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of trouble_with_testComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function trouble_with_testRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'trouble_with_test' ---
    for (const thisComponent of trouble_with_testComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('troubleFillBox.text',troubleFillBox.text)
    // Run 'End Routine' code from getTroubleText
    // get browser zoom
    browserZoom = window.outerWidth*100 / window.innerWidth;
    
    // format date
    registeryDate = util.MonotonicClock.getDateStr()
    registeryDate = formatDateTime(registeryDate)
    
    // register data
    data_setID.push("troubleWithTest"); // type of the set (AI or Human)
    data_itemID.push("troubleWithTest"); // item ID is the unique ID assigned to each stimulus displayed on the screen
    data_trialType.push(trialType); // is this a test or a practice trial
    data_blockName.push("troubleWithTest"); // what is the name of this block 
    data_totalTrialIndex.push("troubleWithTest"); // what is the trial number (total across all blocks)
    
    data_dateTime.push(registeryDate); // date and time 
    data_zoomLevel.push(browserZoom);
    data_passageFont.push(currentFont); // what was the font used in this passage
    data_articleSkipType.push([]) // which button did they press (next or popup link)
    
    data_passageRT.push([]); // words per minute
    data_passageWPM.push([]); // words per minute
    data_passageWordCount.push([]); 
    data_passageSpacing.push([]); // what was the spacing used in this passage
    
    
    data_compAccuracy.push([]); // empty because there is no accuracy during passages 
    data_feedbackRating.push([]) // rating of the likert scale
    
    data_surveyRT.push(questionReactionTime); // time to respond to comprehension question
    data_compChoice.push(textInput) // chosen option is registered as text
    
    // the Routine "trouble_with_test" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var iterationCountTrials;
var currentDateTime;
var writeDataToFileComponents;
function writeDataToFileRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'writeDataToFile' ---
    t = 0;
    writeDataToFileClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // Run 'Begin Routine' code from writeToFile
    iterationCountTrials = data_totalTrialIndex.length;
    trialColumNames = ["trialNo","setID","itemID" ,"blockName", "trialType","fontName","linkCondition","articleSkipType","wordCount","passageRT", "wordsPerMinute", "comprehensionAccuracy", "comprehensionChoice","choiceRT","feedbackSurveyRating"];
    
    // add headers right above the data 
    psychoJS.experiment.addData("dateTime", "dateTime")
    psychoJS.experiment.addData(trialColumNames[0], trialColumNames[0]);
    psychoJS.experiment.addData("subid", "subid")
    psychoJS.experiment.addData("gender", "gender")
    psychoJS.experiment.addData("age", "age")
    psychoJS.experiment.addData("counterbalance_group", "counterbalance_group")
    for (let columni = 1; columni < trialColumNames.length; columni++) {
        // loop over trialColumnNames and create headers for the datasheet
      psychoJS.experiment.addData(trialColumNames[columni], trialColumNames[columni]);
    }
    psychoJS.experiment.addData("X_Scale", "X_Scale");
    psychoJS.experiment.addData("Y_Scale", "Y_Scale");
    psychoJS.experiment.addData("IsFullScreen", "IsFullScreen")
    psychoJS.experiment.addData("window_width", "window_width")
    psychoJS.experiment.addData("window_height", "window_height")
    psychoJS.experiment.addData("browser", "browser")
    psychoJS.experiment.addData("browserZoomLevel", "browserZoomLevel")
    psychoJS.experiment.nextEntry();
    
    //
    // NOTE: REGISTER FASTEST FONT, SPACING, AND INTERACTION CONDITION TO ALL ROWS
    //
    
    // write data in long format
    for (var i, _pj_c = 0, _pj_a = util.range(0, iterationCountTrials), _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
        i = _pj_a[_pj_c];  
        psychoJS.experiment.addData("dateTime", data_dateTime[i])
        psychoJS.experiment.addData(trialColumNames[0], data_totalTrialIndex[i]);
        psychoJS.experiment.addData("subid", participantCode)    
        psychoJS.experiment.addData("gender", "gender")
        psychoJS.experiment.addData("age", "age")
        //psychoJS.experiment.addData("prolific_id", prolific_ID)
        psychoJS.experiment.addData("counterbalance_group", cb_group)
        psychoJS.experiment.addData(trialColumNames[1],  data_setID[i]);
        psychoJS.experiment.addData(trialColumNames[2],  data_itemID[i]);
        psychoJS.experiment.addData(trialColumNames[3],  data_blockName[i]);
        psychoJS.experiment.addData(trialColumNames[4],  data_trialType[i]);
        psychoJS.experiment.addData(trialColumNames[5],  data_passageFont[i]);
        psychoJS.experiment.addData(trialColumNames[6],  data_passageSpacing[i]);
        psychoJS.experiment.addData(trialColumNames[7],  data_articleSkipType[i]);
        psychoJS.experiment.addData(trialColumNames[8],  data_passageWordCount[i]);
        psychoJS.experiment.addData(trialColumNames[9],  data_passageRT[i]);
        psychoJS.experiment.addData(trialColumNames[10],  data_passageWPM[i]);
        psychoJS.experiment.addData(trialColumNames[11], data_compAccuracy[i]);
        psychoJS.experiment.addData(trialColumNames[12], data_compChoice[i]);
        psychoJS.experiment.addData(trialColumNames[13], data_surveyRT[i]);
        psychoJS.experiment.addData(trialColumNames[14], data_feedbackRating[i]);       
        thisExp.addData("X_Scale", x_scale);
        thisExp.addData("Y_Scale", y_scale);
        psychoJS.experiment.addData("IsFullScreen", psychoJS.window._windowAlreadyInFullScreen)
        psychoJS.experiment.addData("window_width", psychoJS.window._size[0])
        psychoJS.experiment.addData("window_height", psychoJS.window._size[1])
        psychoJS.experiment.addData("browser", psychoJS._browser)
        psychoJS.experiment.addData("browserZoomLevel", data_zoomLevel[i])
        psychoJS.experiment.nextEntry();
    }
    
    // add the date and time of completion to the database
    currentDateTime = util.MonotonicClock.getDateStr();
    currentDateTime = formatDateTime(currentDateTime);
    
    // keep track of which components have finished
    writeDataToFileComponents = [];
    
    for (const thisComponent of writeDataToFileComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function writeDataToFileRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'writeDataToFile' ---
    // get current time
    t = writeDataToFileClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of writeDataToFileComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function writeDataToFileRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'writeDataToFile' ---
    for (const thisComponent of writeDataToFileComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // the Routine "writeDataToFile" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var thanksText;
var fitText;
var clashText;
var pressSpace;
var wholeFinalInstruction;
var _key_resp_3_allKeys;
var finalInstructionsComponents;
function finalInstructionsRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'finalInstructions' ---
    t = 0;
    finalInstructionsClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(30.000000);
    // update component parameters for each repeat
    thanksText = "Thank you for participating to this test!\n\n\n\n"
    
    fitText = 'Your best ' +experimentType +' is ' + disp_fitCondition + ' with '+ disp_fitWpm + ' words per minute and %'+ disp_fitAcc + ' correct responses on comprehension questions.' + "\n\n\n"
    clashText = 'Your worst ' +experimentType + ' is ' + disp_clashCondition + ' with '+ disp_clashWpm + ' words per minute and %'+ disp_clashAcc + ' correct responses on comprehension questions.' + "\n\n\n\n"
    
    pressSpace = "You will be redirected to Prolific to receive your participation compensation.\n\nPress space to finish the experiment."
    wholeFinalInstruction = thanksText+fitText+clashText + pressSpace;
    finish_instructions.setAlignHoriz('left')
    finish_instructions.setColor(new util.Color(textColor));
    finish_instructions.setPos([xAxisCenter, 0]);
    finish_instructions.setText(wholeFinalInstruction);
    finish_instructions.setFont(textFont);
    finish_instructions.setHeight(instructionTextSize*y_scale);
    key_resp_3.keys = undefined;
    key_resp_3.rt = undefined;
    _key_resp_3_allKeys = [];
    // keep track of which components have finished
    finalInstructionsComponents = [];
    finalInstructionsComponents.push(finish_instructions);
    finalInstructionsComponents.push(key_resp_3);
    
    for (const thisComponent of finalInstructionsComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function finalInstructionsRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'finalInstructions' ---
    // get current time
    t = finalInstructionsClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *finish_instructions* updates
    if (t >= 0 && finish_instructions.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      finish_instructions.tStart = t;  // (not accounting for frame time here)
      finish_instructions.frameNStart = frameN;  // exact frame index
      
      finish_instructions.setAutoDraw(true);
    }

    frameRemains = 0 + 30 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (finish_instructions.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      finish_instructions.setAutoDraw(false);
    }
    
    // *key_resp_3* updates
    if (t >= 1 && key_resp_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_3.tStart = t;  // (not accounting for frame time here)
      key_resp_3.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_3.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_3.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_3.clearEvents(); });
    }

    frameRemains = 1 + 9 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (key_resp_3.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      key_resp_3.status = PsychoJS.Status.FINISHED;
  }

    if (key_resp_3.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_3.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_3_allKeys = _key_resp_3_allKeys.concat(theseKeys);
      if (_key_resp_3_allKeys.length > 0) {
        key_resp_3.keys = _key_resp_3_allKeys[_key_resp_3_allKeys.length - 1].name;  // just the last key pressed
        key_resp_3.rt = _key_resp_3_allKeys[_key_resp_3_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of finalInstructionsComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function finalInstructionsRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'finalInstructions' ---
    for (const thisComponent of finalInstructionsComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_3.corr, level);
    }
    psychoJS.experiment.addData('key_resp_3.keys', key_resp_3.keys);
    if (typeof key_resp_3.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_3.rt', key_resp_3.rt);
        routineTimer.reset();
        }
    
    key_resp_3.stop();
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


function importConditions(currentLoop) {
  return async function () {
    psychoJS.importAttributes(currentLoop.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}


async function quitPsychoJS(message, isCompleted) {
  // Check for and save orphaned data
  if (psychoJS.experiment.isEntryEmpty()) {
    psychoJS.experiment.nextEntry();
  }
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
      
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});
  
  return Scheduler.Event.QUIT;
}

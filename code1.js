gdjs.DialogCode = {};
gdjs.DialogCode.localVariables = [];
gdjs.DialogCode.GDbackgroundObjects1= [];
gdjs.DialogCode.GDbackgroundObjects2= [];
gdjs.DialogCode.GDbackgroundObjects3= [];
gdjs.DialogCode.GDorangpertamaObjects1= [];
gdjs.DialogCode.GDorangpertamaObjects2= [];
gdjs.DialogCode.GDorangpertamaObjects3= [];
gdjs.DialogCode.GDorangkeduaObjects1= [];
gdjs.DialogCode.GDorangkeduaObjects2= [];
gdjs.DialogCode.GDorangkeduaObjects3= [];
gdjs.DialogCode.GDdialogObjects1= [];
gdjs.DialogCode.GDdialogObjects2= [];
gdjs.DialogCode.GDdialogObjects3= [];
gdjs.DialogCode.GDRedPanelObjects1= [];
gdjs.DialogCode.GDRedPanelObjects2= [];
gdjs.DialogCode.GDRedPanelObjects3= [];
gdjs.DialogCode.GDBluePanelObjects1= [];
gdjs.DialogCode.GDBluePanelObjects2= [];
gdjs.DialogCode.GDBluePanelObjects3= [];
gdjs.DialogCode.GDnamakarakterObjects1= [];
gdjs.DialogCode.GDnamakarakterObjects2= [];
gdjs.DialogCode.GDnamakarakterObjects3= [];
gdjs.DialogCode.GDBtnNextObjects1= [];
gdjs.DialogCode.GDBtnNextObjects2= [];
gdjs.DialogCode.GDBtnNextObjects3= [];


gdjs.DialogCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "waktu") >= 0.05;
if (isConditionTrue_0) {
{gdjs.dialogueTree.scrollClippedText();
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "waktu");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.dialogueTree.hasClippedScrollingCompleted();
}
if (isConditionTrue_0) {
{gdjs.dialogueTree.goToNextDialogueLine();
}}

}


};gdjs.DialogCode.mapOfGDgdjs_9546DialogCode_9546GDBtnNextObjects1Objects = Hashtable.newFrom({"BtnNext": gdjs.DialogCode.GDBtnNextObjects1});
gdjs.DialogCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.dialogueTree.loadFromJsonFile(runtimeScene, "Percakapan");
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "waktu");
}{gdjs.dialogueTree.startFrom("Start");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.dialogueTree.isDialogueLineType("text");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("dialog"), gdjs.DialogCode.GDdialogObjects1);
{for(var i = 0, len = gdjs.DialogCode.GDdialogObjects1.length ;i < len;++i) {
    gdjs.DialogCode.GDdialogObjects1[i].setBBText(gdjs.dialogueTree.getClippedLineText());
}
}
{ //Subevents
gdjs.DialogCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.dialogueTree.isCommandCalled("Doni");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("namakarakter"), gdjs.DialogCode.GDnamakarakterObjects1);
{for(var i = 0, len = gdjs.DialogCode.GDnamakarakterObjects1.length ;i < len;++i) {
    gdjs.DialogCode.GDnamakarakterObjects1[i].setBBText("Doni");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.dialogueTree.isCommandCalled("Putri");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("namakarakter"), gdjs.DialogCode.GDnamakarakterObjects1);
{for(var i = 0, len = gdjs.DialogCode.GDnamakarakterObjects1.length ;i < len;++i) {
    gdjs.DialogCode.GDnamakarakterObjects1[i].setBBText("Putri");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.dialogueTree.isCommandCalled("Stop");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("BtnNext"), gdjs.DialogCode.GDBtnNextObjects1);
{for(var i = 0, len = gdjs.DialogCode.GDBtnNextObjects1.length ;i < len;++i) {
    gdjs.DialogCode.GDBtnNextObjects1[i].getBehavior("Tween").addObjectPositionYTween2("BtnNext", 520, "easeOutQuad", 2, false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("BtnNext"), gdjs.DialogCode.GDBtnNextObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.DialogCode.mapOfGDgdjs_9546DialogCode_9546GDBtnNextObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.hasAnyTouchOrMouseStarted(runtimeScene);
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "level1", false);
}}

}


};

gdjs.DialogCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.DialogCode.GDbackgroundObjects1.length = 0;
gdjs.DialogCode.GDbackgroundObjects2.length = 0;
gdjs.DialogCode.GDbackgroundObjects3.length = 0;
gdjs.DialogCode.GDorangpertamaObjects1.length = 0;
gdjs.DialogCode.GDorangpertamaObjects2.length = 0;
gdjs.DialogCode.GDorangpertamaObjects3.length = 0;
gdjs.DialogCode.GDorangkeduaObjects1.length = 0;
gdjs.DialogCode.GDorangkeduaObjects2.length = 0;
gdjs.DialogCode.GDorangkeduaObjects3.length = 0;
gdjs.DialogCode.GDdialogObjects1.length = 0;
gdjs.DialogCode.GDdialogObjects2.length = 0;
gdjs.DialogCode.GDdialogObjects3.length = 0;
gdjs.DialogCode.GDRedPanelObjects1.length = 0;
gdjs.DialogCode.GDRedPanelObjects2.length = 0;
gdjs.DialogCode.GDRedPanelObjects3.length = 0;
gdjs.DialogCode.GDBluePanelObjects1.length = 0;
gdjs.DialogCode.GDBluePanelObjects2.length = 0;
gdjs.DialogCode.GDBluePanelObjects3.length = 0;
gdjs.DialogCode.GDnamakarakterObjects1.length = 0;
gdjs.DialogCode.GDnamakarakterObjects2.length = 0;
gdjs.DialogCode.GDnamakarakterObjects3.length = 0;
gdjs.DialogCode.GDBtnNextObjects1.length = 0;
gdjs.DialogCode.GDBtnNextObjects2.length = 0;
gdjs.DialogCode.GDBtnNextObjects3.length = 0;

gdjs.DialogCode.eventsList1(runtimeScene);
gdjs.DialogCode.GDbackgroundObjects1.length = 0;
gdjs.DialogCode.GDbackgroundObjects2.length = 0;
gdjs.DialogCode.GDbackgroundObjects3.length = 0;
gdjs.DialogCode.GDorangpertamaObjects1.length = 0;
gdjs.DialogCode.GDorangpertamaObjects2.length = 0;
gdjs.DialogCode.GDorangpertamaObjects3.length = 0;
gdjs.DialogCode.GDorangkeduaObjects1.length = 0;
gdjs.DialogCode.GDorangkeduaObjects2.length = 0;
gdjs.DialogCode.GDorangkeduaObjects3.length = 0;
gdjs.DialogCode.GDdialogObjects1.length = 0;
gdjs.DialogCode.GDdialogObjects2.length = 0;
gdjs.DialogCode.GDdialogObjects3.length = 0;
gdjs.DialogCode.GDRedPanelObjects1.length = 0;
gdjs.DialogCode.GDRedPanelObjects2.length = 0;
gdjs.DialogCode.GDRedPanelObjects3.length = 0;
gdjs.DialogCode.GDBluePanelObjects1.length = 0;
gdjs.DialogCode.GDBluePanelObjects2.length = 0;
gdjs.DialogCode.GDBluePanelObjects3.length = 0;
gdjs.DialogCode.GDnamakarakterObjects1.length = 0;
gdjs.DialogCode.GDnamakarakterObjects2.length = 0;
gdjs.DialogCode.GDnamakarakterObjects3.length = 0;
gdjs.DialogCode.GDBtnNextObjects1.length = 0;
gdjs.DialogCode.GDBtnNextObjects2.length = 0;
gdjs.DialogCode.GDBtnNextObjects3.length = 0;


return;

}

gdjs['DialogCode'] = gdjs.DialogCode;

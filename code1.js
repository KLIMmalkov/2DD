gdjs._1059_1088_1086_1074_1077_1085_1100_322Code = {};
gdjs._1059_1088_1086_1074_1077_1085_1100_322Code.localVariables = [];
gdjs._1059_1088_1086_1074_1077_1085_1100_322Code.idToCallbackMap = new Map();
gdjs._1059_1088_1086_1074_1077_1085_1100_322Code.GDNewSprite2Objects1= [];
gdjs._1059_1088_1086_1074_1077_1085_1100_322Code.GDNewSprite2Objects2= [];
gdjs._1059_1088_1086_1074_1077_1085_1100_322Code.GDNewSprite7Objects1= [];
gdjs._1059_1088_1086_1074_1077_1085_1100_322Code.GDNewSprite7Objects2= [];
gdjs._1059_1088_1086_1074_1077_1085_1100_322Code.GDBotObjects1= [];
gdjs._1059_1088_1086_1074_1077_1085_1100_322Code.GDBotObjects2= [];
gdjs._1059_1088_1086_1074_1077_1085_1100_322Code.GDNewSpriteObjects1= [];
gdjs._1059_1088_1086_1074_1077_1085_1100_322Code.GDNewSpriteObjects2= [];
gdjs._1059_1088_1086_1074_1077_1085_1100_322Code.GDNewSprite3Objects1= [];
gdjs._1059_1088_1086_1074_1077_1085_1100_322Code.GDNewSprite3Objects2= [];
gdjs._1059_1088_1086_1074_1077_1085_1100_322Code.GDNewSprite4Objects1= [];
gdjs._1059_1088_1086_1074_1077_1085_1100_322Code.GDNewSprite4Objects2= [];
gdjs._1059_1088_1086_1074_1077_1085_1100_322Code.GDNewSprite5Objects1= [];
gdjs._1059_1088_1086_1074_1077_1085_1100_322Code.GDNewSprite5Objects2= [];
gdjs._1059_1088_1086_1074_1077_1085_1100_322Code.GDCoinTextObjects1= [];
gdjs._1059_1088_1086_1074_1077_1085_1100_322Code.GDCoinTextObjects2= [];
gdjs._1059_1088_1086_1074_1077_1085_1100_322Code.GDNewSprite6Objects1= [];
gdjs._1059_1088_1086_1074_1077_1085_1100_322Code.GDNewSprite6Objects2= [];
gdjs._1059_1088_1086_1074_1077_1085_1100_322Code.GDCoinText2Objects1= [];
gdjs._1059_1088_1086_1074_1077_1085_1100_322Code.GDCoinText2Objects2= [];
gdjs._1059_1088_1086_1074_1077_1085_1100_322Code.GDCoinText3Objects1= [];
gdjs._1059_1088_1086_1074_1077_1085_1100_322Code.GDCoinText3Objects2= [];


gdjs._1059_1088_1086_1074_1077_1085_1100_322Code.mapOfGDgdjs_9546_95951059_95951088_95951086_95951074_95951077_95951085_95951100_9595322Code_9546GDNewSpriteObjects1Objects = Hashtable.newFrom({"NewSprite": gdjs._1059_1088_1086_1074_1077_1085_1100_322Code.GDNewSpriteObjects1});
gdjs._1059_1088_1086_1074_1077_1085_1100_322Code.mapOfGDgdjs_9546_95951059_95951088_95951086_95951074_95951077_95951085_95951100_9595322Code_9546GDNewSprite5Objects1Objects = Hashtable.newFrom({"NewSprite5": gdjs._1059_1088_1086_1074_1077_1085_1100_322Code.GDNewSprite5Objects1});
gdjs._1059_1088_1086_1074_1077_1085_1100_322Code.asyncCallback11342828 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs._1059_1088_1086_1074_1077_1085_1100_322Code.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("NewSprite"), gdjs._1059_1088_1086_1074_1077_1085_1100_322Code.GDNewSpriteObjects2);

{for(var i = 0, len = gdjs._1059_1088_1086_1074_1077_1085_1100_322Code.GDNewSpriteObjects2.length ;i < len;++i) {
    gdjs._1059_1088_1086_1074_1077_1085_1100_322Code.GDNewSpriteObjects2[i].getBehavior("Health").Hit(10, false, false, null);
}
}
{for(var i = 0, len = gdjs._1059_1088_1086_1074_1077_1085_1100_322Code.GDNewSpriteObjects2.length ;i < len;++i) {
    gdjs._1059_1088_1086_1074_1077_1085_1100_322Code.GDNewSpriteObjects2[i].getBehavior("Health").TriggerDamageCooldown(null);
}
}
gdjs._1059_1088_1086_1074_1077_1085_1100_322Code.localVariables.length = 0;
}
gdjs._1059_1088_1086_1074_1077_1085_1100_322Code.idToCallbackMap.set(11342828, gdjs._1059_1088_1086_1074_1077_1085_1100_322Code.asyncCallback11342828);
gdjs._1059_1088_1086_1074_1077_1085_1100_322Code.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs._1059_1088_1086_1074_1077_1085_1100_322Code.localVariables);
for (const obj of gdjs._1059_1088_1086_1074_1077_1085_1100_322Code.GDNewSpriteObjects1) asyncObjectsList.addObject("NewSprite", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs._1059_1088_1086_1074_1077_1085_1100_322Code.asyncCallback11342828(runtimeScene, asyncObjectsList)), 11342828, asyncObjectsList);
}
}

}


};gdjs._1059_1088_1086_1074_1077_1085_1100_322Code.eventsList1 = function(runtimeScene) {

{

/* Reuse gdjs._1059_1088_1086_1074_1077_1085_1100_322Code.GDNewSpriteObjects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._1059_1088_1086_1074_1077_1085_1100_322Code.GDNewSpriteObjects1.length;i<l;++i) {
    if ( gdjs._1059_1088_1086_1074_1077_1085_1100_322Code.GDNewSpriteObjects1[i].getBehavior("PlatformerObject").isJumping() ) {
        isConditionTrue_0 = true;
        gdjs._1059_1088_1086_1074_1077_1085_1100_322Code.GDNewSpriteObjects1[k] = gdjs._1059_1088_1086_1074_1077_1085_1100_322Code.GDNewSpriteObjects1[i];
        ++k;
    }
}
gdjs._1059_1088_1086_1074_1077_1085_1100_322Code.GDNewSpriteObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs._1059_1088_1086_1074_1077_1085_1100_322Code.GDNewSpriteObjects1 */
{for(var i = 0, len = gdjs._1059_1088_1086_1074_1077_1085_1100_322Code.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs._1059_1088_1086_1074_1077_1085_1100_322Code.GDNewSpriteObjects1[i].getBehavior("Animation").setAnimationIndex(2);
}
}
}

}


};gdjs._1059_1088_1086_1074_1077_1085_1100_322Code.mapOfGDgdjs_9546_95951059_95951088_95951086_95951074_95951077_95951085_95951100_9595322Code_9546GDNewSpriteObjects1Objects = Hashtable.newFrom({"NewSprite": gdjs._1059_1088_1086_1074_1077_1085_1100_322Code.GDNewSpriteObjects1});
gdjs._1059_1088_1086_1074_1077_1085_1100_322Code.mapOfGDgdjs_9546_95951059_95951088_95951086_95951074_95951077_95951085_95951100_9595322Code_9546GDNewSprite2Objects1Objects = Hashtable.newFrom({"NewSprite2": gdjs._1059_1088_1086_1074_1077_1085_1100_322Code.GDNewSprite2Objects1});
gdjs._1059_1088_1086_1074_1077_1085_1100_322Code.mapOfGDgdjs_9546_95951059_95951088_95951086_95951074_95951077_95951085_95951100_9595322Code_9546GDNewSpriteObjects1Objects = Hashtable.newFrom({"NewSprite": gdjs._1059_1088_1086_1074_1077_1085_1100_322Code.GDNewSpriteObjects1});
gdjs._1059_1088_1086_1074_1077_1085_1100_322Code.mapOfGDgdjs_9546_95951059_95951088_95951086_95951074_95951077_95951085_95951100_9595322Code_9546GDNewSprite4Objects1Objects = Hashtable.newFrom({"NewSprite4": gdjs._1059_1088_1086_1074_1077_1085_1100_322Code.GDNewSprite4Objects1});
gdjs._1059_1088_1086_1074_1077_1085_1100_322Code.mapOfGDgdjs_9546_95951059_95951088_95951086_95951074_95951077_95951085_95951100_9595322Code_9546GDBotObjects1Objects = Hashtable.newFrom({"Bot": gdjs._1059_1088_1086_1074_1077_1085_1100_322Code.GDBotObjects1});
gdjs._1059_1088_1086_1074_1077_1085_1100_322Code.mapOfGDgdjs_9546_95951059_95951088_95951086_95951074_95951077_95951085_95951100_9595322Code_9546GDNewSpriteObjects1Objects = Hashtable.newFrom({"NewSprite": gdjs._1059_1088_1086_1074_1077_1085_1100_322Code.GDNewSpriteObjects1});
gdjs._1059_1088_1086_1074_1077_1085_1100_322Code.asyncCallback11354356 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs._1059_1088_1086_1074_1077_1085_1100_322Code.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("NewSprite"), gdjs._1059_1088_1086_1074_1077_1085_1100_322Code.GDNewSpriteObjects2);

{for(var i = 0, len = gdjs._1059_1088_1086_1074_1077_1085_1100_322Code.GDNewSpriteObjects2.length ;i < len;++i) {
    gdjs._1059_1088_1086_1074_1077_1085_1100_322Code.GDNewSpriteObjects2[i].setPosition(16,431);
}
}
gdjs._1059_1088_1086_1074_1077_1085_1100_322Code.localVariables.length = 0;
}
gdjs._1059_1088_1086_1074_1077_1085_1100_322Code.idToCallbackMap.set(11354356, gdjs._1059_1088_1086_1074_1077_1085_1100_322Code.asyncCallback11354356);
gdjs._1059_1088_1086_1074_1077_1085_1100_322Code.eventsList2 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs._1059_1088_1086_1074_1077_1085_1100_322Code.localVariables);
for (const obj of gdjs._1059_1088_1086_1074_1077_1085_1100_322Code.GDNewSpriteObjects1) asyncObjectsList.addObject("NewSprite", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs._1059_1088_1086_1074_1077_1085_1100_322Code.asyncCallback11354356(runtimeScene, asyncObjectsList)), 11354356, asyncObjectsList);
}
}

}


};gdjs._1059_1088_1086_1074_1077_1085_1100_322Code.mapOfGDgdjs_9546_95951059_95951088_95951086_95951074_95951077_95951085_95951100_9595322Code_9546GDBotObjects1Objects = Hashtable.newFrom({"Bot": gdjs._1059_1088_1086_1074_1077_1085_1100_322Code.GDBotObjects1});
gdjs._1059_1088_1086_1074_1077_1085_1100_322Code.mapOfGDgdjs_9546_95951059_95951088_95951086_95951074_95951077_95951085_95951100_9595322Code_9546GDNewSpriteObjects1Objects = Hashtable.newFrom({"NewSprite": gdjs._1059_1088_1086_1074_1077_1085_1100_322Code.GDNewSpriteObjects1});
gdjs._1059_1088_1086_1074_1077_1085_1100_322Code.mapOfGDgdjs_9546_95951059_95951088_95951086_95951074_95951077_95951085_95951100_9595322Code_9546GDNewSprite4Objects1Objects = Hashtable.newFrom({"NewSprite4": gdjs._1059_1088_1086_1074_1077_1085_1100_322Code.GDNewSprite4Objects1});
gdjs._1059_1088_1086_1074_1077_1085_1100_322Code.mapOfGDgdjs_9546_95951059_95951088_95951086_95951074_95951077_95951085_95951100_9595322Code_9546GDNewSpriteObjects1Objects = Hashtable.newFrom({"NewSprite": gdjs._1059_1088_1086_1074_1077_1085_1100_322Code.GDNewSpriteObjects1});
gdjs._1059_1088_1086_1074_1077_1085_1100_322Code.mapOfGDgdjs_9546_95951059_95951088_95951086_95951074_95951077_95951085_95951100_9595322Code_9546GDNewSprite7Objects1Objects = Hashtable.newFrom({"NewSprite7": gdjs._1059_1088_1086_1074_1077_1085_1100_322Code.GDNewSprite7Objects1});
gdjs._1059_1088_1086_1074_1077_1085_1100_322Code.eventsList3 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs._1059_1088_1086_1074_1077_1085_1100_322Code.GDNewSpriteObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite5"), gdjs._1059_1088_1086_1074_1077_1085_1100_322Code.GDNewSprite5Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs._1059_1088_1086_1074_1077_1085_1100_322Code.mapOfGDgdjs_9546_95951059_95951088_95951086_95951074_95951077_95951085_95951100_9595322Code_9546GDNewSpriteObjects1Objects, gdjs._1059_1088_1086_1074_1077_1085_1100_322Code.mapOfGDgdjs_9546_95951059_95951088_95951086_95951074_95951077_95951085_95951100_9595322Code_9546GDNewSprite5Objects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs._1059_1088_1086_1074_1077_1085_1100_322Code.GDNewSpriteObjects1 */
{for(var i = 0, len = gdjs._1059_1088_1086_1074_1077_1085_1100_322Code.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs._1059_1088_1086_1074_1077_1085_1100_322Code.GDNewSpriteObjects1[i].getBehavior("Flippable").flipY(true);
}
}
{for(var i = 0, len = gdjs._1059_1088_1086_1074_1077_1085_1100_322Code.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs._1059_1088_1086_1074_1077_1085_1100_322Code.GDNewSpriteObjects1[i].setPosition(16,431);
}
}

{ //Subevents
gdjs._1059_1088_1086_1074_1077_1085_1100_322Code.eventsList0(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs._1059_1088_1086_1074_1077_1085_1100_322Code.GDNewSpriteObjects1);
{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs._1059_1088_1086_1074_1077_1085_1100_322Code.GDNewSpriteObjects1.length !== 0 ? gdjs._1059_1088_1086_1074_1077_1085_1100_322Code.GDNewSpriteObjects1[0] : null), true, "", 0);
}
{gdjs.evtTools.camera.clampCamera(runtimeScene, 0, 0, 1000000, 700, "", 0);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs._1059_1088_1086_1074_1077_1085_1100_322Code.GDNewSpriteObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._1059_1088_1086_1074_1077_1085_1100_322Code.GDNewSpriteObjects1.length;i<l;++i) {
    if ( gdjs._1059_1088_1086_1074_1077_1085_1100_322Code.GDNewSpriteObjects1[i].getBehavior("PlatformerObject").isMovingEvenALittle() ) {
        isConditionTrue_0 = true;
        gdjs._1059_1088_1086_1074_1077_1085_1100_322Code.GDNewSpriteObjects1[k] = gdjs._1059_1088_1086_1074_1077_1085_1100_322Code.GDNewSpriteObjects1[i];
        ++k;
    }
}
gdjs._1059_1088_1086_1074_1077_1085_1100_322Code.GDNewSpriteObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs._1059_1088_1086_1074_1077_1085_1100_322Code.GDNewSpriteObjects1 */
{for(var i = 0, len = gdjs._1059_1088_1086_1074_1077_1085_1100_322Code.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs._1059_1088_1086_1074_1077_1085_1100_322Code.GDNewSpriteObjects1[i].getBehavior("Animation").setAnimationIndex(1);
}
}

{ //Subevents
gdjs._1059_1088_1086_1074_1077_1085_1100_322Code.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs._1059_1088_1086_1074_1077_1085_1100_322Code.GDNewSpriteObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._1059_1088_1086_1074_1077_1085_1100_322Code.GDNewSpriteObjects1.length;i<l;++i) {
    if ( !(gdjs._1059_1088_1086_1074_1077_1085_1100_322Code.GDNewSpriteObjects1[i].getBehavior("PlatformerObject").isMovingEvenALittle()) ) {
        isConditionTrue_0 = true;
        gdjs._1059_1088_1086_1074_1077_1085_1100_322Code.GDNewSpriteObjects1[k] = gdjs._1059_1088_1086_1074_1077_1085_1100_322Code.GDNewSpriteObjects1[i];
        ++k;
    }
}
gdjs._1059_1088_1086_1074_1077_1085_1100_322Code.GDNewSpriteObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs._1059_1088_1086_1074_1077_1085_1100_322Code.GDNewSpriteObjects1 */
{for(var i = 0, len = gdjs._1059_1088_1086_1074_1077_1085_1100_322Code.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs._1059_1088_1086_1074_1077_1085_1100_322Code.GDNewSpriteObjects1[i].getBehavior("Animation").setAnimationIndex(0);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyJustPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs._1059_1088_1086_1074_1077_1085_1100_322Code.GDNewSpriteObjects1);
{for(var i = 0, len = gdjs._1059_1088_1086_1074_1077_1085_1100_322Code.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs._1059_1088_1086_1074_1077_1085_1100_322Code.GDNewSpriteObjects1[i].getBehavior("Flippable").flipX(false);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyJustPressed(runtimeScene, "Right");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs._1059_1088_1086_1074_1077_1085_1100_322Code.GDNewSpriteObjects1);
{for(var i = 0, len = gdjs._1059_1088_1086_1074_1077_1085_1100_322Code.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs._1059_1088_1086_1074_1077_1085_1100_322Code.GDNewSpriteObjects1[i].getBehavior("Flippable").flipX(true);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs._1059_1088_1086_1074_1077_1085_1100_322Code.GDNewSpriteObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs._1059_1088_1086_1074_1077_1085_1100_322Code.GDNewSprite2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs._1059_1088_1086_1074_1077_1085_1100_322Code.mapOfGDgdjs_9546_95951059_95951088_95951086_95951074_95951077_95951085_95951100_9595322Code_9546GDNewSpriteObjects1Objects, gdjs._1059_1088_1086_1074_1077_1085_1100_322Code.mapOfGDgdjs_9546_95951059_95951088_95951086_95951074_95951077_95951085_95951100_9595322Code_9546GDNewSprite2Objects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs._1059_1088_1086_1074_1077_1085_1100_322Code.GDNewSpriteObjects1 */
{for(var i = 0, len = gdjs._1059_1088_1086_1074_1077_1085_1100_322Code.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs._1059_1088_1086_1074_1077_1085_1100_322Code.GDNewSpriteObjects1[i].getBehavior("Flippable").flipY(false);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs._1059_1088_1086_1074_1077_1085_1100_322Code.GDNewSpriteObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite4"), gdjs._1059_1088_1086_1074_1077_1085_1100_322Code.GDNewSprite4Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs._1059_1088_1086_1074_1077_1085_1100_322Code.mapOfGDgdjs_9546_95951059_95951088_95951086_95951074_95951077_95951085_95951100_9595322Code_9546GDNewSpriteObjects1Objects, gdjs._1059_1088_1086_1074_1077_1085_1100_322Code.mapOfGDgdjs_9546_95951059_95951088_95951086_95951074_95951077_95951085_95951100_9595322Code_9546GDNewSprite4Objects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("CoinText2"), gdjs._1059_1088_1086_1074_1077_1085_1100_322Code.GDCoinText2Objects1);
/* Reuse gdjs._1059_1088_1086_1074_1077_1085_1100_322Code.GDNewSprite4Objects1 */
{for(var i = 0, len = gdjs._1059_1088_1086_1074_1077_1085_1100_322Code.GDNewSprite4Objects1.length ;i < len;++i) {
    gdjs._1059_1088_1086_1074_1077_1085_1100_322Code.GDNewSprite4Objects1[i].deleteFromScene(runtimeScene);
}
}
{runtimeScene.getGame().getVariables().getFromIndex(0).add(1);
}
{for(var i = 0, len = gdjs._1059_1088_1086_1074_1077_1085_1100_322Code.GDCoinText2Objects1.length ;i < len;++i) {
    gdjs._1059_1088_1086_1074_1077_1085_1100_322Code.GDCoinText2Objects1[i].getBehavior("Text").setText(gdjs.evtTools.common.toString(runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber()));
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs._1059_1088_1086_1074_1077_1085_1100_322Code.GDNewSpriteObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._1059_1088_1086_1074_1077_1085_1100_322Code.GDNewSpriteObjects1.length;i<l;++i) {
    if ( gdjs._1059_1088_1086_1074_1077_1085_1100_322Code.GDNewSpriteObjects1[i].getY() > 700 ) {
        isConditionTrue_0 = true;
        gdjs._1059_1088_1086_1074_1077_1085_1100_322Code.GDNewSpriteObjects1[k] = gdjs._1059_1088_1086_1074_1077_1085_1100_322Code.GDNewSpriteObjects1[i];
        ++k;
    }
}
gdjs._1059_1088_1086_1074_1077_1085_1100_322Code.GDNewSpriteObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs._1059_1088_1086_1074_1077_1085_1100_322Code.GDNewSpriteObjects1 */
{for(var i = 0, len = gdjs._1059_1088_1086_1074_1077_1085_1100_322Code.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs._1059_1088_1086_1074_1077_1085_1100_322Code.GDNewSpriteObjects1[i].setPosition(16,431);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Bot"), gdjs._1059_1088_1086_1074_1077_1085_1100_322Code.GDBotObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs._1059_1088_1086_1074_1077_1085_1100_322Code.GDNewSpriteObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs._1059_1088_1086_1074_1077_1085_1100_322Code.mapOfGDgdjs_9546_95951059_95951088_95951086_95951074_95951077_95951085_95951100_9595322Code_9546GDBotObjects1Objects, gdjs._1059_1088_1086_1074_1077_1085_1100_322Code.mapOfGDgdjs_9546_95951059_95951088_95951086_95951074_95951077_95951085_95951100_9595322Code_9546GDNewSpriteObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._1059_1088_1086_1074_1077_1085_1100_322Code.GDNewSpriteObjects1.length;i<l;++i) {
    if ( gdjs._1059_1088_1086_1074_1077_1085_1100_322Code.GDNewSpriteObjects1[i].getBehavior("PlatformerObject").isOnFloor() ) {
        isConditionTrue_0 = true;
        gdjs._1059_1088_1086_1074_1077_1085_1100_322Code.GDNewSpriteObjects1[k] = gdjs._1059_1088_1086_1074_1077_1085_1100_322Code.GDNewSpriteObjects1[i];
        ++k;
    }
}
gdjs._1059_1088_1086_1074_1077_1085_1100_322Code.GDNewSpriteObjects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs._1059_1088_1086_1074_1077_1085_1100_322Code.GDNewSpriteObjects1 */
{for(var i = 0, len = gdjs._1059_1088_1086_1074_1077_1085_1100_322Code.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs._1059_1088_1086_1074_1077_1085_1100_322Code.GDNewSpriteObjects1[i].getBehavior("Health").Hit(100, false, false, null);
}
}

{ //Subevents
gdjs._1059_1088_1086_1074_1077_1085_1100_322Code.eventsList2(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Bot"), gdjs._1059_1088_1086_1074_1077_1085_1100_322Code.GDBotObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs._1059_1088_1086_1074_1077_1085_1100_322Code.GDNewSpriteObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs._1059_1088_1086_1074_1077_1085_1100_322Code.mapOfGDgdjs_9546_95951059_95951088_95951086_95951074_95951077_95951085_95951100_9595322Code_9546GDBotObjects1Objects, gdjs._1059_1088_1086_1074_1077_1085_1100_322Code.mapOfGDgdjs_9546_95951059_95951088_95951086_95951074_95951077_95951085_95951100_9595322Code_9546GDNewSpriteObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._1059_1088_1086_1074_1077_1085_1100_322Code.GDNewSpriteObjects1.length;i<l;++i) {
    if ( gdjs._1059_1088_1086_1074_1077_1085_1100_322Code.GDNewSpriteObjects1[i].getBehavior("PlatformerObject").isFalling() ) {
        isConditionTrue_0 = true;
        gdjs._1059_1088_1086_1074_1077_1085_1100_322Code.GDNewSpriteObjects1[k] = gdjs._1059_1088_1086_1074_1077_1085_1100_322Code.GDNewSpriteObjects1[i];
        ++k;
    }
}
gdjs._1059_1088_1086_1074_1077_1085_1100_322Code.GDNewSpriteObjects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs._1059_1088_1086_1074_1077_1085_1100_322Code.GDBotObjects1 */
/* Reuse gdjs._1059_1088_1086_1074_1077_1085_1100_322Code.GDNewSpriteObjects1 */
gdjs._1059_1088_1086_1074_1077_1085_1100_322Code.GDNewSprite4Objects1.length = 0;

{for(var i = 0, len = gdjs._1059_1088_1086_1074_1077_1085_1100_322Code.GDBotObjects1.length ;i < len;++i) {
    gdjs._1059_1088_1086_1074_1077_1085_1100_322Code.GDBotObjects1[i].deleteFromScene(runtimeScene);
}
}
{for(var i = 0, len = gdjs._1059_1088_1086_1074_1077_1085_1100_322Code.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs._1059_1088_1086_1074_1077_1085_1100_322Code.GDNewSpriteObjects1[i].getBehavior("PlatformerObject").setCanJump();
}
}
{for(var i = 0, len = gdjs._1059_1088_1086_1074_1077_1085_1100_322Code.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs._1059_1088_1086_1074_1077_1085_1100_322Code.GDNewSpriteObjects1[i].getBehavior("PlatformerObject").simulateJumpKey();
}
}
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs._1059_1088_1086_1074_1077_1085_1100_322Code.mapOfGDgdjs_9546_95951059_95951088_95951086_95951074_95951077_95951085_95951100_9595322Code_9546GDNewSprite4Objects1Objects, (( gdjs._1059_1088_1086_1074_1077_1085_1100_322Code.GDBotObjects1.length === 0 ) ? 0 :gdjs._1059_1088_1086_1074_1077_1085_1100_322Code.GDBotObjects1[0].getPointX("948")), (( gdjs._1059_1088_1086_1074_1077_1085_1100_322Code.GDBotObjects1.length === 0 ) ? 0 :gdjs._1059_1088_1086_1074_1077_1085_1100_322Code.GDBotObjects1[0].getPointY("450")), "");
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs._1059_1088_1086_1074_1077_1085_1100_322Code.GDNewSpriteObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite7"), gdjs._1059_1088_1086_1074_1077_1085_1100_322Code.GDNewSprite7Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs._1059_1088_1086_1074_1077_1085_1100_322Code.mapOfGDgdjs_9546_95951059_95951088_95951086_95951074_95951077_95951085_95951100_9595322Code_9546GDNewSpriteObjects1Objects, gdjs._1059_1088_1086_1074_1077_1085_1100_322Code.mapOfGDgdjs_9546_95951059_95951088_95951086_95951074_95951077_95951085_95951100_9595322Code_9546GDNewSprite7Objects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber() == 2);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs._1059_1088_1086_1074_1077_1085_1100_322Code.GDNewSpriteObjects1 */
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "Выйгрыш");
}
{for(var i = 0, len = gdjs._1059_1088_1086_1074_1077_1085_1100_322Code.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs._1059_1088_1086_1074_1077_1085_1100_322Code.GDNewSpriteObjects1[i].getBehavior("PlatformerObject").ignoreDefaultControls(true);
}
}
}

}


};

gdjs._1059_1088_1086_1074_1077_1085_1100_322Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs._1059_1088_1086_1074_1077_1085_1100_322Code.GDNewSprite2Objects1.length = 0;
gdjs._1059_1088_1086_1074_1077_1085_1100_322Code.GDNewSprite2Objects2.length = 0;
gdjs._1059_1088_1086_1074_1077_1085_1100_322Code.GDNewSprite7Objects1.length = 0;
gdjs._1059_1088_1086_1074_1077_1085_1100_322Code.GDNewSprite7Objects2.length = 0;
gdjs._1059_1088_1086_1074_1077_1085_1100_322Code.GDBotObjects1.length = 0;
gdjs._1059_1088_1086_1074_1077_1085_1100_322Code.GDBotObjects2.length = 0;
gdjs._1059_1088_1086_1074_1077_1085_1100_322Code.GDNewSpriteObjects1.length = 0;
gdjs._1059_1088_1086_1074_1077_1085_1100_322Code.GDNewSpriteObjects2.length = 0;
gdjs._1059_1088_1086_1074_1077_1085_1100_322Code.GDNewSprite3Objects1.length = 0;
gdjs._1059_1088_1086_1074_1077_1085_1100_322Code.GDNewSprite3Objects2.length = 0;
gdjs._1059_1088_1086_1074_1077_1085_1100_322Code.GDNewSprite4Objects1.length = 0;
gdjs._1059_1088_1086_1074_1077_1085_1100_322Code.GDNewSprite4Objects2.length = 0;
gdjs._1059_1088_1086_1074_1077_1085_1100_322Code.GDNewSprite5Objects1.length = 0;
gdjs._1059_1088_1086_1074_1077_1085_1100_322Code.GDNewSprite5Objects2.length = 0;
gdjs._1059_1088_1086_1074_1077_1085_1100_322Code.GDCoinTextObjects1.length = 0;
gdjs._1059_1088_1086_1074_1077_1085_1100_322Code.GDCoinTextObjects2.length = 0;
gdjs._1059_1088_1086_1074_1077_1085_1100_322Code.GDNewSprite6Objects1.length = 0;
gdjs._1059_1088_1086_1074_1077_1085_1100_322Code.GDNewSprite6Objects2.length = 0;
gdjs._1059_1088_1086_1074_1077_1085_1100_322Code.GDCoinText2Objects1.length = 0;
gdjs._1059_1088_1086_1074_1077_1085_1100_322Code.GDCoinText2Objects2.length = 0;
gdjs._1059_1088_1086_1074_1077_1085_1100_322Code.GDCoinText3Objects1.length = 0;
gdjs._1059_1088_1086_1074_1077_1085_1100_322Code.GDCoinText3Objects2.length = 0;

gdjs._1059_1088_1086_1074_1077_1085_1100_322Code.eventsList3(runtimeScene);
gdjs._1059_1088_1086_1074_1077_1085_1100_322Code.GDNewSprite2Objects1.length = 0;
gdjs._1059_1088_1086_1074_1077_1085_1100_322Code.GDNewSprite2Objects2.length = 0;
gdjs._1059_1088_1086_1074_1077_1085_1100_322Code.GDNewSprite7Objects1.length = 0;
gdjs._1059_1088_1086_1074_1077_1085_1100_322Code.GDNewSprite7Objects2.length = 0;
gdjs._1059_1088_1086_1074_1077_1085_1100_322Code.GDBotObjects1.length = 0;
gdjs._1059_1088_1086_1074_1077_1085_1100_322Code.GDBotObjects2.length = 0;
gdjs._1059_1088_1086_1074_1077_1085_1100_322Code.GDNewSpriteObjects1.length = 0;
gdjs._1059_1088_1086_1074_1077_1085_1100_322Code.GDNewSpriteObjects2.length = 0;
gdjs._1059_1088_1086_1074_1077_1085_1100_322Code.GDNewSprite3Objects1.length = 0;
gdjs._1059_1088_1086_1074_1077_1085_1100_322Code.GDNewSprite3Objects2.length = 0;
gdjs._1059_1088_1086_1074_1077_1085_1100_322Code.GDNewSprite4Objects1.length = 0;
gdjs._1059_1088_1086_1074_1077_1085_1100_322Code.GDNewSprite4Objects2.length = 0;
gdjs._1059_1088_1086_1074_1077_1085_1100_322Code.GDNewSprite5Objects1.length = 0;
gdjs._1059_1088_1086_1074_1077_1085_1100_322Code.GDNewSprite5Objects2.length = 0;
gdjs._1059_1088_1086_1074_1077_1085_1100_322Code.GDCoinTextObjects1.length = 0;
gdjs._1059_1088_1086_1074_1077_1085_1100_322Code.GDCoinTextObjects2.length = 0;
gdjs._1059_1088_1086_1074_1077_1085_1100_322Code.GDNewSprite6Objects1.length = 0;
gdjs._1059_1088_1086_1074_1077_1085_1100_322Code.GDNewSprite6Objects2.length = 0;
gdjs._1059_1088_1086_1074_1077_1085_1100_322Code.GDCoinText2Objects1.length = 0;
gdjs._1059_1088_1086_1074_1077_1085_1100_322Code.GDCoinText2Objects2.length = 0;
gdjs._1059_1088_1086_1074_1077_1085_1100_322Code.GDCoinText3Objects1.length = 0;
gdjs._1059_1088_1086_1074_1077_1085_1100_322Code.GDCoinText3Objects2.length = 0;


return;

}

gdjs['_1059_1088_1086_1074_1077_1085_1100_322Code'] = gdjs._1059_1088_1086_1074_1077_1085_1100_322Code;

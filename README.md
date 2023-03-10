# HausCraft

To-do List
2023.02.05
[x] change imports into one mesh and one texture material and replace current animated mesh
[x] fixed, objects of any height are able to snap to floor now

2023.02.06
[x] add in alt+LMC for deleting
[x] find a better way to interact with use store to update and delete
[x] fix rotation when first positioned
[x] can drag multiple meshes together in the same group
[x] CRUD functions for all meshes inside the group
[x] model one level, export one mesh (keep the original file with separated objects first!) --- color each part
[x] user decide how many levels to have
[x] fix shadow display
[x] deploy

---

2023.02.08 - 2023.02.13
------code restructure
[x] organise files, and modularize function to add in new neighborhood components into the scene:
allAnimatedObjects(Buildings) -> animatedObjects(Building) -> importedObjects(all imports)
resturecture useStore to include more information: type, number of floors, rotation, color --> later can save the information and retrieve and recreate the saved scene

-------functions / fix
[x] rotating function (refer to code sandbox example)
[x] prevent buildings from being added to same position

-- consult feedback
[x] total no of units

-----model making
[x] base map / site model
[x] more pre made clusters with different color typologies, no need to be able to change no of floors yet
[x] have image of end design that resembles a realistic HDB design

--------- interim presentation
[x] 10 min presentation (20min inclusivw of Q&A)
process workflow diagram
outcomes
demo
-->remember to test responsiveness!!!!!!

---

2022.02.08 - 09 work on restructure
[x] restructure
[x] model need to scale X10 in blender
[x] rotation
[x] fix display of total buildings to exclude trees
[x] fix slide move and orbit conrol conflict
[x] update rotation and noOfFloors to store
[x] total units count
[x] modeling, roof and void deck for indiv buildings
[] objects to float when first added

---

**after interim**

**2023.02.25 - 2023.03.07 (1.5 weeks)**

**database**
[] update rotation and noOfFloors to store
[] \*\* connect to a database, can retrieve template / saved designs

**main features**
[] first person view control (refer to minecraft tutorial) --- FPV, Player, Ground, useKeyboard, install cannon
[] \*\* how to let user design diff level plans
[] more neighborhood components to add in
[] \*\* develop more feedback / contraints / typologies e.g.spacing for pivacy

**fixes**
[] fix geometry display issue -- maybe leave small gap beteen geometries

**optional features**
[] customise color of building parts / based on building type (refer to code sandbox example)
[] multi users design together in real time with web socket
[] object to be added at mouse position and move together with mouse before positioned
[] export model with texture map

**2023.03.10 - 03.13**
main:
[x] FPV
[x] update rotation to store
[x] _database functions for neighbourhood_
[] deploy client & server

feedback panel:
[] setback display
[] separate feedback for diff room types
[] spacing and parking lot requirement

smaller issues:
[] screenshot function (tgt with DB functions)
[x] cut off edge display issue
[x] loading page
[x] ask about display issue

**next 2 weeks**
[] add 'enabled' param to inspector, disable when in view mode, and when is adjusting one building no of floors
[] new components modelling
[] _customise and save components_: --refer to track game for batch import models
-carpark: rooftop garden /urban farming / PV panels options
-trees: density
[] roads: connect to carpark and main road

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
[] customise color of building parts / based on building type (refer to code sandbox example)

-- consult feedback
[] total no of units

-----model making
[] more neighborhood components to add in
[] base map / site model
[] more pre made clusters with different color typologies, no need to be able to change no of floors yet
[] have image of end design that resembles a realistic HDB design
[] fix geometry display issue -- maybe leave small gap beteen geometries

-------save to database
[] later: able to save design / templates for users to start with (refer to minecraft tutorial)

--------- interim presentation
[] 10 min presentation (20min inclusivw of Q&A)
process workflow diagram
outcomes
demo

---

2022.02.08 - 09 work on restructure
[x] restructure
[x] model need to scale X10 in blender
[x] rotation
[x] fix display of total buildings to exclude trees
[x] fix slide move and orbit conrol conflict
[] update rotation and noOfFloors to store
[] total units count
[] modeling, roof and void deck for indiv buildings
[] objects to float when first added

---

------ after interim
[KIV] add parameters of total GFA and spacing into UI
[] how to let user design diff level plans
[] develop more feedback / contraints / typologies e.g.spacing for pivacy
[] object to be added at mouse position and move together with mouse before positioned
[] first person view control (refer to minecraft tutorial)
[] export model with texture map

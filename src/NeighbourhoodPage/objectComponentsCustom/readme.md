# Steps to add new custom components

1. import each module model and material mapping into a jsx
2. plan out the geometry strategy and what inputs are needed
3. create a overall jsx for this custom components, where logics of geometry operations will be written, takes in modules from step 1 and export the custom component
4. create suitable UI based on what input are required _the return ... part_
5. create form data and test if changing the panel correctly update the formdata _formData_ _handlechange function_
6. Add button, _recieve addCustom prop_, check if at appneighbourhood objects are succesfully updated
7. animatedObjects, add this component, check if after add will display in canvas
8. link props to diff display of test model
9. Select and edit selected, _create a get selected index for this component_-> _pass to custom UI component in App_ -> _add the two useEffects_
10. add module at DB
11. test again if works with other settings
12. add logics

next steps:

1. model each part
2. add logics
3. update feedback panel
4. add surrouding buildings to site, make site larger
5. small fixes: buttons position, sun function (wont affect if take video on local host, can take down in deplyed version), display info on all designs management panel, update screen shot

# Steps to add new custom components

1. import each module model and material mapping into a jsx
2. create a overall jsx for this custom components, where logics of geometry operations will be written, takes in modules from step 1 and export the custom component
3. create suitable UI based on what input are required _the return ... part_
4. create form data and test if changing the panel correctly update the formdata _formData_ _handlechange function_
5. Add button, add addCustom and updateCustom to store _recieve addCustom prop_
6. Select and edit selected, create a get selected index for this component _the two useEffects_
7. add to database, add module at DB
8. test again if works with other settings, add logics

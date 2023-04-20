# export models from blender

- side view: move cursor to bottom of model->must be accurate
- top view: move cursor to center of inward doors -> can estimate center, but must align accurately
- make sure roof, level and voiddeck's center align in top view, so they can stack up
- bake all housing units
- no need to bake corridor as it only has one white meshstandardmaterial
- export housing units in pairs for simplicity

## Tips

1. **to bake only color without light information in Blender**
   Render Properties -> Bake -> Bake Type: Diffuse + deselect Direct and Indirect contributions, leaving only Color on -> Bake

2. **position the object in blender before baking and exporting**

- in top view, center manually, then move to side view
- move 3D cursor to world center
- move object to 3D cursor
- in edit mode, move object vertically so that bottom is at world center, by snapping to a cube.

1. **some shortcuts**:
   alt + G -> move object to world origin
   shit + C -> move 3D cursor back to world origin
   ctrl + M + x/y/z -> mirror geometry along axis

2. **select same material**
   Object mode: Select > Select linked > Material or ShiftL > Material.

   Edit mode: Select face that has the material applied to: Select > Select Similar > Material or ShiftG > Material

## Baking process in Blender

1. **model prep**

   - remove hidden faces
   - unlink duplicates (A to select all -> F3 -> makesingle - object&data)
   - fix faces orientation: edit mode -> select all -> F3 -> recalculate outside
   - normalize scales (ctrl A -> apply all transformation)
   - add appropriate lighting if need this info in texture
****
2. **UV unwrapping**

- open a uv editor panel
- edit mode -> press u -> smart uv
- increase island margin to ~0.025
- turn on "uv sync selection" in side the panel
- rearrange all to within the square limit (if there is not already done)

3. **Create texture**

- inside uv editor, +New to create new image
- parameters setting: width&height - 4096, color - white, alpha - unchecked (if no transparent), generated type - blank, 32-bit float - checked, tiled - unchecked
- inside uv editor, Image -> save as to save the texture. file format -> Radiance HDR, save in the save folder as the .blend file

4. **Preparing material**
   
- open a shader editor panel
- shift A -> texture -> image texture
- choose baked texture from drop down, and keep this node selected / active

5. **Bake**

- select the object to bake
- Render properties -> select Cycles -> Bake section
- Bake Type: combined (have lighting info) / diffuse (wo lighting info, need to deselect direct and indirect light)
- sampling: 256 / 128 if very big
- uncheck clear image
- alt s inside uv editor to save

6. **postproduction**

- open a compositor panel
- check "use nodes"
- shift a -> input -> image -> select dropdown to baked texture
- shift a to add denoise
- link image to demoise to composite via "image" node
- m to mute / disable "render layers"
- output properties, change resolution to 4096 x4096
- render with F12 and save as jpeg (can lower the quality to 75%)

7. **export model**

- rename geometry in blender
- Geometry -> turn on UV & normal, materials->no export

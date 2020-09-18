import { createChannel } from '../node_modules/decentraland-builder-scripts/channel'
import { createInventory } from '../node_modules/decentraland-builder-scripts/inventory'
import Script1 from "../c1da72b5-fbda-4ba5-ad96-a921a3ef0d3b/src/item"
import Script2 from "../b88efbbf-2a9a-47b4-86e1-e38ecc2b433b/src/item"

const _scene = new Entity('_scene')
engine.addEntity(_scene)
const transform = new Transform({
  position: new Vector3(0, 0, 0),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
_scene.addComponentOrReplace(transform)

const entity = new Entity('entity')
engine.addEntity(entity)
entity.setParent(_scene)
const gltfShape = new GLTFShape("models/FloorBaseWood_01/FloorBaseWood_01.glb")
gltfShape.withCollisions = true
gltfShape.isPointerBlocker = true
gltfShape.visible = true
entity.addComponentOrReplace(gltfShape)
const transform2 = new Transform({
  position: new Vector3(8, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity.addComponentOrReplace(transform2)

const archwayOfKindness = new Entity('archwayOfKindness')
engine.addEntity(archwayOfKindness)
archwayOfKindness.setParent(_scene)
const transform3 = new Transform({
  position: new Vector3(14.5, 0, 9),
  rotation: new Quaternion(-2.4085271740892887e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000007152557373, 1, 1.0000007152557373)
})
archwayOfKindness.addComponentOrReplace(transform3)
const gltfShape2 = new GLTFShape("models/ChineseGate_03/ChineseGate_03.glb")
gltfShape2.withCollisions = true
gltfShape2.isPointerBlocker = true
gltfShape2.visible = true
archwayOfKindness.addComponentOrReplace(gltfShape2)

const archwayOfLoyalty = new Entity('archwayOfLoyalty')
engine.addEntity(archwayOfLoyalty)
archwayOfLoyalty.setParent(_scene)
const transform4 = new Transform({
  position: new Vector3(8.5, 0, 14),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1.5, 1, 1)
})
archwayOfLoyalty.addComponentOrReplace(transform4)
const gltfShape3 = new GLTFShape("models/ChineseGate_01/ChineseGate_01.glb")
gltfShape3.withCollisions = true
gltfShape3.isPointerBlocker = true
gltfShape3.visible = true
archwayOfLoyalty.addComponentOrReplace(gltfShape3)

const largeStoneWall = new Entity('largeStoneWall')
engine.addEntity(largeStoneWall)
largeStoneWall.setParent(_scene)
const transform5 = new Transform({
  position: new Vector3(0.5, 0, 16),
  rotation: new Quaternion(4.3553687700031356e-16, -0.70710688829422, 8.429368847373553e-8, 0.7071067690849304),
  scale: new Vector3(1.0000009536743164, 1, 1.0000009536743164)
})
largeStoneWall.addComponentOrReplace(transform5)
const gltfShape4 = new GLTFShape("models/Wall_Stone_Large/Wall_Stone_Large.glb")
gltfShape4.withCollisions = true
gltfShape4.isPointerBlocker = true
gltfShape4.visible = true
largeStoneWall.addComponentOrReplace(gltfShape4)

const largeStoneWall2 = new Entity('largeStoneWall2')
engine.addEntity(largeStoneWall2)
largeStoneWall2.setParent(_scene)
const transform6 = new Transform({
  position: new Vector3(12.5, 0, 0.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
largeStoneWall2.addComponentOrReplace(transform6)
largeStoneWall2.addComponentOrReplace(gltfShape4)

const greenAcaciaTree = new Entity('greenAcaciaTree')
engine.addEntity(greenAcaciaTree)
greenAcaciaTree.setParent(_scene)
const transform7 = new Transform({
  position: new Vector3(9, 0, 6.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1.5, 2, 1.4999998807907104)
})
greenAcaciaTree.addComponentOrReplace(transform7)
const gltfShape5 = new GLTFShape("models/Tree_Forest_Green_01/Tree_Forest_Green_01.glb")
gltfShape5.withCollisions = true
gltfShape5.isPointerBlocker = true
gltfShape5.visible = true
greenAcaciaTree.addComponentOrReplace(gltfShape5)

const lightGreenSycamoreTree = new Entity('lightGreenSycamoreTree')
engine.addEntity(lightGreenSycamoreTree)
lightGreenSycamoreTree.setParent(_scene)
const transform8 = new Transform({
  position: new Vector3(14, 0, 2.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
lightGreenSycamoreTree.addComponentOrReplace(transform8)
const gltfShape6 = new GLTFShape("models/TreeSycamore_01/TreeSycamore_01.glb")
gltfShape6.withCollisions = true
gltfShape6.isPointerBlocker = true
gltfShape6.visible = true
lightGreenSycamoreTree.addComponentOrReplace(gltfShape6)

const shrubRow = new Entity('shrubRow')
engine.addEntity(shrubRow)
shrubRow.setParent(_scene)
const transform9 = new Transform({
  position: new Vector3(15.5, 0, 4),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
shrubRow.addComponentOrReplace(transform9)
const gltfShape7 = new GLTFShape("models/BushPatch_02/BushPatch_02.glb")
gltfShape7.withCollisions = true
gltfShape7.isPointerBlocker = true
gltfShape7.visible = true
shrubRow.addComponentOrReplace(gltfShape7)

const shrub = new Entity('shrub')
engine.addEntity(shrub)
shrub.setParent(_scene)
const transform10 = new Transform({
  position: new Vector3(13.5, 0, 1),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
shrub.addComponentOrReplace(transform10)
const gltfShape8 = new GLTFShape("models/Bush_01/Bush_01.glb")
gltfShape8.withCollisions = true
gltfShape8.isPointerBlocker = true
gltfShape8.visible = true
shrub.addComponentOrReplace(gltfShape8)

const shrubRow2 = new Entity('shrubRow2')
engine.addEntity(shrubRow2)
shrubRow2.setParent(_scene)
shrubRow2.addComponentOrReplace(gltfShape7)
const transform11 = new Transform({
  position: new Vector3(15.5, 0, 13.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 0.75)
})
shrubRow2.addComponentOrReplace(transform11)

const squareSignpost = new Entity('squareSignpost')
engine.addEntity(squareSignpost)
squareSignpost.setParent(_scene)
const transform12 = new Transform({
  position: new Vector3(3, 0, 14.5),
  rotation: new Quaternion(-5.9889282423531646e-15, 1, -1.1920926823449918e-7, 0),
  scale: new Vector3(3.75, 1, 1)
})
squareSignpost.addComponentOrReplace(transform12)

const externalLink = new Entity('externalLink')
engine.addEntity(externalLink)
externalLink.setParent(_scene)
const transform13 = new Transform({
  position: new Vector3(12, 0, 14),
  rotation: new Quaternion(-0.7730104923248291, 1.7278130926001722e-8, 7.797022760769323e-8, 0.6343932151794434),
  scale: new Vector3(8.124999046325684, 9.714555740356445, 1.1141810417175293)
})
externalLink.addComponentOrReplace(transform13)

const externalLink2 = new Entity('externalLink2')
engine.addEntity(externalLink2)
externalLink2.setParent(_scene)
const transform14 = new Transform({
  position: new Vector3(8.5, 0, 2),
  rotation: new Quaternion(-0.9882268905639648, -0.0820993036031723, 0.10468514263629913, 0.07555496692657471),
  scale: new Vector3(5.63985013961792, 2.607496500015259, 1.0960808992385864)
})
externalLink2.addComponentOrReplace(transform14)

const externalLink3 = new Entity('externalLink3')
engine.addEntity(externalLink3)
externalLink3.setParent(_scene)
const transform15 = new Transform({
  position: new Vector3(3.5, 0, 3.5),
  rotation: new Quaternion(0, 0, -0.9951847791671753, -0.09801718592643738),
  scale: new Vector3(2.500002145767212, 2.500002145767212, 7)
})
externalLink3.addComponentOrReplace(transform15)

const externalLink4 = new Entity('externalLink4')
engine.addEntity(externalLink4)
externalLink4.setParent(_scene)
const transform16 = new Transform({
  position: new Vector3(3.5, 0, 11.5),
  rotation: new Quaternion(-0.9882268905639648, -0.0820993036031723, 0.10468514263629913, 0.07555496692657471),
  scale: new Vector3(3.020163059234619, 2.8812761306762695, 6.139439105987549)
})
externalLink4.addComponentOrReplace(transform16)

const externalLink5 = new Entity('externalLink5')
engine.addEntity(externalLink5)
externalLink5.setParent(_scene)
const transform17 = new Transform({
  position: new Vector3(14, 0, 4),
  rotation: new Quaternion(-0.7730104923248291, 1.7278130926001722e-8, 7.797022760769323e-8, 0.6343932151794434),
  scale: new Vector3(2.5, 6.107278823852539, 1.057090401649475)
})
externalLink5.addComponentOrReplace(transform17)

const archwayOfHonesty = new Entity('archwayOfHonesty')
engine.addEntity(archwayOfHonesty)
archwayOfHonesty.setParent(_scene)
const transform18 = new Transform({
  position: new Vector3(2, 0, 6.5),
  rotation: new Quaternion(-2.427593885731983e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(2.0000038146972656, 1, 1.0000019073486328)
})
archwayOfHonesty.addComponentOrReplace(transform18)
const gltfShape9 = new GLTFShape("models/ChineseGate_02/ChineseGate_02.glb")
gltfShape9.withCollisions = true
gltfShape9.isPointerBlocker = true
gltfShape9.visible = true
archwayOfHonesty.addComponentOrReplace(gltfShape9)

const largeStoneWall3 = new Entity('largeStoneWall3')
engine.addEntity(largeStoneWall3)
largeStoneWall3.setParent(_scene)
largeStoneWall3.addComponentOrReplace(gltfShape4)
const transform19 = new Transform({
  position: new Vector3(7.5, 0, 0.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
largeStoneWall3.addComponentOrReplace(transform19)

const channelId = Math.random().toString(16).slice(2)
const channelBus = new MessageBus()
const inventory = createInventory(UICanvas, UIContainerStack, UIImage)
const options = { inventory }

const script1 = new Script1()
const script2 = new Script2()
script1.init(options)
script2.init(options)
script1.spawn(squareSignpost, {"text":"Greenpoint \nLand \nReserves","fontSize":22.5}, createChannel(channelId, squareSignpost, channelBus))
script2.spawn(externalLink, {"url":"discord.gg/5EKcqbQ","name":"Discord"}, createChannel(channelId, externalLink, channelBus))
script2.spawn(externalLink2, {"url":"client.aragon.org/#/movementdao/","name":"DAO Site"}, createChannel(channelId, externalLink2, channelBus))
script2.spawn(externalLink3, {"url":"mvt.io/","name":"Movement DAO"}, createChannel(channelId, externalLink3, channelBus))
script2.spawn(externalLink4, {"url":"https://talk.mvt.io/","name":"Forum"}, createChannel(channelId, externalLink4, channelBus))
script2.spawn(externalLink5, {"url":"t.me/TheMovementDAO","name":"Telegram"}, createChannel(channelId, externalLink5, channelBus))
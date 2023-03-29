import { makeFragmentFromVertices } from './helper.js';
export async function testTransform({ scene, device, original, }) {
    const origPositions = original.getVerticesData(BABYLON.VertexBuffer.PositionKind);
    let idx = 0;
    const half = Math.floor(origPositions.length / 2);
    for (let start = 0; start < origPositions.length; start += half) {
        const positions = origPositions.slice(start, start + half);
        const name = `${original.name}.${idx++}`;
        const mesh = makeFragmentFromVertices(scene, name, positions);
        mesh.position.y += 3;
    }
    original.dispose();
}
//# sourceMappingURL=fracture.js.map
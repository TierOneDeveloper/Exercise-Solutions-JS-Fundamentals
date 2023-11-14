// function thePyramidOfKingDjoser(base, step) {
//     let height = 0;
//     let sumStone = 0;
//     let sumMarble = 0;
//     let sumLapis = 0;
//     let sumGold = 0;

//     if (base % 2 === 0) {
//         height = base / 2;
//     } else if (base % 2 != 0) {
//         height = (base + 1) / 2;
//     }
//     for (let i = 1; i <= height; i++) {
//         if (i % 5 === 0) {
//             sumLapis += 4 * base - 4;
//         }
//         if (i % height === 0) {
//             sumGold += base * base;
//             break;
//         }
//         sumStone += base * base - 4 * base + 4;
//         sumMarble += 4 * base - 4;
//         base -= 2;
//     }
//     console.log(`Stone required: ${Math.ceil(sumStone * step)}`);
//     console.log(`Marble required: ${Math.ceil((sumMarble - sumLapis) * step)}`);
//     console.log(`Lapis Lazuli required: ${Math.ceil(sumLapis * step)}`);
//     console.log(`Gold required: ${Math.ceil(sumGold * step)}`);
//     console.log(`Final pyramid height: ${Math.floor(height * step)}`);
// }

function thePyramidOfKingDjoser(base, step) {
    base = Number(base);
    step = Number(step);
    let floor = 0;
    let stone = 0;
    let marble = 0;
    let lapis = 0;
    let gold = 0;

    while (base > 1) {
        let totalBlocks = (base * base * step);
        let innerBlocks = ((base - 2) * (base - 2)) * step;
        let outerBlocks = totalBlocks - innerBlocks;
        if (base - 2 === 0) {
            break;
        }
        floor++;
        base -= 2;
        if (floor % 5 === 0) {
            lapis += outerBlocks;
            stone += innerBlocks;
        } else {
            marble += outerBlocks;
            stone += innerBlocks;
        }
    }
    floor++;
    height = Math.floor(floor * step);
    gold += Math.ceil(base * base * step);
    console.log(`Stone required: ${Math.ceil(stone)}`);
    console.log(`Marble required: ${Math.ceil(marble)}`);
    console.log(`Lapis Lazuli required: ${Math.ceil(lapis)}`);
    console.log(`Gold required: ${gold}`);
    console.log(`Final pyramid height: ${height}`);
}

thePyramidOfKingDjoser(11, 1)
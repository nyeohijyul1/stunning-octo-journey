export const addRow = (isPrepend = true) => {
    const newRow = document.createElement("tr");
    const tds = [];
    for (let index = 0; index < currentCol; index++) {
        const newTd = document.createElement("td");
        const newDiv = document.createElement("div");
        newDiv.className = "dragHandle";
        newTd.appendChild(newDiv);
        newRow.appendChild(newTd);
        tds.push(newTd);
    }
    if (isPrepend) {
        tbody.prepend(newRow);
        tdList.forEach(item => {
            item.row += 1
        })
    } else {
        tbody.appendChild(newRow);
    }
    tds.forEach((element, i) => processTd({
        element,
        rc: {
            row: isPrepend ? 0 : currentRow,
            rowspan: 1,
            col: i,
            colspan: 1
        },
    }))
    currentRow++;
}
export const addCol = (isPrepend = true) => {
    const trs = [...document.querySelectorAll("tr")];
    const tds = [];
    const makeNewTd = () => {
        const newTd = document.createElement("td");
        const newDiv = document.createElement("div");
        newDiv.className = "dragHandle";
        newTd.appendChild(newDiv);
        return newTd;
    }
    if (isPrepend) {
        for (let index = 0; index < currentRow; index++) {
            let newTd = makeNewTd();
            tds.push(newTd);
            trs[index].prepend(newTd);
        }
        tdList.forEach(item => {
            item.col += 1
        })
    } else {
        for (let index = 0; index < currentRow; index++) {
            let newTd = makeNewTd();
            tds.push(newTd);
            trs[index].appendChild(newTd);
        }
    }
    tds.forEach((element, i) => processTd({
        element,
        rc: {
            row: i,
            rowspan: 1,
            col: isPrepend ? 0 : currentCol,
            colspan: 1
        },
    }))
    currentCol++;
}
export const processTd = ({
    element,
    rc,
}) => {
    tdList[tdList.length] = {
        td: element,
        drag: new Draggable(element),
        color: new RandomColor(element),
        ...rc
    }
}
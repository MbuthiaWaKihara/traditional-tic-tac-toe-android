export const initializeGrid = () => {
    let grid = [];
    let gridNumber = 1;
    for(let outerGrid = 0; outerGrid < 3; outerGrid++){
        let currentGrid = [];
        
        for(let innerGrid = 0; innerGrid < 3; innerGrid++){
            currentGrid = [...currentGrid, {
                value: null,
                isInWin: false,
                gridNumber,
            }]
            gridNumber++;
        }

        grid = [...grid, currentGrid];
    }

    return grid;
}

export const handlePlayableActivity = (currentGrid, gridNumber, turn) => {
    let gridCopy = currentGrid;
    currentGrid.forEach(
        (row, rowIndex) => {
            row.forEach(
                (square, squareIndex) => {
                    if(gridNumber == square.gridNumber){
                        gridCopy[rowIndex][squareIndex].value = turn
                    }
                }
            )
        }
    );

    return gridCopy;
}


export const checkForWin = (currentGrid, updateGrid) => {
    let winStatus = {
        win: false,
        winner: null,
    }

    let grid = currentGrid;

    //the following code will check for a win in all tic tac toe win scenario possibilities
    //first row
    if(grid[0][0].value && grid[0][1].value && grid[0][2].value 
        && grid[0][0].value === grid[0][1].value
        && grid[0][1].value === grid[0][2].value){
            winStatus.win = true;
            winStatus.winner = grid[0][0].value;
            grid[0][0].isInWin = true;
            grid[0][1].isInWin = true;
            grid[0][2].isInWin = true;
            updateGrid(grid);
        }
    
    //second row
    if(grid[1][0].value && grid[1][1].value && grid[1][2].value 
        && grid[1][0].value === grid[1][1].value
        && grid[1][1].value === grid[1][2].value){
            winStatus.win = true;
            winStatus.winner = grid[1][0].value;
            grid[1][0].isInWin = true;
            grid[1][1].isInWin = true;
            grid[1][2].isInWin = true;
            updateGrid(grid);
        }

    //third row
    if(grid[2][0].value && grid[2][1].value && grid[2][2].value 
        && grid[2][0].value === grid[2][1].value
        && grid[2][1].value === grid[2][2].value){
            winStatus.win = true;
            winStatus.winner = grid[2][0].value;
            grid[2][0].isInWin = true;
            grid[2][1].isInWin = true;
            grid[2][2].isInWin = true;
            updateGrid(grid);
        }

    //first column
    if(grid[0][0].value && grid[1][0].value && grid[2][0].value 
        && grid[0][0].value === grid[1][0].value
        && grid[1][0].value === grid[2][0].value){
            winStatus.win = true;
            winStatus.winner = grid[0][0].value;
            grid[0][0].isInWin = true;
            grid[1][0].isInWin = true;
            grid[2][0].isInWin = true;
            updateGrid(grid);
        }

    //second column
    if(grid[0][1].value && grid[1][1].value && grid[2][1].value 
        && grid[0][1].value === grid[1][1].value
        && grid[1][1].value === grid[2][1].value){
            winStatus.win = true;
            winStatus.winner = grid[0][1].value;
            grid[0][1].isInWin = true;
            grid[1][1].isInWin = true;
            grid[2][1].isInWin = true;
            updateGrid(grid);
        }

    //third column
    if(grid[0][2].value && grid[1][2].value && grid[2][2].value 
        && grid[0][2].value === grid[1][2].value
        && grid[1][2].value === grid[2][2].value){
            winStatus.win = true;
            winStatus.winner = grid[0][2].value;
            grid[0][2].isInWin = true;
            grid[1][2].isInWin = true;
            grid[2][2].isInWin = true;
            updateGrid(grid);
        }

    //first diagonal
    if(grid[0][0].value && grid[1][1].value && grid[2][2].value 
        && grid[0][0].value === grid[1][1].value
        && grid[1][1].value === grid[2][2].value){
            winStatus.win = true;
            winStatus.winner = grid[2][2].value;
            grid[0][0].isInWin = true;
            grid[1][1].isInWin = true;
            grid[2][2].isInWin = true;
            updateGrid(grid);
        }

    //other diagonal
    if(grid[0][2].value && grid[1][1].value && grid[2][0].value 
        && grid[0][2].value === grid[1][1].value
        && grid[1][1].value === grid[2][0].value){
            winStatus.win = true;
            winStatus.winner = grid[2][0].value;
            grid[0][2].isInWin = true;
            grid[1][1].isInWin = true;
            grid[2][0].isInWin = true;
            updateGrid(grid);
        }


    return winStatus;
}


export const aiReadableTranslater = (currentGrid) => {
    let aiGrid = [];

    currentGrid.forEach(
        (row, rowIndex) => {
            row.forEach(
                (square, squareIndex) => {
                    if(!square.value){
                        aiGrid = [
                            ...aiGrid,
                            ''
                        ];
                    }else{
                        aiGrid = [
                            ...aiGrid,
                            square.value
                        ];
                    }
                }
            );
        }
    );

    return aiGrid;
}

export const appReadableTranslater = (aiResponse) => {
    let grid = [];
    let gridNumber = 1;
    for(let outerGrid = 0; outerGrid < 3; outerGrid++){
        let currentGrid = [];
        
        for(let innerGrid = 0; innerGrid < 3; innerGrid++){
            currentGrid = [...currentGrid, {
                value: aiResponse[gridNumber - 1] === '' ? null : aiResponse[gridNumber - 1],
                isInWin: false,
                gridNumber,
            }]
            gridNumber++;
        }

        grid = [...grid, currentGrid];
    }

    return grid;
}
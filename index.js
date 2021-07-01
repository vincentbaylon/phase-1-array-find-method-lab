function superbowlWin(arr) {
    const checkForWin = arr.find(result => result.result === 'W' )
    return checkForWin ? checkForWin.year : undefined
}


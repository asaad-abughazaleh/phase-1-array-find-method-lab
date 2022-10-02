function superbowlWin(array) {
    let found
    if (found = array.find(element => element.result === "W")) {
        return found.year
    }
}
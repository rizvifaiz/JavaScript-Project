function determineMatchWinner(rounds) {
    
    const player1 = { roundsWon: 0 };
    const player2 = { roundsWon: 0 };
  
    
    for (const round of rounds) {
      if (round === 1) {
        player1.roundsWon++;
      } else if (round === 2) {
        player2.roundsWon++;
      }
    }
  
    
    if (player1.roundsWon > player2.roundsWon) {
      return `Player 1 won the match by winning ${player1.roundsWon} rounds`;
    } else if (player2.roundsWon > player1.roundsWon) {
      return `Player 2 won the match by winning ${player2.roundsWon} rounds`;
    } else {
      return `The match ended in a tie, and each player won ${player1.roundsWon} rounds.`;
    }
  }
  
  
  console.log(determineMatchWinner([1, 2, 2, 1, 1])); // Output: Player 1 won the match by winning 3 rounds
  console.log(determineMatchWinner([1, 2, 1, 2, 2, 2, 1])); // Output: Player 2 won the match by winning 4 rounds
  console.log(determineMatchWinner([1, 2, 1, 2])); // Output: The match ended in a tie, and each player won 2 rounds.
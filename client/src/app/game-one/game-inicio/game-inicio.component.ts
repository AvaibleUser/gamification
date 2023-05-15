import { Component } from '@angular/core';

@Component({
  selector: 'app-game-inicio',
  templateUrl: './game-inicio.component.html',
  styleUrls: ['./game-inicio.component.css']
})
export class GameInicioComponent {
  words: string[] = ['BAT', 'MET', 'WEB'];
  letters: string[] = this.getUniqueLetters(this.words.join(''));
  selectedLetters: string[] = [];
  revealedLetters: string[][] = [];
  completedWords: string[] = [];
  showAlert: boolean = false;
  isWordValid: boolean = false;
  alertMessage: string = '';

  private getUniqueLetters(word: string): string[] {
    return Array.from(new Set(word.split('')));
  }

  selectLetter(letter: string): void {
    this.selectedLetters.push(letter);
  }

  removeSelectedLetter(index: number): void {
    this.selectedLetters.splice(index, 1);
  }

  formWord(): void {
    const formedWord = this.selectedLetters.join('');
    if (this.words.includes(formedWord)) {
      this.showAlert = true;
      this.isWordValid = true;
      this.alertMessage = '¡Palabra válida!';
      this.completeWord(formedWord);
      this.revealWord(formedWord);
    } else {
      this.showAlert = true;
      this.isWordValid = false;
      this.alertMessage = 'Palabra inválida';
    }
  }

  completeWord(word: string): void {
    this.completedWords.push(word);
    // Comprobar si todas las palabras han sido completadas
    if (this.completedWords.length === this.words.length) {
      console.log('¡Has completado todas las palabras!');
    }
  }

  revealWord(word: string): void {
    const revealedLetters: string[] = [];
    for (let i = 0; i < word.length; i++) {
      revealedLetters.push(word[i]);
    }
    this.revealedLetters.push(revealedLetters);
  }

  isLetterRevealed(wordIndex: number, letterIndex: number): boolean {
    return (
      this.revealedLetters[wordIndex] &&
      this.revealedLetters[wordIndex].length > letterIndex
    );
  }

  getLetterDisplay(wordIndex: number, letterIndex: number): string {
    const word = this.words[wordIndex];
    const letter = word[letterIndex];
    if (this.isLetterRevealed(wordIndex, letterIndex)) {
      return letter;
    }
    return '';
  }

  isWordCompleted(wordIndex: number): boolean {
    const word = this.words[wordIndex];
    return this.completedWords.includes(word);
  }
}
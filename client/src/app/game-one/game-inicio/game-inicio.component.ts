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
    } else {
      this.showAlert = true;
      this.isWordValid = false;
      this.alertMessage = 'Palabra inválida';
    }
    this.selectedLetters = []; // Limpiar el selector de letras después de validar una palabra
  }

  completeWord(word: string): void {
    this.completedWords.push(word);
  }

  isWordCompleted(wordIndex: number, letterIndex: number): boolean {
    const word = this.words[wordIndex];
    const letter = word[letterIndex];
    return this.completedWords.includes(word) && this.selectedLetters.includes(letter);
  }

  getLetterDisplay(wordIndex: number, letterIndex: number): string {
    const word = this.words[wordIndex];
    const letter = word[letterIndex];
    return this.isWordCompleted(wordIndex, letterIndex) ? letter : '';
  }
}

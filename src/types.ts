/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Question {
  id: string;
  category: string;
  text: string;
  options: string[];
  correctAnswer: number;
}

export interface QuizResult {
  score: number;
  total: number;
  correctAnswers: string[];
  wrongAnswers: {
    questionId: string;
    userAnswer: number;
  }[];
}

import { Component, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

// Mock de preguntas según encuesta
interface Question {
  id: string;
  text: string;
  type: string; // numeric, likert, multiple_choice, multiple_select, open_text, star_rating, matrix
  options?: string[];
  matrix?: string[]; // para matrix
}

@Component({
  selector: 'app-survey',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './surveys.component.html',
  styleUrls: ['./surveys.component.css']
})
export class SurveyComponent implements OnInit {
  @Input() surveyId: string = '';
  surveyTitle: string = '';
  currentUserRole: string = 'usuario';

  questions: Question[] = [];
  answers: { [key: string]: any } = {}; // respuestas por questionId

  constructor(private router: Router) {}

  ngOnInit(): void {
    // Mock user role
    const user = localStorage.getItem('currentUser');
    this.currentUserRole = user ? JSON.parse(user).roleId === 1 ? 'admin' :
                              JSON.parse(user).roleId === 2 ? 'consultor' : 'usuario' : 'usuario';

    // Mock de encuesta
    this.surveyTitle = 'Evaluación Liderazgo 360°';

    this.questions = [
      { id: 'q1', text: 'Evalúa tu comunicación', type: 'numeric', options: ['1','2','3','4','5'] },
      { id: 'q2', text: 'Colaboración con equipo', type: 'likert', options: ['Totalmente en desacuerdo','En desacuerdo','Neutral','De acuerdo','Totalmente de acuerdo'] },
      { id: 'q3', text: 'Tecnologías que dominas', type: 'multiple_select', options: ['Angular','Node.js','SQL','Python'] },
      { id: 'q4', text: 'Comentario libre', type: 'open_text' },
      { id: 'q5', text: 'Califica tu satisfacción con el liderazgo', type: 'star_rating', options: ['1','2','3','4','5'] },
      { id: 'q6', text: 'Matriz de competencias', type: 'matrix', options: ['Excelente','Bueno','Regular','Malo'], matrix: ['Comunicación','Trabajo en equipo','Liderazgo'] }
    ];
  }

  submitSurvey() {
    console.log('Respuestas:', this.answers);
    alert('¡Encuesta enviada! (mock)');
    this.router.navigate(['/dashboard']);
  }

onCheckboxChange(event: any, questionId: string) {
  if (!this.answers[questionId]) {
    this.answers[questionId] = [];
  }

  const value = event.target.value;
  if (event.target.checked) {
    this.answers[questionId].push(value);
  } else {
    const index = this.answers[questionId].indexOf(value);
    if (index > -1) {
      this.answers[questionId].splice(index, 1);
    }
  }
}
}

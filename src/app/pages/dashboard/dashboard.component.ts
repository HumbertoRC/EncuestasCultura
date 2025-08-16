import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

// Mock-data básico
interface Survey {
  id: string;
  title: string;
  type: string;
  status: string;
  startDate: string;
  endDate: string;
}

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  currentUserRole: string = '';
  
  // Tipos de encuestas
  surveyTypes: string[] = ['90°', '180°', '360°', 'Clima Laboral', 'Satisfacción'];
  
  // Listado de encuestas mock
  surveys: Survey[] = [
    { id: 's-001', title: 'Evaluación Liderazgo 360°', type: '360°', status: 'Activa', startDate: '2025-01-01', endDate: '2025-12-31' },
    { id: 's-002', title: 'Autoevaluación Habilidades Blandas', type: '90°', status: 'Activa', startDate: '2025-02-01', endDate: '2025-06-30' },
    { id: 's-003', title: 'Evaluación 180° Equipo TI', type: '180°', status: 'Borrador', startDate: '2025-03-01', endDate: '2025-07-31' }
  ];

  // Filtros
  selectedType: string = '';
  selectedStatus: string = '';

  constructor(private router: Router) {}

  ngOnInit(): void {
    // Mock: obtener rol de usuario desde localStorage
    const user = localStorage.getItem('currentUser');
    this.currentUserRole = user ? JSON.parse(user).roleId === 1 ? 'admin' :
                             JSON.parse(user).roleId === 2 ? 'consultor' : 'usuario' : 'usuario';
  }

  // Filtrado simple por tipo y estado
  get filteredSurveys() {
    return this.surveys.filter(s => 
      (this.selectedType ? s.type === this.selectedType : true) &&
      (this.selectedStatus ? s.status === this.selectedStatus : true)
    );
  }

  // Acciones según rol
  canEdit(): boolean {
    return this.currentUserRole === 'admin';
  }

  canViewMetrics(): boolean {
    return this.currentUserRole === 'admin' || this.currentUserRole === 'consultor';
  }

openSurvey(survey: Survey) {
  this.router.navigate(['/survey', survey.id]);
}

}

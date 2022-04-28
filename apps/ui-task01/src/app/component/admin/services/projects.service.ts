import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '@env/environment';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  
  apiURLProject = environment.apiUrl + 'projects';

  constructor(private http: HttpClient) { }

  getProjects(): Observable<Project[]> {
    return this.http.get<Project[]>(this.apiURLProject);
  }

  getProject(id: string): Observable<Project> {
    return this.http.get<Project>(`${this.apiURLProject}/${id}`);
  }

  createProject(project: Project): Observable<Project> {
    return this.http.post<Project>(this.apiURLProject, project);
  }

  updateProject(project: Project): Observable<Project> {
    return this.http.put<Project>(`${this.apiURLProject}/${project.id}`, project);
  }

  deleteProject(id: string): Observable<any> {
    return this.http.delete<any>(`${this.apiURLProject}/${id}`);
  }

  getProjectCount(): Observable<number> {
    return this.http
      .get<number>(`${this.apiURLProject}/get/count`)
      .pipe(map((objectValue: any) => objectValue.projectCount));
  }

  /* urlPrefix= environment.apiUrl; //make this as empty ("") if you are using asp.net core [without CORS]

  constructor(private httpClient: HttpClient) { }

  getAllProjects(): Observable<Project[]>
  {
    return this.httpClient.get<Project[]>(this.urlPrefix + 'projects', {
      responseType: 'json',
    });
  }

  insertProject(newProject: Project): Observable<Project>
  {
    return this.httpClient.post<Project>(this.urlPrefix + 'projects', newProject, {
      responseType: 'json',
    });
  }

  updateProject(existingProject: Project): Observable<Project>
  {
    return this.httpClient.put<Project>(this.urlPrefix + 'projects', existingProject, {
      responseType: 'json',
    });
  }

  deleteProject(id: number): Observable<string>
  {
    return this.httpClient.delete<string>(
      this.urlPrefix + 'projects?ProjectID=' + ProjectID
    );
  }

  SearchProjects(searchBy: string, searchText: string): Observable<Project[]>
  {
    return this.httpClient.get<Project[]>(
      this.urlPrefix + 'projects/search/' + searchBy + '/' + searchText,
      { responseType: 'json' }
    );
  } */
}

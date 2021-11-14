import { Component } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "Cristiano Ronaldo";
  year = 2021;
  objCurso: any;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http
      .get<any>("https://nodejs2021dpa.andreapv89.repl.co")
      .subscribe((data) => {
        this.objCurso = data;
        console.log(data);
      });
  }
}

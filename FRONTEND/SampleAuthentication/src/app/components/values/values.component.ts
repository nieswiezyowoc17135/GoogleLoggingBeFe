import { Component, OnInit } from '@angular/core';
import { retry } from 'rxjs';
import { Values } from 'src/app/models/values';
import { ValuesService } from 'src/app/services/values.service';

@Component({
  selector: 'app-values',
  templateUrl: './values.component.html',
  styleUrls: ['./values.component.css']
})
export class ValuesComponent implements OnInit {

  values: Values = {
    valueString1: "siemka",
    valueString2: "tu",
    valueString3: "lenka"
  };

  constructor(private valuesService: ValuesService) { }

  ngOnInit(): void {
    this.getValues()
  }

  getValues() {
    this.valuesService.getValues().subscribe(values => {
      this.values = values
    });
  }


}

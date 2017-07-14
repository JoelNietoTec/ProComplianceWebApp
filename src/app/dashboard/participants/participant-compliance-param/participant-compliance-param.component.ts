import { Component, OnInit, Input } from '@angular/core';

import { Participant, ParticipantParam } from '../../../shared/models/participants.model';
import { Param, ParamValue, ParamSubValue, ParamTable } from '../../../shared/models/params.models';

import { UtilitiesService } from '../../../shared/services/utilities.service';
import { ParticipantsService } from '../../../shared/services/participants.service';
import { ToastyModule, ToastyService, ToastOptions, ToastData, ToastyConfig } from 'ng2-toasty';

@Component({
  selector: 'compliance-param',
  templateUrl: './participant-compliance-param.component.html',
  styleUrls: ['./participant-compliance-param.component.css']
})

export class ParticipantComplianceParamComponent implements OnInit {
  @Input() participant: Participant;
  @Input() partParams: ParticipantParam[];
  @Input() param: Param;

  _partParam: ParticipantParam;
  _default: any = undefined;
  _value: any = {
    ID: null,
    Score: null
  };
  _currentValue: ParamValue;
  _currentSubValue: ParamSubValue;

  _values: ParamValue[];
  _subvalues: ParamSubValue[];

  constructor(
    private _util: UtilitiesService,
    private _partService: ParticipantsService,
    private ToastyService: ToastyService,
    private ToastyConfig: ToastyConfig
  ) {
    this.ToastyConfig.theme = 'material';
  }

  ngOnInit() {
    // this._partParam = this._util.filterByID(this.partParams, this.param.ID);
    this.getParam();
    this._values = this.param.ParamTable.ParamValues;
    this._values = this._util.sortBy(this._values, 'EnglishDisplayValue');
    for (let i of this._values) {
      i.ParamSubValues = this._util.sortBy(i.ParamSubValues, 'EnglishName');
    }
    // console.log(this._value);

  }

  getParam() {
    this._partParam = this.partParams.find(item => item.ParamID === this.param.ID);
    // console.log(this._partParam);
    this._currentValue = this.param.ParamTable.ParamValues.find(item => item.ID === this._partParam.ParamValueID);
    if (this.param.ParamTable.TableType.ID === 2 && this._partParam.ParamSubValueID) {
      this._currentSubValue = this._currentValue.ParamSubValues.find(item => item.ID === this._partParam.ParamSubValueID);
    }
    console.log(this._currentValue);
    this._value.ID = this._partParam.ParamValueID;
    this._value.Score = this._partParam.Score;
  }

  updateParam(event: string) {
    if (this.param.ParamTable.TableType.ID === 2) {
      this._partParam.ParamValueID = this._currentSubValue.ParamValueID;
      this._partParam.ParamSubValueID = this._currentSubValue.ID;
      this._partParam.Score = this._currentSubValue.Score;
    } else {
      this._partParam.ParamValueID = this._currentValue.ID;
      this._partParam.Score = this._currentValue.Score;
    }

    console.log(this._partParam);
    this._partService.updateParam(this._partParam.ID, this._partParam)
      .subscribe(data => {
        this.ToastyService.success('Updated Parameter');
      });
  }
}

// 50 84292

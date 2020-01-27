import React from "react";
import Titles from "./Components/Titles";
import InitialForm from "./Components/InitialForm";
import ATTDForm from "./Components/ATTDForm";
import ATTYForm from "./Components/ATTYForm";
import ATTMForm from "./Components/ATTMForm";
import DATLDForm from "./Components/DATLDForm";
import DATLMForm from "./Components/DATLMForm";
import DATLYForm from "./Components/DATLYForm";
import AGPTDForm from "./Components/AGPTDForm";
import AGPTMForm from "./Components/AGPTMForm";
import AGPTYForm from "./Components/AGPTYForm";
import AVDDForm from "./Components/AVDDForm";
import AVDMForm from "./Components/AVDMForm";
import AVDYForm from "./Components/AVDYForm";
import ATTDPresent from "./Components/ATTDPresent";

const API_KEY = "1234-abcd-5678";
const username = "test";
const password = "1234";

class App extends React.Component {

  state = {
    AreaName: undefined,
    ResolutionCode: undefined,
    Year: undefined,
    Month: undefined,
    Day: undefined,
    ProductionType: undefined,
    on: [false, false, false, false, false, false, false, false, false, false, false, false],
    ActualTotalLoadValues: [],
    DayAheadTotalLoadValues: []
  }

  formEnable = (a) => {
    const temp = this.state.on;
    temp[0] = false;
    temp[1] = false;
    temp[2] = false;
    temp[3] = false;
    temp[4] = false;
    temp[5] = false;
    temp[6] = false;
    temp[7] = false;
    temp[8] = false;
    temp[9] = false;
    temp[10] = false;
    temp[11] = false;
    temp[a] = !temp[a];
    this.setState({ on: temp });
  }

  getActualTotalLoadDay = async (e) => {
    if (e) e.preventDefault();
    const AreaName = e.target.elements.AreaName.value;
    const ResolutionCode = e.target.elements.ResolutionCode.value;
    const Year = e.target.elements.Year.value;
    const Month = e.target.elements.Month.value;
    const Day = e.target.elements.Day.value;
    const api_call = await fetch(`http://localhost:8765/energy/api/ActualTotalLoad/${AreaName}/${ResolutionCode}/date/${Year}-${Month}-${Day}?format=json&apikey=${API_KEY}`);
    const data = await api_call.json();
    const map2 = [];
    if (`${ResolutionCode}` === 'PT60M') {
      for (let i = 0; i < 24; i++) {
        map2[i] = data[i].ActualTotalLoadValue;
      }
    }
    if (`${ResolutionCode}` === 'PT30M') {
      for (let i = 0; i < 48; i++) {
        map2[i] = data[i].ActualTotalLoadValue;
      }
    }
    if (`${ResolutionCode}` === 'PT15M') {
      for (let i = 0; i < 96; i++) {
        map2[i] = data[i].ActualTotalLoadValue;
      }
    }
    this.setState({
      ActualTotalLoadValues: map2
    });
    console.log(this.state.ActualTotalLoadValues);
  }

  getActualTotalLoadMonth = async (e) => {
    if (e) e.preventDefault();
    const AreaName = e.target.elements.AreaName.value;
    const ResolutionCode = e.target.elements.ResolutionCode.value;
    const Year = e.target.elements.Year.value;
    const Month = e.target.elements.Month.value;
    const api_call = await fetch(`http://localhost:8765/energy/api/ActualTotalLoad/${AreaName}/${ResolutionCode}/month/${Year}-${Month}?format=json&apikey=${API_KEY}`);
    const data = await api_call.json();
    const map2 = [];
    console.log(data);
    if (ResolutionCode === 'PT60M') {
      for (let i = 0; i < 10; i++) {
        map2[i] = data[i].ActualTotalLoadByDayValue;
      }
    }
    if (ResolutionCode === 'PT30M') {
      for (let i = 0; i < 20; i++) {
        map2[i] = data[i].ActualTotalLoadByDayValue;
      }
    }
    if (ResolutionCode === 'PT15M') {
      for (let i = 0; i < 40; i++) {
        map2[i] = data[i].ActualTotalLoadByDayValue;
      }
    }
    this.setState({
      ActualTotalLoadValues: map2
    });
    console.log(this.state.ActualTotalLoadValues);
  }

  getActualTotalLoadYear = async (e) => {
    if (e) e.preventDefault();
    const AreaName = e.target.elements.AreaName.value;
    const ResolutionCode = e.target.elements.ResolutionCode.value;
    const Year = e.target.elements.Year.value;
    const api_call = await fetch(`http://localhost:8765/energy/api/ActualTotalLoad/${AreaName}/${ResolutionCode}/year/${Year}?format=json&apikey=1234-abcd-5678`);
    const data = await api_call.json();
    const map2 = [];
    console.log(data);
    if (ResolutionCode === 'PT60M') {
      for (let i = 0; i < 1; i++) {
        map2[i] = data[i].ActualTotalLoadByMonthValue;
      }
    }
    if (ResolutionCode === 'PT30M') {
      for (let i = 0; i < 2; i++) {
        map2[i] = data[i].ActualTotalLoadByMonthValue;
      }
    }
    if (ResolutionCode === 'PT15M') {
      for (let i = 0; i < 4; i++) {
        map2[i] = data[i].ActualTotalLoadByMonthValue;
      }
    }
    this.setState({
      ActualTotalLoadValues: map2
    });
    console.log(this.state.ActualTotalLoadValues);
  }

  getDayAheadTotalLoadForecastDay = async (e) => {
    if (e) e.preventDefault();
    const AreaName = e.target.elements.AreaName.value;
    const ResolutionCode = e.target.elements.ResolutionCode.value;
    const Year = e.target.elements.Year.value;
    const Month = e.target.elements.Month.value;
    const Day = e.target.elements.Day.value;
    const api_call = await fetch(`http://localhost:8765/energy/api/DayAheadTotalLoadForecast/${AreaName}/${ResolutionCode}/date/${Year}-${Month}-${Day}?format=json&apikey=${API_KEY}`);
    const data = await api_call.json();
    console.log(data);
    const map2 = [];
    if (ResolutionCode === 'PT60M') {
      for (let i = 0; i < 24; i++) {
        map2[i] = data[i].DayAheadTotalLoadForecastValue;
      }
    }
    if (ResolutionCode === 'PT30M') {
      for (let i = 0; i < 48; i++) {
        map2[i] = data[i].DayAheadTotalLoadForecastValue;
      }
    }
    if (ResolutionCode === 'PT15M') {
      for (let i = 0; i < 96; i++) {
        map2[i] = data[i].DayAheadTotalLoadForecastValue;
      }
    }
    this.setState({
      DayAheadTotalLoadValues: map2
    });
    console.log(this.state.DayAheadTotalLoadValues);
  }

  getDayAheadTotalLoadForecastMonth = async (e) => {
    if (e) e.preventDefault();
    const AreaName = e.target.elements.AreaName.value;
    const ResolutionCode = e.target.elements.ResolutionCode.value;
    const Year = e.target.elements.Year.value;
    const Month = e.target.elements.Month.value;
    const api_call = await fetch(`http://localhost:8765/energy/api/DayAheadTotalLoadForecast/${AreaName}/${ResolutionCode}/month/${Year}-${Month}?format=json&apikey=${API_KEY}`);
    const data = await api_call.json();
    console.log(data);
    const map2 = [];
    if (ResolutionCode === 'PT60M') {
      for (let i = 0; i < 10; i++) {
        map2[i] = data[i].DayAheadTotalLoadForecastByDayValue;
      }
    }
    if (ResolutionCode === 'PT30M') {
      for (let i = 0; i < 20; i++) {
        map2[i] = data[i].DayAheadTotalLoadForecastByDayValue;
      }
    }
    if (ResolutionCode === 'PT15M') {
      for (let i = 0; i < 40; i++) {
        map2[i] = data[i].DayAheadTotalLoadForecastByDayValue;
      }
    }
    this.setState({
      DayAheadTotalLoadValues: map2
    });
    console.log(this.state.DayAheadTotalLoadValues);
  }

  getDayAheadTotalLoadForecastYear = async (e) => {
    if (e) e.preventDefault();
    const AreaName = e.target.elements.AreaName.value;
    const ResolutionCode = e.target.elements.ResolutionCode.value;
    const Year = e.target.elements.Year.value;
    const api_call = await fetch(`http://localhost:8765/energy/api/DayAheadTotalLoadForecast/${AreaName}/${ResolutionCode}/year/${Year}?format=json&apikey=${API_KEY}`);
    const data = await api_call.json();
    console.log(data);
    const map2 = [];
    if (ResolutionCode === 'PT60M') {
      for (let i = 0; i < 1; i++) {
        map2[i] = data[i].DayAheadTotalLoadForecastByMonthValue;
      }
    }
    if (ResolutionCode === 'PT30M') {
      for (let i = 0; i < 2; i++) {
        map2[i] = data[i].DayAheadTotalLoadForecastByMonthValue;
      }
    }
    if (ResolutionCode === 'PT15M') {
      for (let i = 0; i < 4; i++) {
        map2[i] = data[i].DayAheadTotalLoadForecastByMonthValue;
      }
    }
    this.setState({
      DayAheadTotalLoadValues: map2
    });
    console.log(this.state.DayAheadTotalLoadValues);
  }

  getAggregatedGenerationPerTypeDay = async (e) => {
    if (e) e.preventDefault();
    const AreaName = e.target.elements.AreaName.value;
    const ProductionType = e.target.elements.ProductionType.value;
    const ResolutionCode = e.target.elements.ResolutionCode.value;
    const Year = e.target.elements.Year.value;
    const Month = e.target.elements.Month.value;
    const Day = e.target.elements.Day.value;
    const api_call = await fetch(`http://localhost:8765/energy/api/AggregatedGenerationPerType/${AreaName}/${ProductionType}/${ResolutionCode}/date/${Year}-${Month}-${Day}?format=json&apikey=${API_KEY}`);
    const data = await api_call.json();
    console.log(data);
    const map2 = [];
    //need to see what happens with all types, but request times out
    if (ResolutionCode === 'PT60M') {
      for (let i = 0; i < 24; i++) {
        map2[i] = data[i].ActualGenerationOutputValue;
      }
    }
    if (ResolutionCode === 'PT30M') {
      for (let i = 0; i < 48; i++) {
        map2[i] = data[i].ActualGenerationOutputValue;
      }
    }
    if (ResolutionCode === 'PT15M') {
      for (let i = 0; i < 96; i++) {
        map2[i] = data[i].ActualGenerationOutputValue;
      }
    }
    this.setState({
      ActualTotalLoadValues: map2
    });
    console.log(this.state.ActualTotalLoadValues);
  }

  getAggregatedGenerationPerTypeMonth = async (e) => {
    if (e) e.preventDefault();
    const AreaName = e.target.elements.AreaName.value;
    const ProductionType = e.target.elements.ProductionType.value;
    const ResolutionCode = e.target.elements.ResolutionCode.value;
    const Year = e.target.elements.Year.value;
    const Month = e.target.elements.Month.value;
    const api_call = await fetch(`http://localhost:8765/energy/api/AggregatedGenerationPerType/${AreaName}/${ProductionType}/${ResolutionCode}/month/${Year}-${Month}?format=json&apikey=${API_KEY}`);
    const data = await api_call.json();
    console.log(data);
    const map2 = [];
    //need to see what happens with all types, but request times out
    if (ResolutionCode === 'PT60M') {
      for (let i = 0; i < 10; i++) {
        map2[i] = data[i].ActualGenerationOutputByDayValue;
      }
    }
    if (ResolutionCode === 'PT30M') {
      for (let i = 0; i < 10; i++) {
        map2[i] = data[i].ActualGenerationOutputByDayValue;
      }
    }
    if (ResolutionCode === 'PT15M') {
      for (let i = 0; i < 10; i++) {
        map2[i] = data[i].ActualGenerationOutputByDayValue;
      }
    }
    this.setState({
      ActualTotalLoadValues: map2
    });
    console.log(this.state.ActualTotalLoadValues);
  }

  getAggregatedGenerationPerTypeYear = async (e) => {
    if (e) e.preventDefault();
    const AreaName = e.target.elements.AreaName.value;
    const ProductionType = e.target.elements.ProductionType.value;
    const ResolutionCode = e.target.elements.ResolutionCode.value;
    const Year = e.target.elements.Year.value;
    const api_call = await fetch(`http://localhost:8765/energy/api/AggregatedGenerationPerType/${AreaName}/${ProductionType}/${ResolutionCode}/year/${Year}?format=json&apikey=${API_KEY}`);
    const data = await api_call.json();
    console.log(data);
    const map2 = [];
    //need to see what happens with all types, but request times out
    if (ResolutionCode === 'PT60M') {
      for (let i = 0; i < 1; i++) {
        map2[i] = data[i].ActualGenerationOutputByMonthValue;
      }
    }
    if (ResolutionCode === 'PT30M') {
      for (let i = 0; i < 2; i++) {
        map2[i] = data[i].ActualGenerationOutputByMonthValue;
      }
    }
    if (ResolutionCode === 'PT15M') {
      for (let i = 0; i < 4; i++) {
        map2[i] = data[i].ActualGenerationOutputByMonthValue;
      }
    }
    this.setState({
      ActualTotalLoadValues: map2
    });
    console.log(this.state.ActualTotalLoadValues);
  }

  getActualvsForecastDay = async (e) => {
    if (e) e.preventDefault();
    const AreaName = e.target.elements.AreaName.value;
    const ResolutionCode = e.target.elements.ResolutionCode.value;
    const Year = e.target.elements.Year.value;
    const Month = e.target.elements.Month.value;
    const Day = e.target.elements.Day.value;
    const api_call = await fetch(`http://localhost:8765/energy/api/ActualvsForecast/${AreaName}/${ResolutionCode}/date/${Year}-${Month}-${Day}?format=json&apikey=${API_KEY}`);
    const data = await api_call.json();
    console.log(data);
    const map1 = [];
    const map2 = [];
    if (`${ResolutionCode}` === 'PT60M') {
      for (let i = 0; i < 24; i++) {
        map1[i] = data[i].ActualTotalLoadValue;
        map2[i] = data[i].DayAheadTotalLoadForecastValue;
      }
    }
    if (`${ResolutionCode}` === 'PT30M') {
      for (let i = 0; i < 48; i++) {
        map1[i] = data[i].ActualTotalLoadValue;
        map2[i] = data[i].DayAheadTotalLoadForecastValue;
      }
    }
    if (`${ResolutionCode}` === 'PT15M') {
      for (let i = 0; i < 96; i++) {
        map1[i] = data[i].ActualTotalLoadValue;
        map2[i] = data[i].DayAheadTotalLoadForecastValue;
      }
    }
    this.setState({
      ActualTotalLoadValues: map1,
      DayAheadTotalLoadValues: map2
    });
    console.log(this.state.ActualTotalLoadValues);
    console.log(this.state.DayAheadTotalLoadValues);
  }

  getActualvsForecastMonth = async (e) => {
    if (e) e.preventDefault();
    const AreaName = e.target.elements.AreaName.value;
    const ResolutionCode = e.target.elements.ResolutionCode.value;
    const Year = e.target.elements.Year.value;
    const Month = e.target.elements.Month.value;
    const api_call = await fetch(`http://localhost:8765/energy/api/ActualvsForecast/${AreaName}/${ResolutionCode}/month/${Year}-${Month}?format=json&apikey=${API_KEY}`);
    const data = await api_call.json();
    console.log(data);
    const map1 = [];
    const map2 = [];
    if (`${ResolutionCode}` === 'PT60M') {
      for (let i = 0; i < 10; i++) {
        map1[i] = data[i].ActualTotalLoadByDayValue;
        map2[i] = data[i].DayAheadTotalLoadForecastByDayValue;
      }
    }
    if (`${ResolutionCode}` === 'PT30M') {
      for (let i = 0; i < 20; i++) {
        map1[i] = data[i].ActualTotalLoadByDayValue;
        map2[i] = data[i].DayAheadTotalLoadForecastByDayValue;
      }
    }
    if (`${ResolutionCode}` === 'PT15M') {
      for (let i = 0; i < 40; i++) {
        map1[i] = data[i].ActualTotalLoadByDayValue;
        map2[i] = data[i].DayAheadTotalLoadForecastByDayValue;
      }
    }
    this.setState({
      ActualTotalLoadValues: map1,
      DayAheadTotalLoadValues: map2
    });
    console.log(this.state.ActualTotalLoadValues);
    console.log(this.state.DayAheadTotalLoadValues);
  }

  getActualvsForecastYear = async (e) => {
    if (e) e.preventDefault();
    const AreaName = e.target.elements.AreaName.value;
    const ResolutionCode = e.target.elements.ResolutionCode.value;
    const Year = e.target.elements.Year.value;
    const api_call = await fetch(`http://localhost:8765/energy/api/ActualvsForecast/${AreaName}/${ResolutionCode}/year/${Year}?format=json&apikey=${API_KEY}`);
    const data = await api_call.json();
    console.log(data);
    const map1 = [];
    const map2 = [];
    if (`${ResolutionCode}` === 'PT60M') {
      for (let i = 0; i < 1; i++) {
        map1[i] = data[i].ActualTotalLoadByMonthValue;
        map2[i] = data[i].DayAheadTotalLoadForecastByMonthValue;
      }
    }
    if (`${ResolutionCode}` === 'PT30M') {
      for (let i = 0; i < 2; i++) {
        map1[i] = data[i].ActualTotalLoadByMonthValue;
        map2[i] = data[i].DayAheadTotalLoadForecastByMonthValue;
      }
    }
    if (`${ResolutionCode}` === 'PT15M') {
      for (let i = 0; i < 4; i++) {
        map1[i] = data[i].ActualTotalLoadByMonthValue;
        map2[i] = data[i].DayAheadTotalLoadForecastByMonthValue;
      }
    }
    this.setState({
      ActualTotalLoadValues: map1,
      DayAheadTotalLoadValues: map2
    });
    console.log(this.state.ActualTotalLoadValues);
    console.log(this.state.DayAheadTotalLoadValues);
  }

  getData = async (e) => {
    if (e) e.preventDefault();
    const dataset = e.target.elements.dataset.value;
    if (dataset === "ActualTotalLoadDay") {
      this.formEnable(0);
    }
    if (dataset === "ActualTotalLoadMonth") {
      this.formEnable(1);
    }
    if (dataset === "ActualTotalLoadYear") {
      this.formEnable(2);
    }
    if (dataset === "DayAheadTotalLoadForecastDay") {
      this.formEnable(3);
    }
    if (dataset === "DayAheadTotalLoadForecastMonth") {
      this.formEnable(4);
    }
    if (dataset === "DayAheadTotalLoadForecastYear") {
      this.formEnable(5);
    }
    if (dataset === "AggregatedGenerationPerTypeDay") {
      this.formEnable(6);
    }
    if (dataset === "AggregatedGenerationPerTypeMonth") {
      this.formEnable(7);
    }
    if (dataset === "AggregatedGenerationPerTypeYear") {
      this.formEnable(8);
    }
    if (dataset === "ActualvsForecastDay") {
      this.formEnable(9);
    }
    if (dataset === "ActualvsForecastMonth") {
      this.formEnable(10);
    }
    if (dataset === "ActualvsForecastYear") {
      this.formEnable(11);
    }
  }

  render() {
    return (
      <div>
        <Titles />
        <InitialForm getData={this.getData} />
        {this.state.on[0] ? <ATTDForm getActualTotalLoadDay={this.getActualTotalLoadDay}
          AreaName={this.state.Areaname}
          ResolutionCode={this.state.ResolutionCode}
          Year={this.state.Year}
          Month={this.state.Month}
          Day={this.state.Day}
          ActualTotalLoadValues={this.state.ActualTotalLoadValues} /> : null}
        {this.state.on[1] ? <ATTMForm getActualTotalLoadMonth={this.getActualTotalLoadMonth}
          AreaName={this.state.Areaname}
          ResolutionCode={this.state.ResolutionCode}
          Year={this.state.Year}
          Month={this.state.Month} /> : null}
        {this.state.on[2] ? <ATTYForm getActualTotalLoadYear={this.getActualTotalLoadYear}
          AreaName={this.state.Areaname}
          ResolutionCode={this.state.ResolutionCode}
          Year={this.state.Year} /> : null}
        {this.state.on[3] ? <DATLDForm getDayAheadTotalLoadForecastDay={this.getDayAheadTotalLoadForecastDay}
          AreaName={this.state.AreaName}
          ResolutionCode={this.state.ResolutionCode}
          Year={this.state.Year}
          Month={this.state.Month}
          Day={this.state.Day} /> : null}
        {this.state.on[4] ? <DATLMForm getDayAheadTotalLoadForecastMonth={this.getDayAheadTotalLoadForecastMonth}
          AreaName={this.state.Areaname}
          ResolutionCode={this.state.ResolutionCode}
          Year={this.state.Year}
          Month={this.state.Month} /> : null}
        {this.state.on[5] ? <DATLYForm getDayAheadTotalLoadForecastYear={this.getDayAheadTotalLoadForecastYear}
          AreaName={this.state.Areaname}
          ResolutionCode={this.state.ResolutionCode}
          Year={this.state.Year} /> : null}
        {this.state.on[6] ? <AGPTDForm getAggregatedGenerationPerTypeDay={this.getAggregatedGenerationPerTypeDay}
          AreaName={this.state.AreaName}
          ResolutionCode={this.state.ResolutionCode}
          ProductionType={this.state.ProductionType}
          Year={this.state.Year}
          Month={this.state.Month}
          Day={this.state.Day} /> : null}
        {this.state.on[7] ? <AGPTMForm getAggregatedGenerationPerTypeMonth={this.getAggregatedGenerationPerTypeMonth}
          AreaName={this.state.AreaName}
          ResolutionCode={this.state.ResolutionCode}
          ProductionType={this.state.ProductionType}
          Year={this.state.Year}
          Month={this.state.Month} /> : null}
        {this.state.on[8] ? <AGPTYForm getAggregatedGenerationPerTypeYear={this.getAggregatedGenerationPerTypeYear}
          AreaName={this.state.AreaName}
          ResolutionCode={this.state.ResolutionCode}
          ProductionType={this.state.ProductionType}
          Year={this.state.Year} /> : null}
        {this.state.on[9] ? <AVDDForm getActualvsForecastDay={this.getActualvsForecastDay}
          AreaName={this.state.Areaname}
          ResolutionCode={this.state.ResolutionCode}
          Year={this.state.Year}
          Month={this.state.Month}
          Day={this.state.Day} /> : null}
        {this.state.on[10] ? <AVDMForm getActualvsForecastMonth={this.getActualvsForecastMonth}
          AreaName={this.state.Areaname}
          ResolutionCode={this.state.ResolutionCode}
          Year={this.state.Year}
          Month={this.state.Month} /> : null}
        {this.state.on[11] ? <AVDYForm getActualvsForecastYear={this.getActualvsForecastYear}
          AreaName={this.state.Areaname}
          ResolutionCode={this.state.ResolutionCode}
          Year={this.state.Year} /> : null}
      </div>
    );
  }
}

export default App;
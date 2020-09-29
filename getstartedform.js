var Webflow = Webflow || [];
Webflow.push(function () {
	new AWF.MSF({hiddeButtonsOnSubmit: true, scrollTopOnStepChange: false, formSelector: '#wf-form-Updated-leads', nextSelector: '#next-id', backSelector: '#backstep-button', alertSelector: '#alert', warningClass: 'warning'});
	new AWF.Logic({logicList: 
		[{conditions: [
			{selector: '#Your-State', operator: 'equal', value: 'Arizona'}], operator: 'and', actions: [
				{selector: '#Your-City-Arizona', action: 'show', clear: true}, 
				{selector: '#Your-City-California', action: 'hide', clear: true}, 
				{selector: '#Your-City-Colorado', action: 'hide', clear: true}, 
				{selector: '#Your-City-Florida', action: 'hide', clear: true}, 
				{selector: '#Your-City-Georgia', action: 'hide', clear: true}, 
				{selector: '#Your-City-Nevada', action: 'hide', clear: true}, 
				{selector: '#Your-City-North-Carolina', action: 'hide', clear: true}, 
				{selector: '#Your-City-Oregon', action: 'hide', clear: true}, 
				{selector: '#Your-City-Texas', action: 'hide', clear: true}, 
				{selector: '#Your-City-Washington', action: 'hide', clear: true}
			]}, 
			{conditions: [{selector: '#Your-State', operator: 'equal', value: 'California'}], operator: 'and', actions: [
				{selector: '#Your-City-Arizona', action: 'hide', clear: true}, 
				{selector: '#Your-City-California', action: 'show', clear: true}, 
				{selector: '#Your-City-Colorado', action: 'hide', clear: true}, 
				{selector: '#Your-City-Georgia', action: 'hide', clear: true}, 
				{selector: '#Your-City-Florida', action: 'hide', clear: true}, 
				{selector: '#Your-City-Nevada', action: 'hide', clear: true}, 
				{selector: '#Your-City-North-Carolina', action: 'hide', clear: true}, 
				{selector: '#Your-City-Oregon', action: 'hide', clear: true}, 
				{selector: '#Your-City-Texas', action: 'hide', clear: true}, 
				{selector: '#Your-City-Washington', action: 'hide', clear: true}
			]}, 
			{conditions: [{selector: '#Your-State', operator: 'equal', value: 'Colorado'}], operator: 'and', actions: [
				{selector: '#Your-City-Arizona', action: 'hide', clear: true}, 
				{selector: '#Your-City-California', action: 'hide', clear: true}, 
				{selector: '#Your-City-Colorado', action: 'show', clear: true}, 
				{selector: '#Your-City-Georgia', action: 'hide', clear: true}, 
				{selector: '#Your-City-Florida', action: 'hide', clear: true}, 
				{selector: '#Your-City-Nevada', action: 'hide', clear: true}, 
				{selector: '#Your-City-North-Carolina', action: 'hide', clear: true}, 
				{selector: '#Your-City-Oregon', action: 'hide', clear: true}, 
				{selector: '#Your-City-Texas', action: 'hide', clear: true}, 
				{selector: '#Your-City-Washington', action: 'hide', clear: true}
			]}, 
			{conditions: [{selector: '#Your-State', operator: 'equal', value: 'Florida'}], operator: 'and', actions: [
				{selector: '#Your-City-Arizona', action: 'hide', clear: true}, 
				{selector: '#Your-City-California', action: 'hide', clear: true}, 
				{selector: '#Your-City-Colorado', action: 'hide', clear: true}, 
				{selector: '#Your-City-Georgia', action: 'hide', clear: true}, 
				{selector: '#Your-City-Florida', action: 'show', clear: true}, 
				{selector: '#Your-City-Nevada', action: 'hide', clear: true}, 
				{selector: '#Your-City-North-Carolina', action: 'hide', clear: true}, 
				{selector: '#Your-City-Oregon', action: 'hide', clear: true}, 
				{selector: '#Your-City-Texas', action: 'hide', clear: true}, 
				{selector: '#Your-City-Washington', action: 'hide', clear: true}
			]}, 
			{conditions: [{selector: '#Your-State', operator: 'equal', value: 'Georgia'}], operator: 'and', actions: [
				{selector: '#Your-City-Arizona', action: 'hide', clear: true}, 
				{selector: '#Your-City-California', action: 'hide', clear: true}, 
				{selector: '#Your-City-Colorado', action: 'hide', clear: true}, 
				{selector: '#Your-City-Georgia', action: 'show', clear: true}, 
				{selector: '#Your-City-Florida', action: 'hide', clear: true}, 
				{selector: '#Your-City-Nevada', action: 'hide', clear: true}, 
				{selector: '#Your-City-North-Carolina', action: 'hide', clear: true}, 
				{selector: '#Your-City-Oregon', action: 'hide', clear: true}, 
				{selector: '#Your-City-Texas', action: 'hide', clear: true}, 
				{selector: '#Your-City-Washington', action: 'hide', clear: true}
			]}, 
			{conditions: [{selector: '#Your-State', operator: 'equal', value: 'Nevada'}], operator: 'and', actions: [
				{selector: '#Your-City-Arizona', action: 'hide', clear: true}, 
				{selector: '#Your-City-California', action: 'hide', clear: true}, 
				{selector: '#Your-City-Colorado', action: 'hide', clear: true}, 
				{selector: '#Your-City-Georgia', action: 'hide', clear: true}, 
				{selector: '#Your-City-Florida', action: 'hide', clear: true}, 
				{selector: '#Your-City-Nevada', action: 'show', clear: true}, 
				{selector: '#Your-City-North-Carolina', action: 'hide', clear: true}, 
				{selector: '#Your-City-Oregon', action: 'hide', clear: true}, 
				{selector: '#Your-City-Texas', action: 'hide', clear: true}, 
				{selector: '#Your-City-Washington', action: 'hide', clear: true}
			]}, 
			{conditions: [{selector: '#Your-State', operator: 'equal', value: 'North Carolina'}], operator: 'and', actions: [
				{selector: '#Your-City-Arizona', action: 'hide', clear: true}, 
				{selector: '#Your-City-California', action: 'hide', clear: true}, 
				{selector: '#Your-City-Colorado', action: 'hide', clear: true}, 
				{selector: '#Your-City-Georgia', action: 'hide', clear: true}, 
				{selector: '#Your-City-Florida', action: 'hide', clear: true}, 
				{selector: '#Your-City-Nevada', action: 'hide', clear: true}, 
				{selector: '#Your-City-North-Carolina', action: 'show', clear: true}, 
				{selector: '#Your-City-Oregon', action: 'hide', clear: true}, 
				{selector: '#Your-City-Texas', action: 'hide', clear: true}, 
				{selector: '#Your-City-Washington', action: 'hide', clear: true}
			]}, 
			{conditions: [{selector: '#Your-State', operator: 'equal', value: 'Oregon'}], operator: 'and', actions: [
				{selector: '#Your-City-Arizona', action: 'hide', clear: true}, 
				{selector: '#Your-City-California', action: 'hide', clear: true}, 
				{selector: '#Your-City-Colorado', action: 'hide', clear: true}, 
				{selector: '#Your-City-Georgia', action: 'hide', clear: true}, 
				{selector: '#Your-City-Florida', action: 'hide', clear: true}, 
				{selector: '#Your-City-Nevada', action: 'hide', clear: true}, 
				{selector: '#Your-City-North-Carolina', action: 'hide', clear: true}, 
				{selector: '#Your-City-Oregon', action: 'show', clear: true}, 
				{selector: '#Your-City-Texas', action: 'hide', clear: true}, 
				{selector: '#Your-City-Washington', action: 'hide', clear: true}
			]}, 
			{conditions: [{selector: '#Your-State', operator: 'equal', value: 'Texas'}], operator: 'and', actions: [
				{selector: '#Your-City-Arizona', action: 'hide', clear: true}, 
				{selector: '#Your-City-California', action: 'hide', clear: true}, 
				{selector: '#Your-City-Colorado', action: 'hide', clear: true}, 
				{selector: '#Your-City-Georgia', action: 'hide', clear: true}, 
				{selector: '#Your-City-Florida', action: 'hide', clear: true}, 
				{selector: '#Your-City-Nevada', action: 'hide', clear: true}, 
				{selector: '#Your-City-North-Carolina', action: 'hide', clear: true}, 
				{selector: '#Your-City-Oregon', action: 'hide', clear: true}, 
				{selector: '#Your-City-Texas', action: 'show', clear: true}, 
				{selector: '#Your-City-Washington', action: 'hide', clear: true}
			]}, 
			{conditions: [{selector: '#Your-State', operator: 'equal', value: 'Washington'}], operator: 'and', actions: [
				{selector: '#Your-City-Arizona', action: 'hide', clear: true}, 
				{selector: '#Your-City-California', action: 'hide', clear: true}, 
				{selector: '#Your-City-Colorado', action: 'hide', clear: true}, 
				{selector: '#Your-City-Georgia', action: 'hide', clear: true}, 
				{selector: '#Your-City-Florida', action: 'hide', clear: true}, 
				{selector: '#Your-City-Nevada', action: 'hide', clear: true}, 
				{selector: '#Your-City-North-Carolina', action: 'hide', clear: true}, 
				{selector: '#Your-City-Oregon', action: 'hide', clear: true}, 
				{selector: '#Your-City-Texas', action: 'hide', clear: true}, 
				{selector: '#Your-City-Washington', action: 'show', clear: true}
			]}, 
			{conditions: [{selector: '#Your-State', operator: 'equal', value: 'Other'}], operator: 'and', actions: [
				{selector: '#Your-City-Arizona', action: 'hide', clear: true}, 
				{selector: '#Your-City-California', action: 'hide', clear: true}, 
				{selector: '#Your-City-Colorado', action: 'hide', clear: true}, 
				{selector: '#Your-City-Georgia', action: 'hide', clear: true}, 
				{selector: '#Your-City-Florida', action: 'hide', clear: true}, 
				{selector: '#Your-City-Nevada', action: 'hide', clear: true}, 
				{selector: '#Your-City-North-Carolina', action: 'hide', clear: true}, 
				{selector: '#Your-City-Oregon', action: 'hide', clear: true}, 
				{selector: '#Your-City-Texas', action: 'hide', clear: true}, 
				{selector: '#Your-City-Washington', action: 'hide', clear: true}
			]}
			], 
	submitHiddenInputs: false, checkConditionsOnLoad: true});	
});

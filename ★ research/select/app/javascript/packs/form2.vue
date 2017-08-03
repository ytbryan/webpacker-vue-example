<template>
  <div id='app'>
    <h1 class="text-center">Demo of vue-form-generator</h1>
      <div class="container" id="app">
        <div class="panel panel-default">
          <div class="panel-heading">Form</div>
          <div class="panel-body">
            <vue-form-generator :schema="schema" :model="model" :options="formOptions"></vue-form-generator>
          </div>
        </div>

        <div class="panel panel-default">
          <div class="panel-heading">Model</div>
          <div class="panel-body">
            <pre v-if="model" v-html="prettyJSON(model)"></pre>
          </div>
        </div>

        <div class="panel panel-default">
          <div class="panel-heading">Schema</div>
          <div class="panel-body">
            <pre v-if="model" v-html="prettyJSON(schema)"></pre>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
import VueFormGenerator from "vue-form-generator";

export default {
  components: {
      "vue-form-generator": VueFormGenerator.component
  },
  methods: {
      prettyJSON: function(json) {
          if (json) {
              json = JSON.stringify(json, undefined, 4);
              json = json.replace(/&/g, '&').replace(/</g, '<').replace(/>/g, '>');
              return json.replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g, function(match) {
                  var cls = 'number';
                  if (/^"/.test(match)) {
                      if (/:$/.test(match)) {
                          cls = 'key';
                      } else {
                          cls = 'string';
                      }
                  } else if (/true|false/.test(match)) {
                      cls = 'boolean';
                  } else if (/null/.test(match)) {
                      cls = 'null';
                  }
                  return '<span class="' + cls + '">' + match + '</span>';
              });
          }
      }
  },

  data: {
      model: {
          id: 1,
          name: "John Doe",
          password: "J0hnD03!x4",
          age: 35,
          skills: ["Javascript", "VueJS"],
          email: "john.doe@gmail.com",
          status: true
      },
      schema: {
          fields: [{
              type: "input",
              inputType: "text",
              label: "ID",
              model: "id",
              readonly: true,
              featured: false,
              disabled: true
          }, {
              type: "input",
              inputType: "text",
              label: "Name",
              model: "name",
              readonly: false,
              featured: true,
              required: true,
              disabled: false,
              placeholder: "User's name",
              validator: VueFormGenerator.validators.string
          }, {
              type: "input",
              inputType: "password",
              label: "Password",
              model: "password",
              min: 6,
              required: true,
              hint: "Minimum 6 characters",
              validator: VueFormGenerator.validators.string
          }, {
              type: "input",
              inputType: "number",
              label: "Age",
              model: "age",
              min: 18,
              validator: VueFormGenerator.validators.number
          }, {
              type: "input",
              inputType: "email",
              label: "E-mail",
              model: "email",
              placeholder: "User's e-mail address",
              validator: VueFormGenerator.validators.email
          }, {
              type: "checklist",
              label: "Skills",
              model: "skills",
              multi: true,
              required: true,
              multiSelect: true,
              values: ["HTML5", "Javascript", "CSS3", "CoffeeScript", "AngularJS", "ReactJS", "VueJS"]
          }, {
             type: "switch",
              label: "Status",
              model: "status",
              multi: true,
              readonly: false,
              featured: false,
              disabled: false,
              default: true,
              textOn: "Active",
              textOff: "Inactive"
          }]
      },

      formOptions: {
          validateAfterLoad: true,
          validateAfterChanged: true
      }
  }
}
</script>

<style scoped>
html {
	font-family: Tahoma;
	font-size: 14px;
}

body {
	font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
	font-size: 14px;
	line-height: 1.42857143;
	color: #333;
}

pre {
	overflow: auto;
}
	pre .string { color: #885800; }
	pre .number { color: blue; }
	pre .boolean { color: magenta; }
	pre .null { color: red; }
	pre .key { color: green; }

h1 {
	text-align: center;
	font-size: 36px;
	margin-top: 20px;
	margin-bottom: 10px;
	font-weight: 500;
}

fieldset {
	border: 0;
}

.panel {
	margin-bottom: 20px;
	background-color: #fff;
	border: 1px solid transparent;
	border-radius: 4px;
	-webkit-box-shadow: 0 1px 1px rgba(0, 0, 0, .05);
	box-shadow: 0 1px 1px rgba(0, 0, 0, .05);
	border-color: #ddd;
}

.panel-heading {
	color: #333;
	background-color: #f5f5f5;
	border-color: #ddd;

	padding: 10px 15px;
	border-bottom: 1px solid transparent;
	border-top-left-radius: 3px;
	border-top-right-radius: 3px;
}

.panel-body {
	padding: 15px;
}

.field-checklist .wrapper {
	width: 100%;
}

p {
  font-size: 2em;
  text-align: center;
}
</style>

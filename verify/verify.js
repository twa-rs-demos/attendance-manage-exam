//
// Generated from RAML specification
// <https://github.com/aisensiy/raml2test>
//

var request = require('request');
var chai = require('chai');
var assert = chai.assert;
var tv4 = require('tv4');
var endpoint = process.env.ENDPOINT;

console.log(endpoint);

var employeeId, employeeURI, attendanceId, attendanceURI;

describe("Test", function () {
  this.timeout(60000);
  it("POST /employees -> 201", function (done) {
    var options = {
      url: endpoint + '/employees',
      method: 'POST',
      qs: {},
      json: {
        "name": "Jane Smith",
        "attendanceId": 2,
        "role_id": 3,
        "gender": "male"
      },
      header: {}
    };
    
    request(options, function (error, response, body) {
      assert.isNull(error);
      assert.isNotNull(response, 'Response');
      assert.equal(response.statusCode, 201, "Expect 201, got " + response.statusCode);
      var schema = "";
      if (schema != '') {
        // verify response body
        body = (body == '' ? '[empty]' : body);
        assert.doesNotThrow(function () {
          JSON.parse(body);
        }, JSON.SyntaxError, "Invalid JSON: " + body);
        var json = JSON.parse(body);
        var result = tv4.validateResult(json, schema);
        assert.lengthOf(result.missing, 0, "Missing/unresolved JSON schema $refs (" + result.missing && result.missing.join(', ') + ") in schema: " + JSON.stringify(schema, null, 4) + " Error");
        assert.ok(result.valid, "Got unexpected response body: " + result.error && result.error.message + " " + JSON.stringify(schema, null, 4) + " Error");
        
      }
      employeeURI = response.headers['location'];
      var splits = employeeURI.split("/");
      employeeId = splits[splits.length - 1];
      done();
    });
  });
  
  it("GET /employees/{employeeId} -> 200", function (done) {
    var options = {
      url: endpoint + '/employees/' + employeeId,
      method: 'GET',
      qs: {},
      body: "",
      header: {}
    };
    
    request(options, function (error, response, body) {
      assert.isNull(error);
      assert.isNotNull(response, 'Response');
      assert.equal(response.statusCode, 200, "Expect 200, got " + response.statusCode);
      var schema = {
        "$schema": "http://json-schema.org/draft-04/schema#",
        "type": "object",
        "properties": {
          "employee_url": {
            "type": "string"
          },
          "id": {
            "type": "integer"
          },
          "name": {
            "type": "string"
          },
          "attendanceId": {
            "type": "integer"
          },
          "role_id": {
            "type": "integer"
          },
          "gender": {
            "type": "integer"
          },
          "required": ["employee_url", "id", "name", "attendanceId", "gender", "role_id"]
        }
      };
      if (schema != '') {
        // verify response body
        body = (body == '' ? '[empty]' : body);
        assert.doesNotThrow(function () {
          JSON.parse(body);
        }, JSON.SyntaxError, "Invalid JSON: " + body);
        var json = JSON.parse(body);
        var result = tv4.validateResult(json, schema);
        assert.lengthOf(result.missing, 0, "Missing/unresolved JSON schema $refs (" + result.missing && result.missing.join(', ') + ") in schema: " + JSON.stringify(schema, null, 4) + " Error");
        assert.ok(result.valid, "Got unexpected response body: " + (result.error && result.error.message) + " " + JSON.stringify(schema, null, 4) + " Error");
      }
      done();
    });
  });
  
  it("GET /employees -> 200", function (done) {
    var options = {
      url: endpoint + '/employees',
      method: 'GET',
      qs: {},
      body: '',
      header: {}
    };
    
    request(options, function (error, response, body) {
      assert.isNull(error);
      assert.isNotNull(response, 'Response');
      assert.equal(response.statusCode, 200, "Expect 200, got " + response.statusCode);
      var schema = {
        "$schema": "http://json-schema.org/draft-04/schema#",
        "type": "array",
        "employees": {
          "type": "object",
          "properties": {
            "employee_url": {
              "type": "string"
            },
            "id": {
              "type": "integer"
            },
            "name": {
              "type": "string"
            },
            "attendanceId": {
              "type": "integer"
            },
            "role_id": {
              "type": "integer"
            },
            "gender": {
              "type": "integer"
            },
            "required": ["employee_url", "id", "name", "attendanceId", "gender", "role_id"]
          }
        }
      };
      if (schema != '') {
        // verify response body
        body = (body == '' ? '[empty]' : body);
        assert.doesNotThrow(function () {
          JSON.parse(body);
        }, JSON.SyntaxError, "Invalid JSON: " + body);
        var json = JSON.parse(body);
        var result = tv4.validateResult(json, schema);
        assert.lengthOf(result.missing, 0, "Missing/unresolved JSON schema $refs (" + result.missing && result.missing.join(', ') + ") in schema: " + JSON.stringify(schema, null, 4) + " Error");
        assert.ok(result.valid, "Got unexpected response body: " + (result.error && result.error.message) + " " + JSON.stringify(schema, null, 4) + " Error");
      }
      done();
    });
  });
  
  it("PUT /employees/{employeeId} -> 204", function (done) {
    var options = {
      url: endpoint + '/employees/' + employeeId,
      method: 'PUT',
      qs: {},
      body: {
        "name": "Jane Smith",
        "attendanceId": 1,
        "role_id": 2,
        "gender": "male"
      },
      header: {}
    };
    
    request(options, function (error, response, body) {
      assert.isNull(error);
      assert.isNotNull(response, 'Response');
      assert.equal(response.statusCode, 204, "Expect 204, got " + response.statusCode);
      done();
    });
  });
  
  it("DELETE /employees/{employeeId} -> 204", function (done) {
    var options = {
      url: endpoint + '/employees/' + employeeId,
      method: 'DELETE',
      qs: {},
      body: "",
      header: {}
    };
    
    request(options, function (error, response, body) {
      assert.isNull(error);
      assert.isNotNull(response, 'Response');
      assert.equal(response.statusCode, 204, "Expect 204, got " + response.statusCode);
      done();
    });
  });
  
  
  it("POST /attendances -> 201", function (done) {
    var options = {
      url: endpoint + '/attendances',
      method: 'POST',
      qs: {},
      json: {
        "employee_id": 1,
        "description": "sick leave",
        "from_date": "2017/03/02 08:00",
        "to_date": "2017/03/02 11:00",
        "present": false
      },
      header: {}
    };
    
    request(options, function (error, response, body) {
      assert.isNull(error);
      assert.isNotNull(response, 'Response');
      assert.equal(response.statusCode, 201, "Expect 201, got " + response.statusCode);
      attendanceURI = response.headers['location'];
      var splits = attendanceURI.split("/");
      attendanceId = splits[splits.length - 1];
      done();
    });
  });
  
  it("GET /attendances/{attendanceId} -> 200", function (done) {
    var options = {
      url: endpoint + '/attendances/' + attendanceId,
      method: 'GET',
      qs: {},
      body: "",
      header: {}
    };
    
    request(options, function (error, response, body) {
      assert.isNull(error);
      assert.isNotNull(response, 'Response');
      assert.equal(response.statusCode, 200, "Expect 200, got " + response.statusCode);
      var schema = {
        "$schema": "http://json-schema.org/draft-04/schema#",
        "type": "object",
        "properties": {
          "employee_id": {
            "type": "string"
          },
          "description": {
            "type": "string"
          },
          "id": {
            "type": "integer"
          },
          "present": {
            "type": "boolean"
          },
          "from_date": {
            "type": "string"
          },
          "to_date": {
            "type": "string"
          },
          "required": ["employee_id","id", "name", "department_id", "gender", "role_id"]
        }
      };
      if (schema != '') {
        // verify response body
        body = (body == '' ? '[empty]' : body);
        assert.doesNotThrow(function () {
          JSON.parse(body);
        }, JSON.SyntaxError, "Invalid JSON: " + body);
        var json = JSON.parse(body);
        var result = tv4.validateResult(json, schema);
        assert.lengthOf(result.missing, 0, "Missing/unresolved JSON schema $refs (" + result.missing && result.missing.join(', ') + ") in schema: " + JSON.stringify(schema, null, 4) + " Error");
        assert.ok(result.valid, "Got unexpected response body: " + (result.error && result.error.message) + " " + JSON.stringify(schema, null, 4) + " Error");
      }
      done();
    });
  });
  
  it("GET /attendances -> 200", function (done) {
    var options = {
      url: endpoint + '/attendances',
      method: 'GET',
      qs: {},
      body: '',
      header: {}
    };
    
    request(options, function (error, response, body) {
      assert.isNull(error);
      assert.isNotNull(response, 'Response');
      assert.equal(response.statusCode, 200, "Expect 200, got " + response.statusCode);
      var schema = {
        "$schema": "http://json-schema.org/draft-04/schema#",
        "type": "array",
        "attendances": {
          "type": "object",
          "properties": {
            "id": {
              "type": "integer"
            },
            "employee_id": {
              "type": "integer"
            },
            "description": {
              "type": "string"
            },
            "present": {
              "type": "boolean"
            },
            "from_date": {
              "type": "string"
            },
            "to_date": {
              "type": "string"
            },
            "required": ["employee_id", "description", "id", "present", "from_date", "to_date"]
          }
        }
      };
      if (schema != '') {
        // verify response body
        body = (body == '' ? '[empty]' : body);
        assert.doesNotThrow(function () {
          JSON.parse(body);
        }, JSON.SyntaxError, "Invalid JSON: " + body);
        var json = JSON.parse(body);
        var result = tv4.validateResult(json, schema);
        assert.lengthOf(result.missing, 0, "Missing/unresolved JSON schema $refs (" + result.missing && result.missing.join(', ') + ") in schema: " + JSON.stringify(schema, null, 4) + " Error");
        assert.ok(result.valid, "Got unexpected response body: " + (result.error && result.error.message) + " " + JSON.stringify(schema, null, 4) + " Error");
      }
      done();
    });
  });
  
  it("PUT /attendances/{attendanceId} -> 204", function (done) {
    var options = {
      url: endpoint + '/attendances/' + attendanceId,
      method: 'PUT',
      qs: {},
      body: {
        "employee_id": "1",
        "name": "Jane Smith",
        "present": true,
        "from_date": "2017/03/02 08:00",
        "to_date": "2017/03/02 11:00"
      },
      header: {}
    };
    
    request(options, function (error, response, body) {
      assert.isNull(error);
      assert.isNotNull(response, 'Response');
      assert.equal(response.statusCode, 204, "Expect 204, got " + response.statusCode);
      done();
    });
  });
  
  it("DELETE /attendances/{attendanceId} -> 204", function (done) {
    var options = {
      url: endpoint + '/attendances/' + attendanceId,
      method: 'DELETE',
      qs: {},
      body: "",
      header: {}
    };
    
    request(options, function (error, response, body) {
      assert.isNull(error);
      assert.isNotNull(response, 'Response');
      assert.equal(response.statusCode, 204, "Expect 204, got " + response.statusCode);
      done();
    });
  });
  
});
function strip(x: string | number) {
  if (typeof x === 'number') {
    return x.toFixed(2); //TS understands that return is a number
  }
  return x.trim(); //TS understands that return is a string
}

class MyResponse {
  header = 'response header';
  result = 'response result';
}

class MyError {
  header = 'error header';
  message = 'error result';
}

function handle(res: MyResponse | MyError) {
  if (res instanceof MyResponse) {
    return {
      info: res.header + res.result,
    };
  } else {
    return {
      info: res.header + res.message,
    };
  }
}

// ---

type AlertType = 'success' | 'danger' | 'warning';

function setAlertType(type: AlertType) {
  //
}

setAlertType('success');
setAlertType('warning');
setAlertType('default'); //not valid value as it wasn't assigned ^

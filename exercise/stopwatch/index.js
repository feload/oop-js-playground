function Stopwatch () {
  let start = 0;
  let finish = 0;
  let running = false;

  Object.defineProperty(this, 'duration', {
    get: function () {
      if(running) throw new Error("Stopwatch is still running.");
      return (finish - start) / 1000;
    }
  });

  Object.defineProperty(this, 'isRunning', {
    get: function () {
      return running;
    },
    set: function (value){
      running = value;
    }
  });

  Object.defineProperty(this, 'startTime', {
    get: function () {
      return start;
    },
    set: function (value){
      start = value;
    }
  });

  Object.defineProperty(this, 'finishTime', {
    get: function () {
      return finish;
    },
    set: function (value){
      finish = value;
    }
  });
};

Stopwatch.prototype.start = function () {
  if(this.isRunning) throw new Error("Stopwatch already started.");

  this.isRunning = true;
  this.startTime = Date.now();
}

Stopwatch.prototype.stop = function () {
  if(this.isRunning == false) throw new Error("Stopwatch already stopped.");

  this.isRunning = false;
  this.finishTime = Date.now();
}


const sw = new Stopwatch();
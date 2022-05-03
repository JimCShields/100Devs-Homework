function StopWatch(){
    let startTime, stopTime, running, duration = 0;

    this.start = function(){
        if (running){
            throw new Error('Stopwatch is already running!');
        }
        running = true;

        startTime = new Date()
    }

    this.stop = function(){
        if(!running)
            throw new Error("Stopwatch is already stopped!");
        
        running = false;
        stopTime = new Date()
        const seconds = (stopTime.getTime() - startTime.getTime())/1000;
        duration+=seconds;

    }
    Object.defineProperty(this, 'duration', {
        get: function(){return `Your Time in seconds: ${duration}`;}
    });
    

    this.reset = function(){
        starTime = null
        stopTime = null
        running = false
        duration = 0
    }
}
// Generated by typings
// Source: https://raw.githubusercontent.com/DefinitelyTyped/DefinitelyTyped/56295f5058cac7ae458540423c50ac2dcf9fc711/chokidar/chokidar.d.ts
// Type definitions for chokidar 1.4.3
// Project: https://github.com/paulmillr/chokidar
// Definitions by: Stefan Steinhart <https://github.com/reppners/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped


declare module "fs"
{
    interface FSWatcher
    {
        add(fileDirOrGlob:string):void;
        add(filesDirsOrGlobs:Array<string>):void;
        unwatch(fileDirOrGlob:string):void;
        unwatch(filesDirsOrGlobs:Array<string>):void;
        getWatched():any;
    }
}

declare module "chokidar"
{
    interface WatchOptions
    {
        persistent?:boolean;
        ignored?:any;
        ignoreInitial?:boolean;
        followSymlinks?:boolean;
        cwd?:string;
        usePolling?:boolean;
        useFsEvents?:boolean;
        alwaysStat?:boolean;
        depth?:number;
        interval?:number;
        binaryInterval?:number;
        ignorePermissionErrors?:boolean;
        atomic?:boolean;
        awaitWriteFinish?:any;
    }

    import fs = require("fs");

    function watch(fileDirOrGlob:string, options?:WatchOptions):fs.FSWatcher;
    function watch(filesDirsOrGlobs:Array<string>, options?:WatchOptions):fs.FSWatcher;
}
angular-gridster2
==============

Use angular-gridster2 with angular#1.4.x. angular-gridster2@1.x is developed with angular#1.6.6 as dependency.

Major issues for using angular-gridster2 with angular#1.4.x are Component helper, which is added in angular#1.5 and property bindings issue.

Angular-Gridster2 has component() method used in its script, for this just install angular-component and include component script right after angular.js to ensure component menthod is available. Also bindings in gridster.js are changed ('<' is changed to '='') to work with angular#1.4.x.

(new) - additional setup changes

# Angularjs 1.x original version [link](https://github.com/tiberiuzuld/angular-gridster2/tree/1.x)
# Angular-Component 1.3+ [link](https://toddmotto.com/exploring-the-angular-1-5-component-method/)

#### Install

```bash
  npm install angular-component --save  (new)
  npm install angular-gridster2@1.x --save
 ```

## Manual Installation (new)
Note: you must include this script straight after angular.js and before your application code to ensure the component() method has been added to the angular.module global.

```
<body>
  <!-- html above -->
  <script src="angular-1.x.js"></script>
  <script src="dist/angular-component.js"></script>
  <script src="app.js"></script>
</body>

```

Then import the following in your HTML:

```html
  <link rel="stylesheet" href="node_modules/angular-gridster2/dist/gridster.css"/>
  <script src="node_modules/angular-gridster2/dist/gridster.js"></script>
```

Include 'angular-gridster2' as a dependency of your module like this:
```JavaScript
  var module = angular.module("app", ["angular-gridster2"]);
```

## Usage

Default usage:

```html
<gridster options="vm.options">
  <gridster-item item="item" ng-repeat="item in vm.dashboard"></gridster-item>
</gridster>
```
Initialize a simple dashboard:
```JavaScript
var vm = this;

vm.options = {
   gridType: 'fit',
   itemChangeCallback: itemChange,
   margin: 10,
   outerMargin: true,
   draggable: {
     enabled: true,
     stop: eventStop
   },
   resizable: {
     enabled: true,
     stop: eventStop
   }
 };

vm.dashboard = [
  {cols: 2, rows: 1, y: 0, x: 0},
  {cols: 2, rows: 2, y: 0, x: 2}
];
```

##### Note: The gridster will take all the available space from the parent. It will not size depending on content. The parent of the component needs to have a size.

##### Default Grid Options:
```javascript

var GridsterConfigService = {
  gridType: 'fit', // 'fit' will fit the items in the container without scroll;
  // 'scrollVertical' will fit on width and height of the items will be the same as the width
  // 'scrollHorizontal' will fit on height and width of the items will be the same as the height
  // 'fixed' will set the rows and columns dimensions based on fixedColWidth and fixedRowHeight options
  // 'verticalFixed' will set the rows to fixedRowHeight and columns width will fit the space available
  // 'horizontalFixed' will set the columns to fixedColWidth and rows height will fit the space available
  fixedColWidth: 250, // fixed col width for gridType: 'fixed'
  fixedRowHeight: 250, // fixed row height for gridType: 'fixed'
  keepFixedHeightInMobile: false, // keep the height from fixed gridType in mobile layout
  keepFixedWidthInMobile: false, // keep the width from fixed gridType in mobile layout
  compactType: 'none', // compact items: 'none' | 'compactUp' | 'compactLeft' | 'compactUp&Left' | 'compactLeft&Up'
  mobileBreakpoint: 640, // if the screen is not wider that this, remove the grid layout and stack the items
  minCols: 1, // minimum amount of columns in the grid
  maxCols: 100, // maximum amount of columns in the grid
  minRows: 1, // minimum amount of rows in the grid
  maxRows: 100, // maximum amount of rows in the grid
  defaultItemCols: 1, // default width of an item in columns
  defaultItemRows: 1, // default height of an item in rows
  maxItemCols: 50, // max item number of cols
  maxItemRows: 50, // max item number of rows
  minItemCols: 1, // min item number of columns
  minItemRows: 1, // min item number of rows
  minItemArea: 1, // min item area: cols * rows
  maxItemArea: 2500, // max item area: cols * rows
  margin: 10,  // margin between grid items
  outerMargin: true,  // if margins will apply to the sides of the container
  scrollSensitivity: 10,  // margin of the dashboard where to start scrolling
  scrollSpeed: 20,  // how much to scroll each mouse move when in the scrollSensitivity zone
  initCallback: undefined, // callback to call after grid has initialized. Arguments: gridsterComponent
  itemChangeCallback: undefined,  // callback to call for each item when is changes x, y, rows, cols.
  // Arguments: gridsterItem, gridsterItemComponent
  itemResizeCallback: undefined,  // callback to call for each item when width/height changes.
  // Arguments: gridsterItem, gridsterItemComponent
  itemInitCallback: undefined,  // callback to call for each item when is initialized.
  // Arguments: gridsterItem, gridsterItemComponent
  itemRemovedCallback: undefined,  // callback to call for each item when is initialized.
  // Arguments: gridsterItem, gridsterItemComponent
  enableEmptyCellClick: false, // enable empty cell click events
  enableEmptyCellContextMenu: false, // enable empty cell context menu (right click) events
  enableEmptyCellDrop: false, // enable empty cell drop events
  enableEmptyCellDrag: false, // enable empty cell drag events
  emptyCellClickCallback: undefined, // empty cell click callback
  emptyCellContextMenuCallback: undefined, // empty cell context menu (right click) callback
  emptyCellDropCallback: undefined, // empty cell drag drop callback. HTML5 Drag & Drop
  emptyCellDragCallback: undefined, // empty cell drag and create item like excel cell selection
  emptyCellDragMaxCols: 50, // limit empty cell drag max cols
  emptyCellDragMaxRows: 50, // limit empty cell drag max rows
  // Arguments: event, gridsterItem{x, y, rows: defaultItemRows, cols: defaultItemCols}
  draggable: {
    delayStart: 0, // milliseconds to delay the start of resize, useful for touch interaction
    enabled: false, // enable/disable draggable items
    ignoreContentClass: 'gridster-item-content', // default content class to ignore the drag event from
    ignoreContent: false, // if true drag will start only from elements from `dragHandleClass`
    dragHandleClass: 'drag-handler', // drag event only from this class. If `ignoreContent` is true.
    stop: undefined, // callback when dragging an item stops.  Accepts Promise return to cancel/approve drag.
    start: undefined // callback when dragging an item starts.
    // Arguments: item, gridsterItem, event
  },
  resizable: {
    delayStart: 0, // milliseconds to delay the start of resize, useful for touch interaction
    enabled: false, // enable/disable resizable items
    handles: {
      s: true,
      e: true,
      n: true,
      w: true,
      se: true,
      ne: true,
      sw: true,
      nw: true
    }, // resizable edges of an item
    stop: undefined, // callback when resizing an item stops. Accepts Promise return to cancel/approve resize.
    start: undefined // callback when resizing an item starts.
    // Arguments: item, gridsterItem, event
  },
  swap: true, // allow items to switch position if drop on top of another
  pushItems: false, // push items when resizing and dragging
  disablePushOnDrag: false, // disable push on drag
  disablePushOnResize: false, // disable push on resize
  pushDirections: {north: true, east: true, south: true, west: true}, // control the directions items are pushed
  pushResizeItems: false, // on resize of item will shrink adjacent items
  displayGrid: 'onDrag&Resize', // display background grid of rows and columns
  disableWindowResize: false // disable the window on resize listener. This will stop grid to recalculate on window resize.
};
```

##### Gridster options api
```typescript
    this.options.api.resize(); // call if size of container changes. Grid will auto resize on window resize.
    this.options.api.optionsChanged(); // call on change of options after initialization
    this.options.api.getNextPossiblePosition(item: GridsterItem); // call to get a viable position for item. Returns true if found
```

##### Gridster item options:
```typescript
export interface GridsterItem {
  x?: number; // x position if missing will auto position
  y?: number; // y position if missing will auto position
  rows?: number; // number of rows if missing will use grid option defaultItemRows
  cols?: number; // number of columns if missing will use grid option defaultItemCols
  initCallback?: Function; // initialization callback. Argument: GridsterItem, GridsterItemComponent
  dragEnabled?: boolean; // override grid option draggable.enabled
  resizeEnabled?: boolean; // override grid option resizable.enabled
  maxItemRows?: number; // override grid option maxItemRows
  minItemRows?: number; // override grid option minItemRows
  maxItemCols?: number; // override grid option maxItemCols
  minItemCols?: number; // override grid option minItemCols
  minItemArea?: number; //  override grid option minItemArea
  maxItemArea?: number; //  override grid option maxItemArea
}
```

##### Gridster Item Events 

  broadcasts ```'gridster-item-change'``` // triggered when a item cols,rows, x ,y changed
  
  broadcasts ```'gridster-item-resize'``` // triggered when a item width/height changed

Note: When a item changes cols/rows both events get triggered

#### Via Constant
You can also override the default configuration by modifying the ```gridsterConfig``` constant

```js
angular.module('app').run(['gridsterConfig', function(GridsterConfig) {
	 GridsterConfig.gridType = 'fit';
}]);
```

### Contributing

#### Install dependencies
```bash
 npm install
```

Please respect the formatting in .editorconfig and .eslintrc

#### Gulp task
```bash
 gulp serve
```

##### angular-gridster2 inspired by [angular-gridster](https://github.com/ManifestWebDesign/angular-gridster) 

### License
 The MIT License
 
 Copyright (c) 2017 Tiberiu Zuld

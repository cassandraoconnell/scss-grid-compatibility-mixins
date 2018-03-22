# SCSS mixins for CSS grid compatibility across the board (including IE 10, 11, and Edge)

### CSS grid layout is great, but IE takes different syntax to make it work. (Edge is better, but still takes some finagling.) Here are some mixins that let you use the [universal "correct" syntax](https://developer.mozilla.org/en-US/docs/Web/CSS/grid) that works everywhere else.

### Grid Properties Supported:
- display-grid: `@include display-grid;`
- grid-area: `@include grid-area($start-row, $start-column, $end-row, $end-column);`
- grid-column: `@include grid-column($start-column, $end-column);`
- grid-column-end: `@include grid-column-end($end-column, $start-column);`
- grid-column-start: `@include grid-column-start($start-column);`
- grid-row: `@include grid-row($start-row, $end-row);`
- grid-row-end: `@include grid-row-end($end-row, $start-row);`
- grid-row-start: `@include grid-row-start($start-row);`
- grid-template: `@include grid-template($template-columns, $template-rows);`
- grid-template-columns: `@include grid-template-columns($value);`
- grid-template-rows: `@include grid-template-rows($value);`


### Grid Properties Not Supported (...yet):
- `grid-auto-rows` and `grid-auto-flow` (IE doesn't have comparable syntax/support. Explicitly position all grid elements instead.)
- `grid-column-gap`, `grid-row-gap`, and `grid-gap` (IE doesn't have comparable syntax/support. Create specific columns for gaps, or use margin/padding.)
- Named rows/columns (haven't implemented yet), and consequently `grid` and `grid-template-areas`.
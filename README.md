# Webwonders Table Editor for Umbraco

A modern, flexible table editor for Umbraco that gives editors fine-grained control over table structure and semantics, while providing developers with a clean and extensible rendering experience.

Built and maintained by **Webwonders**, Umbraco Platinum Partner.

## Features

### For editors
- Intuitive table editor in the Umbraco backoffice
- Add, remove and reorder rows and columns
- Per-row settings:
  - Mark a row as a header row
  - Underline rows
- Global table settings:
  - Column headers
  - Row headers
  - Highlight empty cells

### For developers
- Strongly-typed table model
- Clean HTML semantics (`<thead>`, `<th scope>`, etc.)
- Simple Razor rendering API
- Default frontend rendering included
- Easy view-based overrides (no JavaScript required)



## Installation

### NuGet
```bash
dotnet add package Webwonders.Umbraco.TableEditor
```

Or install via the **NuGet Package Manager**.


## Usage

### 1. Create the data type
Create a new **Webwonders Table Editor** data type in the Umbraco backoffice and add it to your document types


### 2. Rendering in Razor (simple)
The easiest way to render a table is using the provided HtmlHelper extension:

```cshtml
@await Html.RenderTableAsync(Model, "tableEditorAlias")
```
This will:
- read the table value from the current content item
- render it using the default theme

### 3. Rendering with an explicit theme

```cshtml
@await Html.RenderTableAsync(Model, "tableEditorAlias", theme: "default")
```
Themes map to Razor views located at:
```text
/Views/Partials/Tables/{theme}.cshtml
```


## Default rendering

The package ships with a default table rendering view:

```text
Views/Partials/Tables/default.cshtml
```

This view:
- outputs semantic HTML tables
- respects all table and row settings
- applies minimal CSS classes for easy styling

### Default CSS classes
```css
.ww-table
.ww-table__row
.ww-table__row--header
.ww-table__row--underlined
.ww-table__col-header
.ww-table__row-header
.ww-table__cell
```

No styling framework is enforced — you are free to style as you see fit.

## Creating your own table view

If you prefer full control over the HTML output, you can render the table with your own partial view by accessing the strongly-typed model and writing your own Razor markup.

To see how this is done, click here to view the [source code of the default view](https://github.com/WebwondersNL/Webwonders.Umbraco.TableEditor/blob/main/src/Views/Partials/Tables/default.cshtml)

## Supported versions

- **Umbraco CMS:** 17+
- **.NET:** 10+

## Development notes
- In some environments, adding new Razor views may require an application restart.


## Issues & contributions

- Issues: https://github.com/WebwondersNL/Webwonders.TableEditor/issues

- Pull requests are welcome.

## License

MIT License  
© Webwonders

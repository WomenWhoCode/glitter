# WWCode Glitter v0.1.0

**Official Styles variables for Women Who Code**

## About
This Repo includes the holy grail of Women Who Code style variables so you can have Women Who Code "glitter" on your website.

## Requirements
Since this repo is an scss file of variables, your app will need to support [sass](http://sass-lang.com/install). Check out [their docs to check out how to install sass in your app](http://sass-lang.com/install).

## Installation

**If you use CSS**

Add this tag in the [head tag](https://www.w3schools.com/tags/tag_head.asp) of your app:
```
<link rel="stylesheet" type="text/css" href="https://raw.githubusercontent.com/WomenWhoCode/glitter/4/wwcode.css?token=put_your_github_AIP_token_here_with_no_quotes">
```
[Learn how to get a github API token here](https://github.com/blog/1509-personal-api-tokens)


**If you use SCSS**

Import the scss file into your app!
First, navigate to the folder you'd like to host the Women Who Code styles in.

```
cd /url/to/your/scss/folder
```
 
Then, import the files:
```
curl -o wwcode.scss https://raw.githubusercontent.com/WomenWhoCode/glitter/4/wwcode.scss?token=put_your_github_AIP_token_here_with_no_quotes
```
[Learn how to get a github API token here](https://github.com/blog/1509-personal-api-tokens)

Then, import the styles into your main scss file:

```
@import "wwcode";
```

## Guide
If instalation is sucessful & there are no overriding styles in your app, you should be able to copy and paste the following code into your app:

**Form Styles**
1. [Links](#links)
2. [Buttons](#buttons)
3. [Checkboxes](#checkboxes)
4. [Radio Buttons](#radios)
5. [Uploaders](#uploaders)
6. [Textareas](#textareas)
7. [Inputs](#inputs)
8. [Tags](#tags)
9. [Selects](#selects)
10. [Errors](#errors)
11. [Alerts](#alerts)

---

### Links

#### Link
<img src="https://s3-us-west-2.amazonaws.com/wwcodefroala/uploads%2F1510606387739-Screen+Shot+2017-11-13+at+12.50.31+PM.png" width="50">

```
<a>Link</a>
```

#### Link with Underline
<img src="https://s3-us-west-2.amazonaws.com/wwcodefroala/uploads%2F1510606574130-Screen+Shot+2017-11-13+at+12.55.26+PM.png" width="50">

```
<a class="underline">Link</a>
```


### Buttons
<img src="https://s3-us-west-2.amazonaws.com/wwcodefroala/uploads%2F1510597933885-Screen+Shot+2017-11-13+at+10.31.58+AM.png" width="150">

```
<button> Yay! </button>
```

### Checkboxes

#### Unselected
<img src="https://s3-us-west-2.amazonaws.com/wwcodefroala/uploads%2F1510610716958-Screen+Shot+2017-11-13+at+2.03.29+PM.png" width="200">

```
<div class="checkbox"> 
  <span class="square"></span>
  <span>This is a Checkbox</span>
  <input type="checkbox" />
</div>
```

#### Selected
<img src="https://s3-us-west-2.amazonaws.com/wwcodefroala/uploads%2F1510610723036-Screen+Shot+2017-11-13+at+2.03.48+PM.png" width="200">

```
<div class="checkbox"> 
  <span class="square selected"></span>
  <span>This is a Checkbox</span>
  <input type="checkbox" />
</div>
```

### Radios

#### Unselected
<img src="https://s3-us-west-2.amazonaws.com/wwcodefroala/uploads%2F1510611563892-Screen+Shot+2017-11-13+at+2.18.51+PM.png" width="200">

```
<div class="radio"> 
  <span class="square"></span>
  <span>This is a Radio Button</span>
  <input type="radio" />
</div>
```

#### Selected
<img src="https://s3-us-west-2.amazonaws.com/wwcodefroala/uploads%2F1510611571710-Screen+Shot+2017-11-13+at+2.19.05+PM.png" width="200">

```
<div class="radio"> 
  <span class="square selected"></span>
  <span>This is a Radio Button</span>
  <input type="radio" />
</div>
```

### Uploaders
<img src="https://s3-us-west-2.amazonaws.com/wwcodefroala/uploads%2F1510603096222-Screen+Shot+2017-11-13+at+11.58.01+AM.png" width="250">

```
<div id="filepicker_url"><p>Click to Upload</p></div>
```
### Textareas
<img src="https://s3-us-west-2.amazonaws.com/wwcodefroala/uploads%2F1510605847755-Screen+Shot+2017-11-13+at+12.43.57+PM.png" width=600>

```
<textarea>General Textarea</textarea>
```

### Inputs

![input img](https://s3-us-west-2.amazonaws.com/wwcodefroala/uploads%2F1510597768760-Screen+Shot+2017-11-13+at+10.28.23+AM.png)

```
<label for="">Title</label>
<input type="" name="" id="" autofocus="autofocus" required="" placeholder="this is an input">
```

### Tags
<img src="https://s3-us-west-2.amazonaws.com/wwcodefroala/uploads%2F1510605696554-Screen+Shot+2017-11-13+at+12.39.09+PM.png" width="100">

```
<div class="tag">
  <span>tag</span>
  <span class="delete">+</span>
</div>
```

### Selects
<img src="https://s3-us-west-2.amazonaws.com/wwcodefroala/uploads%2F1510602799890-Screen+Shot+2017-11-13+at+11.53.00+AM.png" width="250">

```
<select>
  <option>Cool Select</option>
</select>
```

### Errors

#### Inline_errors
<img src="https://s3-us-west-2.amazonaws.com/wwcodefroala/uploads%2F1510604096279-Screen+Shot+2017-11-13+at+12.14.37+PM.png" width="300">

```
<label for="">Title</label>
<input class="error" type="" name="" id="" autofocus="autofocus" required="" placeholder="This is a general input with error">
<div class="error-text">
  <span>This is inline error text.</span>
</div>
```


### Alerts

#### Nice Alert Banner
<img src="https://s3-us-west-2.amazonaws.com/wwcodefroala/uploads%2F1510605336350-nice-alert.jpg" width="600">

```
<div class="alert">
  <span>Nice Alert!</span>
  <span class="delete">+</span>
</div>
```
#### Error Alert Banner
<img src="https://s3-us-west-2.amazonaws.com/wwcodefroala/uploads%2F1510604996148-Screen+Shot+2017-11-13+at+12.29.41+PM.png" width="600">

```
<div class="alert alert-error">
  <span>Error Alert!</span>
  <span class="delete">+</span>
</div>
```
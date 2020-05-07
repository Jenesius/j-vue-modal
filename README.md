# J-Vue-Modal

### install

`$ npm install j-vue-mdoal`

### config

```javascript
import ModalTest1 from "./components/ModalTest1";
import ModalTest2 from "./components/ModalTest2";

const modals = {
    "_ModalTest1": ModalTest1,
    "NameForFunction": ModalTest2
};

Vue.use(modal, {
    modals: modals,
    css:{
        class: {
            main: "modal-main-1",
            back: "modal-back-1",
        },
        animation: "zoom"
    }
});
```

### setConfig

> modals - object of Modal components.

Name of Field ("_ModalTest1", "NameForFunction")  use for activate modal.

> css - set style of Modal

> css > main - set style for div that will be containe your components
> css > back - set style for background div.

For example: you should add this css class in your object 

```css
.modal-main-1{
  display: flex;
  align-items: center;
  justify-content: center;

  position: fixed;
  height: 100%;
  width: 100%;

  top: 0;
  left: 0;
  z-index: 9999;


}
.modal-back-1{
  position: absolute;
  height: 100%;
  width: 100%;
  z-index: -1;
  background: rgba(62, 62, 62, 0.5);
}
```


#### Animation

> animations - set animations name of transition

```css
.fade-enter .modal-a {
  transform: translateY(100px);
}
```

```javascript
 css: {
	class: {
		main: "test-2-main",
		back: ""
   },
   animation: "fade"
},
```

### Method

#### open

`this.$modal.open(NameComponent, ParamsForComponent, Config)`

**NameComponent** is name of filed if modals object.

**ParamsForComponen**t is object of value for youe component.
You can get params by `this.$modal.params`

**Config** is config object of onlye this modal iteration


*return key of modal*

#### close

`this.$modal.close(NameComponent = undefined)`

Close Modal. if **NameComponent** is not undefined, function will close modal only when **NameComponent** === last name of opened component.


#### update
`this.$modal.update(params)`

Update params for your modal

### Property

#### key

When you open some component this value is increment.

#### params

Params for your modal

#### name

Name of current Modal






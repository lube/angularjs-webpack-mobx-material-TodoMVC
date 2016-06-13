import angular from 'angular'

// Template
import dblClickEditTemplate from 'html!./dblclick-edit.template.html'

// Styles 
import './dblclick-edit.styles.css'

// own stuff
import DblClickEditController from './dblclick-edit.controller.js'

export default angular.module('dblClickEditComponent', []).component('dblClickEdit', {
    template: dblClickEditTemplate,
    controller: DblClickEditController,
    bindings: {
        text: '<',
        onChange: '&'
    }
}).name

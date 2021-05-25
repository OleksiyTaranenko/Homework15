class Calculator {
    constructor() {
        
    }

    putItems(items) {
        let fieldValue = document.getElementById('formInput').entryField.value;
        document.getElementById('formInput').entryField.value = document.getElementById('formInput').entryField.value + items;
        
        return fieldValue;
    }    
    
    cleanAllField() {
        let cleanField = document.form.entryField.value;
        document.form.entryField.value = '';

        return cleanField;
    }
    
    deleteSymbols() {
        let field = document.form.entryField.value;
        document.form.entryField.value = field.substring(0, field.length-1);

        return field;
    }
    
    equate() {
        let field = document.form.entryField.value;
    
        if(field) {
            document.form.entryField.value = eval(field);
        };

        return field;
    }
}


let calculator = new Calculator();

calculator.putItems();
calculator.cleanAllField();
calculator.deleteSymbols();
calculator.equate();
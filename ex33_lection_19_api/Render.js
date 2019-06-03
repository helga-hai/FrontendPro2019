
class TagValidator {
    static validate(templateType, tag) {
        if (!['list', 'dropdown', 'form'].includes(templateType)){
            return false;
        }

        switch (templateType) {
            case 'list': 
                return this._getList.includes(tag);
            case 'dropdown': 
                return this._getDropdown.includes(tag);
            case 'form': 
                return this._getForm.includes(tag);
        }
    }

    static get _getList() {
        return ['ul', 'ol'];
    }

    static get _getDropdown() {
        return ['select'];
    }

    static get _getForm() {
        return ['input', 'textarea', 'button'];
    }
}

class RenderSerice extends TagValidator {
    static _fragment(template) {
        let fragment = document.createElement('div');
        fragment.innerHTML = template;

        return fragment;
    }

    static _combineClassNames(array) {
        if (Array.isArray(array)) {
            return array.join(' ');
        }

        return Array.prototype.join.call(arguments, ' ');
    }
}

class Render extends RenderSerice {
    static list(list = [], {target = null, type = 'ul', classNames = {container: [], item: [], lastItem: [], additional: []}}) {
        const VALIDATION_TYPE = 'list';
        if (!list || !list.length) return ``;
        if (!this.validate(VALIDATION_TYPE, type)) return ``;

        let containerClass = this._combineClassNames(classNames.container);
        let finalClassNames = this._combineClassNames(
            this._combineClassNames(classNames.item), 
            this._combineClassNames(classNames.additional)
        );
        let lastItemClass = this._combineClassNames(classNames.lastItem);

        let template = 
            `<${type} class="${containerClass}">
                ${list.map((li, pos, source) => {
                    let liClassName = pos === source.length - 1 ? 
                        this._combineClassNames(finalClassNames, lastItemClass) : 
                        finalClassNames;
                        
                    return `<li class="${liClassName}">
                                ${li}
                            </li>`
                }).join('')}
            </${type}>`;

        target !== null && target.append(this._fragment(template));   
    }
    static dropdown(){}
    static form(){
        // input type text, checkbox, button
    }
    static table(arr,{target = null}){
        let template = `<table>
            ${arr.map(item=>`<tr>${
                    Object.values(item)
                        .map(val=>`<td>${val}</td>`).join('')
                    }
                </tr>`).join('')}
            </table>`
           
        target !== null && target.append(this._fragment(template)); 

    }
}

export { Render }
/*window.onload = function() {
    let list = [1, 2, 3];
    let opt =  {
        target: document.body,
        type: 'ul',
        classNames: {
            container: ['list-container', 'active', 'success'],
            item: ['list-item', 'success', 'foo'],
            additional: ['add-class'],
            lastItem: ['last-item']
        }
    };
 
    Render.list(arr, param)    
} */
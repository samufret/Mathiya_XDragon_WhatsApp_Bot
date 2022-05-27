/* Copyright (C) 2022 Sohan-Matheesha
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
https://github.com/Mathiya578/Mathiya_XDragon_WhatsApp_Bot/new/main
*/

'use strict';

class Base {
    constructor(client) {
        Object.defineProperty(this, 'client', { value: client });
    }

    _clone() {
        return Object.assign(Object.create(this), this);
    }
    
    _patch(data) { return data; }
}

module.exports = Base

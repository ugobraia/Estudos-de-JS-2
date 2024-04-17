export {group, a, b, c, d}

export default exportDefault

function a() {}
function b() {}
function c() {}
function d() {}

function group(){
    console.log('Export nomeado não-inline (agrupado)')
}

function exportDefault(){
    console.log('Export default não-inline')
}
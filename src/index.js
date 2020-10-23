module.exports = function check(str, bracketsConfig) {
    let stack = [];

    for (let i = 0; i < str.length; i++) {
        for (let j = 0; j < bracketsConfig.length; j++) {
            console.log(str[i]);

            if (str[i] === bracketsConfig[j][1]) {
                if (!stack.length) {
                    if (str[i] === bracketsConfig[j][0]) {
                        stack.push(j);
                        console.log('push');
                        break;
                    }
                    return false;
                }

                if (bracketsConfig[stack[stack.length - 1]][1] === str[i]) {
                    stack.pop();
                    console.log('pop');
                    break;
                } else {
                    if (str[i] === bracketsConfig[j][0]) {
                        stack.push(j);
                        console.log('push');
                        break;
                    }
                    return false;
                }
            }


            if (str[i] === bracketsConfig[j][0]) {
                stack.push(j);
                console.log('push');
                break;
            }
        }

        console.log(stack);
    }

    if (stack.length) {
        return false;
    }

    return true;
};

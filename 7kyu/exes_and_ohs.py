# DESCRIPTION:
# Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

# Examples input/output:

# XO("ooxx") => true
# XO("xooxx") => false
# XO("ooxXm") => true
# XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
# XO("zzoo") => false


def xo(s):
    os = 0
    xs = 0
    for el in s:
        if el.lower() == 'o':
            os += 1
        elif el.lower() == 'x':
            xs += 1
    print(os, xs)
    return True if os == xs else False

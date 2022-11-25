# DESCRIPTION:
# Complete the solution so that the function will break up camel casing, using a space between words.

# Example
# "camelCasing"  =>  "camel Casing"
# "identifier"   =>  "identifier"
# ""             =>  ""

def solution(s):
    answer =''
    if s.islower():
        return s
    else:
        for letter in s:
            if letter.islower():
                answer += letter
            else:
                answer += ' ' + letter
    return answer
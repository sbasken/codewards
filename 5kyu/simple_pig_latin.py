# DESCRIPTION:
# Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

# Examples
# pig_it('Pig latin is cool') # igPay atinlay siay oolcay
# pig_it('Hello world !')     # elloHay orldway !


def pig_it(text):
    print(text)
    split_text = text.split()
    answer =""
    for word in split_text:
        if word == '!' or word == '?' :
            answer += word
        else:
            answer += word[1:] + word[0] + 'ay '
    print(answer[:-1])
    return answer[:-1] if answer[-1] == " " else answer


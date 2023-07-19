# Triangle of Multiples (Easy One)

# See the following triangle:

# ____________________________________
#  1                                      
#  2   4   2                              
#  3   6   9   6   3                      
#  4   8   12  16  12  8   4             
#  5   10  15  20  25  20  15  10  5   
#  ___________________________________
 
# The total sum of the numbers in the triangle, up to the 5th line included, is 225, part of it, 144, corresponds to the total sum of the even terms and 81 to the total sum of the odd terms.

# Create a function that may output an array with three results for each value of n.

# triang_mult(n)  ----> [total_sum, total_even_sum, total_odd_sum]
# Our example will be:

# triang_mult(5) ----> [225, 144, 81]
# Features of the random tests:

# number of tests = 100
# 49 < n < 5000
# Enjoy it! This kata will be translated in another languages soon

def mult_triangle(n):
    print('n', n)
    total_sum = 0
    total_even_sum = 0
    total_odd_sum = 0
    for x in range(n):
        num_list = [(x+1)*(i+1) for i in range(x+1)]
        num_list += num_list[::-1][1:]
        for num in num_list:
            total_sum += num
            if num % 2 == 0:
                total_even_sum += num
            else:
                total_odd_sum += num
    return [total_sum, total_even_sum, total_odd_sum]
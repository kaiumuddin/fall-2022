#include <bits/stdc++.h>
using namespace std;

int main()
{
    int customer_size;
    cin >> customer_size;

    int customer_no[customer_size];
    int riat[customer_size];
    int rst[customer_size];
    int iat[customer_size];
    int at[customer_size];

    cout << "CN\tRIAT\tIAT\tAT\tRST" << endl;

    for (int i = 0; i < customer_size; i++)
    {
        // Customer id column
        customer_no[i] = i;

        // Random Iat column
        if (i == 0 || i == 1)
            riat[i] = 0;
        else
            riat[i] = (rand() % 1000) + 1;

        // = IF(B4 <= 125, 1, IF(B4 <= 250, 2, IF(B4 <= 375, 3, IF(B4 <= 500, 4, IF(B4 <= 625, 5, IF(B4 <= 750, 6, IF(B4 <= 875, 7, IF(B4 <= 1000, 8))))))))

        // IAT
        if (i == 0 || i == 1)
            iat[i] = 0;
        else if (riat[i] <= 125)
            iat[i] = 1;
        else if (riat[i] <= 250)
            iat[i] = 2;
        else if (riat[i] <= 375)
            iat[i] = 3;
        else if (riat[i] <= 500)
            iat[i] = 4;
        else if (riat[i] <= 625)
            iat[i] = 5;
        else if (riat[i] <= 750)
            iat[i] = 6;
        else if (riat[i] <= 875)
            iat[i] = 7;
        else if (riat[i] <= 1000)
            iat[i] = 8;

        // Arrival Time
        if (i == 0 || i == 1)
            at[i] = 0;
        else
            at[i] = iat[i] + at[i - 1];

        // Random Service Time column
        if (i == 0)
            rst[i] = 0;
        else
            rst[i] = (rand() % 1000) + 1;

        cout << customer_no[i] << "\t" << riat[i] << "\t" << iat[i] << "\t" << at[i] << "\t" << rst[i] << endl;
    }
}

// 2no ->
// tse  ->24min

// 3no ->
// arr  -> 20min
// wait -> 4min
//     2no -> bair hyese 24min
// tsb  -> 24min
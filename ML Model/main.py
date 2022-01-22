import pandas as pd
from bs4 import BeautifulSoup
from urllib.request import urlopen, Request

def Extraction(company):
    n = 10
    tickers = [company]
    # Get Data
    finwiz_url = 'https://finviz.com/quote.ashx?t='
    news_tables = {}
    result = []
    for ticker in tickers:
        url = finwiz_url + ticker
        req = Request(url=url, headers={'user-agent': 'my-app/0.0.1'})
        resp = urlopen(req)
        html = BeautifulSoup(resp, features="lxml")
        news_table = html.find(id='news-table')
        news_tables[ticker] = news_table

    try:
        for ticker in tickers:
            df = news_tables[ticker]
            df_tr = df.findAll('tr')

            print('\n')
            # print('Recent News Headlines for {}: '.format(ticker))
            for i, table_row in enumerate(df_tr):
                a_text = table_row.a.text
                td_text = table_row.td.text
                td_text = td_text.strip()
                # print(a_text, '(', td_text, ')')
                result.append((a_text, '(', td_text, ')'))
                if i == n - 1:
                    break
    except KeyError:
        pass

    return result

# Extraction("GOOG")
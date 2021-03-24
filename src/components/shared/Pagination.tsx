// react
import React from 'react';
// application
import { ArrowRoundedLeft7x11Svg, ArrowRoundedRight7x11Svg } from '~/svg';
import {
    PaginationPagination ,
    PageItem ,
    PageLink ,
    CurrentPageLink ,
    PageLinkWithArrow ,
    PageLinkArrowLeft ,
    PageLinkArrowRight ,
    PageItemDot ,
    PaginationDots ,
} from '~/styled-components/components/Pagination';
interface Props {
    siblings?: number;
    current?: number;
    total?: number;
    onPageChange?: (page: number) => void;
}

function Pagination(props: Props) {
    const {
        siblings = 1,
        current = 1,
        total = 1,
        onPageChange,
    } = props;

    const setPage = (value: number) => {
        if (value < 1 || value > total || value === current) {
            return;
        }

        if (onPageChange) {
            onPageChange(value);
        }
    };

    const getPages = () => {
        const pages = [];
        const min = Math.max(1, current - siblings - Math.max(0, siblings - total + current));
        const max = Math.min(total, min + siblings * 2);

        for (let i = 1; i <= Math.min(min - 1, 1); i += 1) {
            pages.push(i);
        }

        if (min - 1 >= 3) {
            pages.push(0);
        } else if (min - 1 >= 2) {
            pages.push(min - 1);
        }

        for (let i = min; i <= max; i += 1) {
            pages.push(i);
        }

        if (max + 1 <= total - 2) {
            pages.push(0);
        } else if (max + 1 <= total - 1) {
            pages.push(max + 1);
        }

        for (let i = Math.max(max + 1, total); i <= total; i += 1) {
            pages.push(i);
        }

        return pages;
    };

    return (
        < PaginationPagination >
            <PageItem isdisabled={current <= 1}  >
                <PageLinkWithArrow
                    type="button"
                    aria-label="Previous"
                    onClick={() => setPage(current - 1)}
                >
                    <PageLinkArrowLeft  aria-hidden="true">
                        <ArrowRoundedLeft7x11Svg />
                    </PageLinkArrowLeft>
                </PageLinkWithArrow>
            </PageItem>

            {getPages().map((page) => (
                <React.Fragment key={page}>
                    {page !== 0 && (
                        <PageItem  isactive ={page === current}
                            aria-current={page === current ? 'page' : undefined}
                        >
                            {page !== current && (
                                <PageLink type="button"  onClick={() => setPage(page)}>
                                    {page}
                                </PageLink>
                            )}
                            {page === current && (
                                <CurrentPageLink >
                                    {page}
                                    <span className="sr-only">(current)</span>
                                </CurrentPageLink>
                            )}
                        </PageItem>
                    )}
                    {page === 0 && (
                        <PageItemDot >
                            <PaginationDots  />
                        </PageItemDot>
                    )}
                </React.Fragment>
            ))}

            <PageItem isdisabled={current >= total} >
                <PageLinkWithArrow
                    type="button"
                    aria-label="Next"
                    onClick={() => setPage(current + 1)}
                >
                    <PageLinkArrowRight  aria-hidden="true">
                        <ArrowRoundedRight7x11Svg />
                    </PageLinkArrowRight>
                </PageLinkWithArrow>
            </PageItem>
        </ PaginationPagination>
    );
}

export default Pagination;

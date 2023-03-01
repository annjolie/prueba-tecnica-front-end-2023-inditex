import React from 'react';
import type { EpisodeTableProps } from './types';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import NextLink from 'next/link';

export default function EpisodeTable({ rowsData }: EpisodeTableProps): JSX.Element {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="Podcast episodes table">
        <TableHead>
          <TableRow>
            <TableCell>Title</TableCell>
            <TableCell align="right">Date</TableCell>
            <TableCell align="right">Duration</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rowsData.map((row) => (
            <TableRow key={row.title} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell component="th" scope="row">
                <NextLink href={`/podcast/${row.podcastid}/episode/${row.episodeid}`}>{row.title}</NextLink>
              </TableCell>
              <TableCell align="right">{row.date}</TableCell>
              <TableCell align="right">{row.duration}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
